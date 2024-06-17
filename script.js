document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    let isEnglish = true;

    const textContent = {
        en: {
            name: "Ahmad Arif",
            title: "Software Engineer",
            aboutme: "About Me",
            about: "Welcome to my web page! As a seasoned full stack web developer, I specialize in creating captivating and interactive web applications. With expertise in HTML, CSS, JavaScript, React, Ruby, Ruby On Rails, Node.js, Express.js, and MongoDB, I am well-equipped to handle complex projects. I thrive in challenging environments, collaborating with clients and fellow developers to craft exceptional web solutions. My user-centric approach focuses on delivering easy-to-navigate, visually appealing, and engaging websites optimized for all devices. With strong communication skills and a commitment to timely and cost-effective results, I stay updated with the latest trends and technologies. Whether you need a simple website or a feature-rich web application, I have the skills and knowledge to meet your requirements. Don't hesitate to reach out if you're interested in working together!",
            projectsTitle: "Projects",
            projects: [
                {
                    title: "Project One: Connect Four Game",
                    description: "The objective of a Connect Four game is to provide an engaging and challenging game for players of all ages. The game is easy to learn, but provide enough strategy and depth to keep players engaged and coming back for more. built with HTML, CSS, Javascriopt.",
                    link: "https://ahmadalarif.github.io/connect4/"
                },
                {
                    title: "Project Two (FrontEnd): GYM Members registration and booking Page",
                    description: "The objective of this system is to provide a convenient and efficient way for gym members to reserve spots in fitness classes offered at the gym. This system is enable members to easily browse through available classes and schedules, and make reservations for the classes they wish to attend. built with PHP",
                    link: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/"
                },
                {
                    title: "Project Two (BackEnd): GYM Admin dashboard",
                    description: "The gym class booking system  allow gym administrators to manage class schedules, set class capacities, and track attendance. This system is providing real-time updates on class availability and allow for automated waitlist management. built with PHP-Cpanel (User Name: admin,  Password: admin)",
                    link: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/m_cpanel/"
                },
                {
                    title: "Project Three: Online Food & Beverage Menu",
                    description: "The objective of this online food menu is to provide a user-friendly platform for customers to browse through available food options and place orders for delivery, takeout, or dine-in at a restaurant. The online food menu is offering an easy-to-use interface that is accessible through multiple devices, including desktop computers, tablets, and smartphones. built with Gatsby for frontend and Contentful for the backend",
                    link: "https://awesome-varahamihira-16b9b2.netlify.app/"
                },
                {
                    title: "Project Four: Al Raedah Finance About Page",
                    description: "About Page with devise and devise active admin (Login system for user and admin) for AlRaedah Finance Company Using Ruby On Rails framework with Render for hosting and deployment.",
                    link: "https://raedahfinance-0668740915a9.herokuapp.com"
                }
            ],
            contactTitle: "Contact",
            contact: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send"
            },
            whatsappButton: "Contact me on WhatsApp",
            languageButton: "عربى"
        },
        ar: {
            name: "أحمد عارف",
            title: "مهندس برمجيات",
            aboutme: "نبذة عني",
            about: "مرحبًا بك في صفحتي الشخصية! أعمل كمطور ومهندس ويب متكامل من ذوي الخبرة، متخصص في إنشاء تطبيقات الويب المتميزة والتفاعلية. بفضل خبرتي في اتش تي ام ال و سي اس اس و جافا سكربت و ري اكت و روبي وروبي اون ريلز و نود جي اس و اكس برس جي اس و مونجو دي بي، أنا مجهز جيدًا للتعامل مع المشاريع المعقدة. وأتعاون مع العملاء والزملاء المطورين لإنشاء حلول ويب استثنائية. يرتكز اهتمامي على المستخدم النهائي ليستفيد من مواقع ويب سهلة التصفح وجذابة بصريًا ومشوقة ومستجيبة لجميع الأجهزة. مع مهارات اتصال قوية والتزام بتقديم نتائج في الوقت المناسب وفعالة من حيث التكلفة، استخدم أحدث التقنيات. سواء كنت بحاجة إلى موقع بسيط أو تطبيق ويب غني بالمميزات، لدي المهارات والمعرفة الكافية لتلبية متطلباتك. لا تتردد في التواصل إذا كنت مهتمًا بالعمل معاً!",
            projectsTitle: "المشاريع",
            projects: [
                {
                    title: "المشروع الأول : لعبة توصيل أربعة",
                    description: "هدف لعبة توصيل أربعة هو توفير لعبة جذابة وتحديًا للاعبين من جميع الأعمار. اللعبة سهلة التعلم، وتوفر مستوى كافٍ من الاستراتيجية والعمق لإبقاء اللاعبين مشغولين ويرغبون بتكرار اللعب. تم استخدام لغة اتش تي ام ال وجافا سكربت مع سي اس اس",
                    link: "https://ahmadalarif.github.io/connect4/"
                },
                {
                    title: "المشروع الثاني: واجهة المستخدم لعضو الصالة الرياضية لحجز حصة",
                    description: "الهدف من هذا النظام هو توفير وسيلة مريحة وفعالة لأعضاء النادي الرياضي لحجز أماكن في حصص اللياقة المقدمة في النادي الرياضي. يمكّن هذا النظام الأعضاء بسهولة من تصفح النشاطات والجداول المتاحة والحجز في النشاط الذي يرغبون بالحضور إليه. تم بناء هذا المشروع بواسطة لغة بي اتش بي",
                    link: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/"
                },
                {
                    title: " المشروع الثاني: لوحة تحكم للمدير لإدارة عمليات النادي",
                    description: "نظام حجز فصول اللياقة البدنية يسمح لمسؤولي النوادي الرياضية بإدارة جداول الفصول، والتحكم في عدد الحضور، وتتبع الحضور. يقدم هذا النظام تحديثات فورية عن إمكانية الحجز، ويسمح بإدارة قائمة الانتظار بشكل آلي. اسم المستخدم:admin كلمة المرور : admin",
                    link: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/m_cpanel/"
                },
                {
                    title: " المشروع الثالث: قائمة طعام الكترونية",
                    description: "هدف هذه القائمة الإلكترونية هو توفير منصة سهلة الاستخدام للعملاء لتصفح خيارات الطعام المتاحة وتقديم الطلبات للتوصيل أو الاستلام أو تناول الطعام في المطعم. توفر قائمة الطعام الإلكترونية واجهة سهلة الاستخدام يمكن الوصول إليها من خلال أجهزة متعددة، بما في ذلك أجهزة الحاسوب المكتبي والأجهزة اللوحية والهواتف الذكية. تم استخدام إطار عمل جاتسبي ري أكت للواجهة الأمامية وكونتينت فل لإدارة المحتوى",
                    link: "https://awesome-varahamihira-16b9b2.netlify.app/"
                },
                {
                    title: "المشروع الرابع: صفحة تعريف لشركة الرائدة المالية",
                    description: "المشروع عبارة عن صفحة تعريف لشركة الرائدة المالية بنظام تسجيل دخول لمستخدمين ومسؤولين وبصفحة خاصة للمسؤول لإضافة وحذف المستخدمين وتعديل المعلومات مع إمكانية تنزيل الملفات بصيغة (بي دي اف او اكسل) باستخدام إطار عمل روبي اون ريلز",
                    link: "https://raedahfinance-0668740915a9.herokuapp.com"
                }
            ],
            contactTitle: "تواصل معي",
            contact: {
                name: "الاسم",
                email: "البريد الإلكتروني",
                message: "الرسالة",
                send: "إرسال"
            },
            whatsappButton: "تواصل معي على WhatsApp",
            languageButton: "English"
        }
    };

    function setLanguage (lang) {
        document.getElementById('name').textContent = textContent[lang].name;
        document.getElementById('title').textContent = textContent[lang].title;
        document.getElementById('about-text').textContent = textContent[lang].about;
        document.getElementById('aboutme').textContent = textContent[lang].aboutme;
        document.getElementById('projects-title').textContent = textContent[lang].projectsTitle;
        document.getElementById('contact-title').textContent = textContent[lang].contactTitle;

        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        textContent[lang].projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('text-xl', 'font-bold');
            projectTitle.textContent = project.title;

            const projectDescription = document.createElement('p');
            projectDescription.classList.add('text-lg');
            projectDescription.textContent = project.description;

            const projectLink = document.createElement('a');
            projectLink.classList.add('text-blue-600');
            projectLink.href = project.link;
            projectLink.textContent = lang === 'en' ? "View Project" : "عرض المشروع";

            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(projectLink);

            projectList.appendChild(projectItem);
        });

        document.querySelector('label[for="contact-name"]').textContent = textContent[lang].contact.name;
        document.querySelector('label[for="contact-email"]').textContent = textContent[lang].contact.email;
        document.querySelector('label[for="contact-message"]').textContent = textContent[lang].contact.message;
        document.getElementById('contact-submit').textContent = textContent[lang].contact.send;

        const whatsappButton = document.querySelector('a[href^="https://wa.me/"]');
        whatsappButton.textContent = textContent[lang].whatsappButton;

        languageToggle.textContent = textContent[lang].languageButton;

        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        setLanguage(isEnglish ? 'en' : 'ar');
    });

    // Initialize with English content
    setLanguage('en');

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert(isEnglish ? 'Message sent!' : 'تم إرسال الرسالة!');
        e.target.reset();
    });
});
