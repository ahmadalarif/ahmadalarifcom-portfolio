document.addEventListener("DOMContentLoaded", () => {
  // DOM Element References
  const elements = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    aboutme: document.getElementById("aboutme"),
    aboutText: document.getElementById("about-text"),
    projectsTitle: document.getElementById("projects-title"),
    contactTitle: document.getElementById("contact-title"),
    videosKicker: document.getElementById("videos-kicker"),
    videosTitle: document.getElementById("videos-title"),
    videosIntro: document.getElementById("videos-intro"),
    videoOneTitle: document.getElementById("video-one-title"),
    videoOneText: document.getElementById("video-one-text"),
    videoTwoTitle: document.getElementById("video-two-title"),
    videoTwoText: document.getElementById("video-two-text"),
    videoThreeTitle: document.getElementById("video-three-title"),
    videoThreeText: document.getElementById("video-three-text"),
    videoFourTitle: document.getElementById("video-four-title"),
    videoFourText: document.getElementById("video-four-text"),
    videoFiveTitle: document.getElementById("video-five-title"),
    videoFiveText: document.getElementById("video-five-text"),
    videoSixTitle: document.getElementById("video-six-title"),
    videoSixText: document.getElementById("video-six-text"),
    videoSevenTitle: document.getElementById("video-seven-title"),
    videoSevenText: document.getElementById("video-seven-text"),
    videoEightTitle: document.getElementById("video-eight-title"),
    videoEightText: document.getElementById("video-eight-text"),
    videoNineTitle: document.getElementById("video-nine-title"),
    videoNineText: document.getElementById("video-nine-text"),
    projectList: document.getElementById("project-list"),
    languageToggle: document.getElementById("language-toggle"),
    currentYear: document.getElementById("current-year"),
  };

  // Translation Content
  const textContent = {
    en: {
      name: "Ahmad Arif",
      title: "Software Engineer || Freelancer Web-developer",
      aboutme: "About Me",
      about:
        "Welcome to my web page! As a seasoned full stack web developer, I specialize in creating captivating and interactive web applications. With expertise in HTML, CSS, JavaScript, React, Ruby, Ruby On Rails, Node.js, Express.js, and MongoDB, I am well-equipped to handle complex projects. I thrive in challenging environments, collaborating with clients and fellow developers to craft exceptional web solutions. My user-centric approach focuses on delivering easy-to-navigate, visually appealing, and engaging websites optimized for all devices. With strong communication skills and a commitment to timely and cost-effective results, I stay updated with the latest trends and technologies. Whether you need a simple website or a feature-rich web application, I have the skills and knowledge to meet your requirements. Don't hesitate to reach out if you're interested in working together!",
      projectsTitle: "Projects",
      videos: {
        kicker: "Generated videos",
        title: "Website demos created with my video generator",
        intro:
          "A hidden tool records website walkthroughs automatically, then the finished demos appear here as portfolio proof.",
        firstTitle: "Bin Jabhan Honey storefront walkthrough",
        firstText:
          "A quick product-focused capture showing the live shopping experience and page flow.",
        secondTitle: "Responsive commerce experience",
        secondText:
          "A second generated pass highlighting interface movement, content rhythm, and storefront presentation.",
        thirdTitle: "Bin Jabhan Honey iOS app demo",
        thirdText:
          "A mobile walkthrough showing the iPhone shopping flow and app interface.",
        fourthTitle: "Bin Jabhan Honey Android app demo",
        fourthText:
          "A mobile walkthrough showing the Android shopping flow and app interface.",
        fifthTitle: "Alma Center website walkthrough",
        fifthText:
          "A generated demo for the Arabic Alma Center web experience.",
        sixthTitle: "Creative Tracks Marine demo",
        sixthText:
          "A generated website walkthrough for the Creative Tracks Marine project.",
        seventhTitle: "Home Services app demo",
        seventhText:
          "A generated walkthrough showing the Home Services app landing experience.",
        eighthTitle: "Alfahad Maintenance website demo",
        eighthText:
          "A generated walkthrough for the maintenance services website experience.",
        ninthTitle: "Golden Loaf website demo",
        ninthText:
          "A generated walkthrough for the Golden Loaf bakery and food brand website.",
      },
      projects: [
        {
          title: "Project One: Connect Four Game",
          description:
            "A classic Connect Four implementation with modern UI/UX features. Built with vanilla JavaScript, HTML5, and CSS3 with responsive design principles.",
          link: "https://ahmadalarif.github.io/connect4/",
          videoSrc: "/generated-videos/ahmadalarif-github-io-1785605446457.webm",
        },
        {
          title: "Online Food Ordering System",
          description:
            "Full-stack food ordering platform with menu customization and order tracking. Built with Gatsby (React) frontend and Contentful CMS backend.",
          link: "https://awesome-varahamihira-16b9b2.netlify.app/",
          videoSrc:
            "/generated-videos/awesome-varahamihira-16b9b2-netlify-app-1785605484844.webm",
        },
        {
          title: "Finance Company Portal",
          description:
            "Secure client portal for financial services company with document management features. Built with Ruby on Rails and deployed on Render.",
          link: "https://alraedah.sa/en/",
        },
        {
          title: "React Calculator App",
          description:
            "Interactive calculator application demonstrating React state management and component architecture.",
          link: "https://reactcalculatorapp1.netlify.app/",
          videoSrc:
            "/generated-videos/reactcalculatorapp1-netlify-app-1785605588753.webm",
        },
        {
          title: "Alma Center Website",
          description:
            "Arabic web experience for a center platform with a polished public interface and responsive layout.",
          link: "https://alma-center1.com/ar",
          videoSrc: "/generated-videos/alma-center1-com-1785605192855.webm",
        },
        {
          title: "Creative Tracks Marine",
          description:
            "Marine-focused website experience deployed on Firebase with a clean promotional interface.",
          link: "https://creative-tracks-marine-db.web.app",
          videoSrc:
            "/generated-videos/creative-tracks-marine-db-web-app-1785605222395.webm",
        },
        {
          title: "Home Services App",
          description:
            "Service marketplace web app landing experience for booking and discovering home services.",
          link: "https://homeservicesapp11.web.app",
          videoSrc:
            "/generated-videos/homeservicesapp11-web-app-1785605260473.webm",
        },
        {
          title: "Alfahad Maintenance",
          description:
            "Maintenance services website with a clear service presentation and customer-facing layout.",
          link: "https://www.alfahadmaintenance.com",
          videoSrc:
            "/generated-videos/alfahadmaintenance-com-1785606567836.webm",
        },
        {
          title: "Golden Loaf",
          description:
            "Bakery and food brand website with a warm product presentation and responsive interface.",
          link: "https://goldenloaft.com",
          videoSrc: "/generated-videos/goldenloaft-com-1785606593639.webm",
        },
      ],
      contactTitle: "Contact",
      contact: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
      whatsappButton: "Contact me on WhatsApp",
    },
    ar: {
      name: "أحمد عارف",
      title: "مهندس برمجيات || مبرمج ومطور مواقع ويب مستقل",
      aboutme: "نبذة عني",
      about:
        "مرحبًا بكم في موقعي الشخصي! كمطور ويب شامل ذو خبرة، أتخصص في إنشاء وبرمجة المواقع وتطبيقات الويب التفاعلية الجذابة. أمتلك مهارات متقدمة في HTML وCSS وJavaScript وReact وRuby وRuby On Rails وNode.js وExpress.js وMongoDB، مما يمكنني من التعامل مع المشاريع المعقدة. متخصص  في التعامل مع  البيئات الصعبة وأتعاون مع العملاء والمطورين لإنشاء حلول ويب استثنائية. يركز نهجي على المستخدم النهائي لضمان سهولة الاستخدام والجاذبية البصرية والأداء الممتاز على جميع الأجهزة. مع مهارات اتصال قوية والتزام بتسليم النتائج في الوقت المحدد، أبقى دائمًا على اطلاع بأحدث التقنيات. سواء كنت بحاجة إلى موقع ويب بسيط أو تطبيق ويب متكامل، فأنا أمتلك المهارات اللازمة لتحقيق متطلباتك. لا تتردد في التواصل إذا كنت مهتمًا بالعمل معًا!",
      projectsTitle: "المشاريع",
      videos: {
        kicker: "فيديوهات مولدة",
        title: "عروض مواقع تم إنشاؤها بأداة توليد الفيديو",
        intro:
          "أداة مخفية تسجل استعراضات المواقع تلقائيًا، ثم تظهر المقاطع النهائية هنا كجزء من الأعمال.",
        firstTitle: "استعراض متجر بن جبهان للعسل",
        firstText:
          "تسجيل سريع يوضح تجربة التسوق المباشرة وتصفح صفحات المنتجات.",
        secondTitle: "تجربة تجارة إلكترونية متجاوبة",
        secondText:
          "تسجيل ثان يبرز حركة الواجهة وإيقاع المحتوى وطريقة عرض المتجر.",
        thirdTitle: "استعراض تطبيق بن جبهان للعسل على iOS",
        thirdText:
          "تسجيل جوال يوضح تجربة التسوق وواجهة التطبيق على الآيفون.",
        fourthTitle: "استعراض تطبيق بن جبهان للعسل على Android",
        fourthText:
          "تسجيل جوال يوضح تجربة التسوق وواجهة التطبيق على أندرويد.",
        fifthTitle: "استعراض موقع ألما سنتر",
        fifthText:
          "عرض مولد لتجربة موقع ألما سنتر العربي.",
        sixthTitle: "استعراض Creative Tracks Marine",
        sixthText:
          "عرض مولد لتجربة موقع مشروع Creative Tracks Marine.",
        seventhTitle: "استعراض تطبيق الخدمات المنزلية",
        seventhText:
          "عرض مولد يوضح واجهة تطبيق الخدمات المنزلية وتجربة الصفحة الرئيسية.",
        eighthTitle: "استعراض موقع الفهد للصيانة",
        eighthText:
          "عرض مولد لتجربة موقع خدمات الصيانة وواجهة العملاء.",
        ninthTitle: "استعراض موقع Golden Loaf",
        ninthText:
          "عرض مولد لموقع علامة مخابز وأطعمة بواجهة متجاوبة.",
      },
      projects: [
        {
          title: "المشروع الأول: لعبة توصيل أربعة",
          description:
            "تنفيذ حديث للعبة Connect Four الكلاسيكية بواجهة مستخدم متطورة. تم البناء باستخدام JavaScript وHTML5 وCSS3 بتصميم سريع الاستجابة.",
          link: "https://ahmadalarif.github.io/connect4/",
          videoSrc: "/generated-videos/ahmadalarif-github-io-1785605446457.webm",
        },
        {
          title: "نظام طلب الطعام الإلكتروني",
          description:
            "منصة كاملة لإدارة طلبات الطعام مع تتبع الطلبات. تم البناء باستخدام Gatsby (React) للواجهة الأمامية وContentful لإدارة المحتوى.",
          link: "https://awesome-varahamihira-16b9b2.netlify.app/",
          videoSrc:
            "/generated-videos/awesome-varahamihira-16b9b2-netlify-app-1785605484844.webm",
        },
        {
          title: "بوابة شركة التمويل",
          description:
            "بوابة عملاء آمنة لشركة خدمات مالية مع إدارة المستندات. تم البناء باستخدام Ruby on Rails والنشر على Render.",
          link: "https://alraedah.sa/en/",
        },
        {
          title: "تطبيق آلة حاسبة",
          description:
            "آلة حاسبة تفاعلية توضح إدارة الحالة وهندسة المكونات في ريأكت.",
          link: "https://reactcalculatorapp1.netlify.app/",
          videoSrc:
            "/generated-videos/reactcalculatorapp1-netlify-app-1785605588753.webm",
        },
        {
          title: "موقع ألما سنتر",
          description:
            "تجربة ويب عربية لمنصة مركزية بواجهة عامة مصقولة وتصميم متجاوب.",
          link: "https://alma-center1.com/ar",
          videoSrc: "/generated-videos/alma-center1-com-1785605192855.webm",
        },
        {
          title: "Creative Tracks Marine",
          description:
            "تجربة موقع موجهة للمجال البحري ومنشورة على Firebase بواجهة تعريفية واضحة.",
          link: "https://creative-tracks-marine-db.web.app",
          videoSrc:
            "/generated-videos/creative-tracks-marine-db-web-app-1785605222395.webm",
        },
        {
          title: "تطبيق الخدمات المنزلية",
          description:
            "تجربة ويب لتطبيق خدمات منزلية تساعد المستخدم على اكتشاف الخدمات وحجزها.",
          link: "https://homeservicesapp11.web.app",
          videoSrc:
            "/generated-videos/homeservicesapp11-web-app-1785605260473.webm",
        },
        {
          title: "الفهد للصيانة",
          description:
            "موقع لخدمات الصيانة يعرض الخدمات بوضوح مع واجهة مناسبة للعملاء.",
          link: "https://www.alfahadmaintenance.com",
          videoSrc:
            "/generated-videos/alfahadmaintenance-com-1785606567836.webm",
        },
        {
          title: "Golden Loaf",
          description:
            "موقع لعلامة مخابز وأطعمة يعرض المنتجات بأسلوب دافئ وواجهة متجاوبة.",
          link: "https://goldenloaft.com",
          videoSrc: "/generated-videos/goldenloaft-com-1785606593639.webm",
        },
      ],
      contactTitle: "تواصل معي",
      contact: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال",
      },
      whatsappButton: "تواصل معي عبر واتساب",
    },
  };

  // Safe Content Update Helper
  const safeUpdate = (element, content) => {
    if (element) element.textContent = content;
  };

  // Project Element Creator
  const createProject = (project, lang) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-item bg-gray-800 p-6 rounded-lg";

    if (project.videoSrc) {
      const preview = document.createElement("div");
      preview.className = "project-preview";

      const video = document.createElement("video");
      video.controls = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";

      const source = document.createElement("source");
      source.src = project.videoSrc;
      source.type = "video/webm";

      video.appendChild(source);
      preview.appendChild(video);
      projectDiv.appendChild(preview);
    }

    const title = document.createElement("h3");
    title.className = "text-xl font-bold mb-2";
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "text-gray-400 mb-4";
    description.textContent = project.description;

    const link = document.createElement("a");
    link.className = "portfolio-button secondary project-link";
    link.href = project.link;
    link.textContent = lang === "en" ? "View Project" : "عرض المشروع";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    projectDiv.append(title, description, link);
    return projectDiv;
  };

  // Project Animation Controller
  const revealProjects = () => {
    document.querySelectorAll(".project-item").forEach((item, index) => {
      setTimeout(() => item.classList.add("visible"), index * 150);
    });
  };

  // Language Management System
  const setLanguage = (lang) => {
    try {
      const content = textContent[lang];

      // Update Text Content
      Object.entries({
        name: content.name,
        title: content.title,
        aboutme: content.aboutme,
        aboutText: content.about,
        projectsTitle: content.projectsTitle,
        videosKicker: content.videos.kicker,
        videosTitle: content.videos.title,
        videosIntro: content.videos.intro,
        videoOneTitle: content.videos.firstTitle,
        videoOneText: content.videos.firstText,
        videoTwoTitle: content.videos.secondTitle,
        videoTwoText: content.videos.secondText,
        videoThreeTitle: content.videos.thirdTitle,
        videoThreeText: content.videos.thirdText,
        videoFourTitle: content.videos.fourthTitle,
        videoFourText: content.videos.fourthText,
        videoFiveTitle: content.videos.fifthTitle,
        videoFiveText: content.videos.fifthText,
        videoSixTitle: content.videos.sixthTitle,
        videoSixText: content.videos.sixthText,
        videoSevenTitle: content.videos.seventhTitle,
        videoSevenText: content.videos.seventhText,
        videoEightTitle: content.videos.eighthTitle,
        videoEightText: content.videos.eighthText,
        videoNineTitle: content.videos.ninthTitle,
        videoNineText: content.videos.ninthText,
        contactTitle: content.contactTitle,
      }).forEach(([key, value]) => safeUpdate(elements[key], value));

      // Update Form Elements
      ["name", "email", "message"].forEach((field) => {
        safeUpdate(
          document.getElementById(`contact-${field}-label`),
          content.contact[field]
        );
        document.getElementById(`contact-${field}`).placeholder =
          content.contact[field];
      });

      // Update Projects Grid
      elements.projectList.innerHTML = "";
      content.projects.forEach((project) => {
        elements.projectList.appendChild(createProject(project, lang));
      });

      // Update WhatsApp Button
      const whatsappText = document.getElementById("whatsapp-button-text");
      if (whatsappText) {
        whatsappText.textContent = content.whatsappButton;
      }

      // Update Submit Button
      safeUpdate(
        document.getElementById("contact-submit"),
        content.contact.send
      );

      // Update Layout Direction
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      const langText = document.getElementById("language-toggle-text");
      if (langText) {
        langText.textContent = lang === "en" ? "عربى" : "English";
      }

      // Trigger Animations
      revealProjects();
    } catch (error) {
      console.error("Language switch error:", error);
      const message =
        lang === "en" ? "Error changing language" : "خطأ في تغيير اللغة";
      alert(message);
    }
  };

  // Language Toggle Event
  elements.languageToggle.addEventListener("click", () => {
    const newLang = document.documentElement.lang === "en" ? "ar" : "en";
    localStorage.setItem("portfolioLang", newLang);
    setLanguage(newLang);
  });

  // Initial Setup
  const savedLang = localStorage.getItem("portfolioLang") || "en";
  elements.currentYear.textContent = new Date().getFullYear();
  setLanguage(savedLang);
});
