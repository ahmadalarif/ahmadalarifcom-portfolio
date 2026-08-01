const express = require("express");
const { chromium } = require("playwright");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const outputDirectory = path.join(__dirname, "generated-videos");

app.use(express.json());
app.use(
  "/generated-videos",
  express.static(outputDirectory)
);
app.use(express.static(__dirname));

function normalizeDomain(domain) {
  const value = String(domain || "").trim();

  if (!value) {
    throw new Error("Please enter a domain name.");
  }

  const url = value.startsWith("http://") || value.startsWith("https://")
    ? new URL(value)
    : new URL(`https://${value}`);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP and HTTPS websites are supported.");
  }

  return url;
}

function createSafeFilename(hostname) {
  return hostname
    .replace(/^www\./, "")
    .replace(/[^a-zA-Z0-9.-]/g, "-")
    .replace(/\.+/g, "-");
}

async function scrollPage(page) {
  await page.evaluate(async () => {
    const wait = (milliseconds) =>
      new Promise((resolve) => setTimeout(resolve, milliseconds));

    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const viewportHeight = window.innerHeight;
    const maximumScroll = Math.max(pageHeight - viewportHeight, 0);
    const numberOfSteps = 80;

    for (let step = 0; step <= numberOfSteps; step += 1) {
      const position = maximumScroll * (step / numberOfSteps);

      window.scrollTo({
        top: position,
        behavior: "auto"
      });

      await wait(70);
    }

    await wait(1000);

    for (let step = numberOfSteps; step >= 0; step -= 1) {
      const position = maximumScroll * (step / numberOfSteps);

      window.scrollTo({
        top: position,
        behavior: "auto"
      });

      await wait(30);
    }
  });
}

app.post("/api/generate-video", async (request, response) => {
  let browser;

  try {
    const targetUrl = normalizeDomain(request.body.domain);
    const filenameBase = createSafeFilename(targetUrl.hostname);
    const finalFilename = `${filenameBase}-${Date.now()}.webm`;
    const finalPath = path.join(outputDirectory, finalFilename);

    await fs.mkdir(outputDirectory, { recursive: true });

    browser = await chromium.launch({
      headless: true
    });

    const context = await browser.newContext({
      viewport: {
        width: 1440,
        height: 900
      },
      recordVideo: {
        dir: outputDirectory,
        size: {
          width: 1440,
          height: 900
        }
      }
    });

    const page = await context.newPage();
    const video = page.video();

    await page.goto(targetUrl.href, {
      waitUntil: "networkidle",
      timeout: 60000
    });

    // Wait for animations, images and fonts.
    await page.waitForTimeout(2500);

    // Start at the top of the website.
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    await page.waitForTimeout(1200);

    // Automatically demonstrate the page.
    await scrollPage(page);

    await page.waitForTimeout(1500);

    /*
     * The context must close before Playwright finishes
     * writing the recorded video.
     */
    await context.close();

    const temporaryVideoPath = await video.path();

    await fs.rename(temporaryVideoPath, finalPath);
    await browser.close();
    browser = null;

    response.json({
      success: true,
      domain: targetUrl.hostname,
      videoUrl: `/generated-videos/${finalFilename}`
    });
  } catch (error) {
    if (browser) {
      await browser.close().catch(() => {});
    }

    console.error(error);

    response.status(500).json({
      success: false,
      message: error.message || "Could not generate the video."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Video generator running at http://localhost:${PORT}`);
});
