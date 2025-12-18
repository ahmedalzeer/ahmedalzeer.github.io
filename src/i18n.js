import { createI18n } from "vue-i18n";

// ------------------------------------
// 1. Translation Messages
// ------------------------------------
const messages = {
    en: {
        // Navigation & UI
        home: "Home",
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact",
        switch_to_ar: "عربي (AR)",
        switch_to_en: "English (EN)",

        project_card: {
            view_project: "View Project",
        },

        // General Info
        name: "Ahmed Ali Ahmed Mohamed",
        title: "Full Stack Developer",
        tagline:
            "Over 7 years of experience in building high-performance applications using Laravel, Vue.js, and MySQL. Specialized in creating scalable ERP systems and modern web solutions.",
        social_github: "GitHub",
        social_linkedin: "LinkedIn",
        social_email: "Email",

        // 1. Experience Section (Unified Structure)
        exp_title: "Professional Experience",
        exp_list: {
            acs: {
                role: "Full Stack Developer",
                company: "Arabic Computer Systems (ACS) | Saudi Arabia",
                date: "Sep 2022 - Jul 2025",
                desc: "Led PHP projects with Laravel, integrated $CI/CD$ pipelines via GitHub Actions, and mentored junior developers.",
            },
            namaatec: {
                role: "Full Stack Developer",
                company: "Namaatec | Saudi Arabia",
                date: "May 2021 - Sep 2022",
                desc: "Developed dynamic web apps with Laravel & Vue.js, optimized MySQL databases, and improved UI responsiveness.",
            },
            mu: {
                role: "Full Stack Developer",
                company: "Majmaah University (IT Deanship)",
                date: "Aug 2019 - May 2021",
                desc: "Architected custom ERP systems, built interactive front-ends using jQuery/Vue.js, and ensured cross-browser compatibility.",
            },
            freelance: {
                role: "PHP Developer (Freelancer)",
                company: "Freelance / Self-Employed",
                date: "May 2018 - Aug 2019",
                desc: "Created hotel management systems (booking, marketing, reports) and handled end-to-end web delivery.",
            },
        },

        // 2. Projects Section
        proj_title: "Featured Projects",
        projects_data: {
            acp: {
                title: "Academic Cooperation Portal",
                desc: "A portal to facilitate remote cooperation and applications for university units.",
                link: "https://acp.mu.edu.sa",
            },
            clinical: {
                title: "Clinical Services System",
                desc: "System for managing medical students' affairs and hospital training tracking.",
                link: "https://clinical.mu.edu.sa",
            },
            mms: {
                title: "Movement & Maintenance System",
                desc: "Managing university vehicles, maintenance operations, and fuel logs.",
                link: "https://mms.mu.edu.sa",
            },
            events: {
                title: "Conference Management System",
                desc: "Comprehensive system for managing conferences, invitations, attendance, and workshops.",
                link: "https://event.mu.edu.sa/",
            },
            hotel: {
                title: "Internal Hotel Suite",
                desc: "Management system for online bookings, service dispatch, and marketing reports.",
                link: "#",
            },
        },

        // 3. Skills Section
        skills_title: "Technical Expertise",
        skills_categories: {
            languages: "Languages: PHP, JavaScript, Python",
            frameworks:
                "Frameworks: Laravel, Vue.js (2/3), Inertia.js, Bootstrap, Tailwind",
            backend: "Backend/DB: MySQL, Oracle, Redis, WebSockets (Socket.io)",
            tools: "Tools: Git, $CI/CD$, Puppeteer (Scraping), Stripe/PayPal Integration",
        },
    },
    ar: {
        // Navigation & UI
        home: "الرئيسية",
        projects: "المشاريع",
        experience: "الخبرة",
        skills: "المهارات",
        contact: "اتصل بنا",
        switch_to_ar: "عربي (AR)",
        switch_to_en: "English (EN)",

        project_card: {
            view_project: "مشاهدة المشروع",
        },

        // General Info
        name: "أحمد علي أحمد محمد",
        title: "مطور ويب شامل (Full Stack)",
        tagline:
            "خبرة تزيد عن 7 سنوات في بناء تطبيقات عالية الأداء باستخدام Laravel و Vue.js و MySQL. متخصص في تطوير أنظمة ERP والحلول التقنية الحديثة.",
        social_github: "جيت هاب",
        social_linkedin: "لينكد إن",
        social_email: "البريد الإلكتروني",

        // 1. Experience Section (Unified Structure)
        exp_title: "الخبرة المهنية",
        exp_list: {
            acs: {
                role: "مطور ويب شامل",
                company: "شركة النظم الحاسوبية العربية | السعودية",
                date: "سبتمبر 2022 - يوليو 2025",
                desc: "قيادة مشاريع PHP باستخدام Laravel، دمج  $CI/CD$ عبر GitHub Actions، وتوجيه المطورين.",
            },
            namaatec: {
                role: "مطور ويب شامل",
                company: "شركة نماء تيك | السعودية",
                date: "مايو 2021 - سبتمبر 2022",
                desc: "تطوير تطبيقات ديناميكية بـ Laravel و Vue.js، وتحسين قواعد بيانات MySQL.",
            },
            mu: {
                role: "مطور ويب شامل",
                company: "جامعة المجمعة (عمادة تقنية المعلومات)",
                date: "أغسطس 2019 - مايو 2021",
                desc: "بناء أنظمة ERP مخصصة، تطوير واجهات تفاعلية بـ jQuery/Vue.js وضمان توافقية المتصفحات.",
            },
            freelance: {
                role: "مطور PHP (عمل حر)",
                company: "عمل حر",
                date: "مايو 2018 - أغسطس 2019",
                desc: "إنشاء أنظمة لإدارة الفنادق (حجوزات، تسويق، تقارير) وإدارة تسليم المشاريع بالكامل.",
            },
        },

        // 2. Projects Section
        proj_title: "أبرز المشاريع",
        projects_data: {
            acp: {
                title: "بوابة التعاون الأكاديمي",
                desc: "بوابة لتسهيل التعاون والتقديم عن بُعد بين الوحدات الجامعية.",
                link: "https://acp.mu.edu.sa",
            },
            clinical: {
                title: "نظام الخدمات الإكلينيكية",
                desc: "نظام لإدارة شؤون طلاب الكليات الطبية ومتابعة تدريباتهم الميدانية.",
                link: "https://clinical.mu.edu.sa",
            },
            mms: {
                title: "نظام الحركة والصيانة",
                desc: "إدارة مركبات الجامعة، متابعة الصيانة، وجدولة صرف الوقود.",
                link: "https://mms.mu.edu.sa",
            },
            events: {
                title: "نظام إدارة المؤتمرات",
                desc: "نظام متكامل لإدارة المؤتمرات يشمل الدعوات، تسجيل الحضور، والورش العمل.",
                link: "https://event.mu.edu.sa/",
            },
            hotel: {
                title: "نظام إدارة الفنادق",
                desc: "نظام لإدارة الحجوزات، طلبات الخدمة، وتقارير التسويق الداخلية.",
                link: "#",
            },
        },

        // 3. Skills Section
        skills_title: "المهارات التقنية",
        skills_categories: {
            languages: "اللغات: PHP, JavaScript, Python",
            frameworks:
                "الإطارات: Laravel, Vue.js, Inertia.js, Bootstrap, Tailwind",
            backend:
                "الخلفية وقواعد البيانات: MySQL, Oracle, Redis, WebSockets",
            tools: "الأدوات: Git, $CI/CD$, Puppeteer (Scraping), Stripe/PayPal",
        },
    },
};

// ------------------------------------
// 2. Vue-i18n Configuration
// ------------------------------------
const i18n = createI18n({
    // Use Composition API
    legacy: false,
    // Allow switching locales with i18n.global.locale.value
    globalInjection: true,
    // Set default locale
    locale: "en",
    fallbackLocale: "en",
    messages,
});

// ------------------------------------
// 3. Direction (RTL/LTR) Logic
// ------------------------------------

/**
 * Sets the 'dir' attribute on the HTML document element based on the current locale.
 * @param {string} locale - The active locale ('en' or 'ar').
 */
export function setDirection(locale) {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
}

// Set the direction immediately upon loading (default is 'en' -> 'ltr')
setDirection(i18n.global.locale.value);

export default i18n;
