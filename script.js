document.addEventListener("DOMContentLoaded", () => {
  // DOM Element References
  const elements = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    aboutme: document.getElementById("aboutme"),
    aboutText: document.getElementById("about-text"),
    projectsTitle: document.getElementById("projects-title"),
    contactTitle: document.getElementById("contact-title"),
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
      projects: [
        {
          title: "Project One: Connect Four Game",
          description:
            "A classic Connect Four implementation with modern UI/UX features. Built with vanilla JavaScript, HTML5, and CSS3 with responsive design principles.",
          link: "https://ahmadalarif.github.io/connect4/",
        },
        {
          title: "GYM Management System (Frontend)",
          description:
            "Member-facing interface for class registration and booking system. Features real-time availability updates and calendar integration. Developed with PHP and MySQL.",
          link: "https://maigrop.com/almacenters/",
        },
        {
          title: "GYM Management System (Backend)",
          description:
            "Admin dashboard with class scheduling, attendance tracking, and waitlist management. Secure authentication system with role-based access control.",
          link: "https://maigrop.com/almacenters/",
        },
        {
          title: "Online Food Ordering System",
          description:
            "Full-stack food ordering platform with menu customization and order tracking. Built with Gatsby (React) frontend and Contentful CMS backend.",
          link: "https://awesome-varahamihira-16b9b2.netlify.app/",
        },
        // {
        //   title: "Finance Company Portal",
        //   description:
        //     "Secure client portal for financial services company with document management features. Built with Ruby on Rails and deployed on Render.",
        //   link: "https://alraedah.sa/en/",
        // },
        {
          title: "React Calculator App",
          description:
            "Interactive calculator application demonstrating React state management and component architecture.",
          link: "https://reactcalculatorapp1.netlify.app/",
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
      projects: [
        {
          title: "المشروع الأول: لعبة توصيل أربعة",
          description:
            "تنفيذ حديث للعبة Connect Four الكلاسيكية بواجهة مستخدم متطورة. تم البناء باستخدام JavaScript وHTML5 وCSS3 بتصميم سريع الاستجابة.",
          link: "https://ahmadalarif.github.io/connect4/",
        },
        {
          title: "نظام إدارة النوادي الرياضية (الواجهة الأمامية)",
          description:
            "واجهة المستخدم لنظام حجز الفصول الرياضية مع تحديثات الوقت الحقيقي وتكامل التقويم. تم التطوير باستخدام PHP وMySQL.",
          link: "https://maigrop.com/almacenters/",
        },
        {
          title: "نظام إدارة النوادي الرياضية (الواجهة الخلفية)",
          description:
            "لوحة تحكم إدارية مع جدولة الفصول وتتبع الحضور وإدارة قوائم الانتظار. نظام مصادقة آمن مع صلاحيات مستندة على الأدوار.",
          link: "https://maigrop.com/almacenters/",
        },
        {
          title: "نظام طلب الطعام الإلكتروني",
          description:
            "منصة كاملة لإدارة طلبات الطعام مع تتبع الطلبات. تم البناء باستخدام Gatsby (React) للواجهة الأمامية وContentful لإدارة المحتوى.",
          link: "https://awesome-varahamihira-16b9b2.netlify.app/",
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

    const title = document.createElement("h3");
    title.className = "text-xl font-bold mb-2";
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "text-gray-400 mb-4";
    description.textContent = project.description;

    const link = document.createElement("a");
    link.className = "text-blue-400 hover:text-blue-300 transition-colors";
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
