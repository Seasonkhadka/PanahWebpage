// ========== Language (EN / नेपाली) ==========
const STORAGE_LANG = 'panah-lang';

const translations = {
    en: {
        nav: { home: 'Home', portfolio: 'Portfolio', videos: 'Videos', projects: 'Projects', contact: 'Contact' },
        hero: {
            badge: 'Actress • Writer • Director',
            tagline: "Crafting unforgettable performances and weaving narratives that resonate across cultures and generations",
            cta1: "Let's Collaborate",
            cta2: 'Explore My Work'
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'A visual journey through performances, creative processes, and milestone moments',
            featured: { title: 'Leading the Narrative', desc: 'Award-winning performance in "The Last Horizon"' },
            item1: { title: 'Movie Photography', desc: 'Capturing the essence of the film' },
            item2: { title: 'On Set', desc: 'Behind the scenes magic' },
            item3: { title: 'Portrait Session', desc: 'Capturing the essence' },
            item4: { title: 'In Character', desc: 'Transformation in progress' },
            item5: { title: 'Creative Process', desc: 'Where ideas come alive' },
            item6: { desc: 'Celebrating success' }
        },
        achievement: {
            faan: { title: 'Former Secretary', desc: 'Contributed to policy development and growth of Nepalese cinema' },
            director: { title: 'Director', desc: 'Led creative direction and television content production' },
            director_writer: { title: 'Director & writer', desc: 'Led creative direction and television content production' },
            women: { title: 'women development Member', desc: 'Supported strategic planning and national film promotion' }
        },
        quote: { text: "Every character I portray and every story I write is a piece of humanity I'm honored to share with the world", author: '— Panah Adhikari' },
        videos: {
            title: 'Video Portfolio',
            subtitle: 'Watch my performances in films, music videos, and teleserials',
            movies: 'Movies',
            music_teleserial: 'Music Videos & Teleserial',
            watch_yt: 'Watch on YouTube →'
        },
        projects: {
            title: 'Ongoing Projects',
            subtitle: 'Current work in production',
            badge: 'Teleserial',
            role: 'Writer & Director',
            desc: "Genre: It is a Nepali tele-serial. Availability: Episodes have been shared on YouTube and Facebook. The serial is part of a trend of, or similar to, sentimental or social drama series",
            status: 'Production ongoing'
        },
        contact: {
            title: "Let's Connect",
            subtitle: "I'm always excited to discuss new projects, creative collaborations, or speaking opportunities",
            email_label: 'Email',
            management_label: 'Management',
            follow: 'Follow My Journey'
        },
        footer: { badge: 'Actress • Writer • Director', copyright: '© 2026 Panah Adhikari. All rights reserved.' }
    },
    ne: {
        nav: { home: 'गृह', portfolio: 'पोर्टफोलियो', videos: 'भिडियो', projects: 'परियोजना', contact: 'सम्पर्क' },
        hero: {
            badge: 'अभिनेत्री • लेखिका • निर्देशक',
            tagline: 'अविस्मरणीय अभिनय र कथाहरू बुन्ने जुन संस्कृति र पुस्ताहरूमा गूँज्छ',
            cta1: 'सहकार्य गरौं',
            cta2: 'मेरो काम हेर्नुहोस्'
        },
        portfolio: {
            title: 'पोर्टफोलियो',
            subtitle: 'अभिनय, सिर्जनात्मक प्रक्रिया र माइलस्टोन क्षणहरूको दृश्य यात्रा',
            featured: { title: 'कथालाई अगाडि बढाउँदै', desc: '"द लास्ट हराइजन" मा पुरस्कार विजेता अभिनय' },
            item1: { title: 'चलचित्र फोटोग्राफी', desc: 'चलचित्रको सार कैद गर्दै' },
            item2: { title: 'सेटमा', desc: 'पर्दाको पछाडिको जादू' },
            item3: { title: 'पोर्ट्रेट सत्र', desc: 'सार कैद गर्दै' },
            item4: { title: 'चरित्रमा', desc: 'रूपान्तरण प्रगतिमा' },
            item5: { title: 'सिर्जनात्मक प्रक्रिया', desc: 'जहाँ विचारहरू जिउँदै आउँछन्' },
            item6: { desc: 'सफलता मनाउँदै' }
        },
        achievement: {
            faan: { title: 'पूर्व सचिव', desc: 'नेपाली सिनेमाको नीति विकास र वृद्धिमा योगदान' },
            director: { title: 'निर्देशक', desc: 'सिर्जनात्मक निर्देशन र टेलिभिजन सामग्री निर्माणमा अगुवाई' },
            women: { title: 'महिला विकास सदस्य', desc: 'रणनीतिक योजना र राष्ट्रिय चलचित्र प्रचारमा सहयोग' }
        },
        quote: {
            text: 'मैले निभाउने हरेक पात्र र लेख्ने हरेक कथा संसारसँग साझा गर्न पाउँदा सम्मानित मान्ने मानवताको अंश हो',
            author: '— पनाह अधिकारी'
        },
        videos: {
            title: 'भिडियो पोर्टफोलियो',
            subtitle: 'चलचित्र, संगीत भिडियो र टेलिसिरियलमा मेरो अभिनय हेर्नुहोस्',
            movies: 'चलचित्रहरू',
            music_teleserial: 'संगीत भिडियो र टेलिसिरियल',
            watch_yt: 'युट्युबमा हेर्नुहोस् →'
        },
        projects: {
            title: 'चलिरहेका परियोजनाहरू',
            subtitle: 'उत्पादनमा रहेको वर्तमान काम',
            badge: 'टेलिसिरियल',
            role: 'लेखिका र निर्देशक',
            desc: 'पृथ्वी बचाउन मानवताको अन्तिम मिशनको एक रोमाञ्चक टेलिसिरियल। क्याप्टेन माया भूमिकामा, गहिरो अन्तरिक्षमा अकल्पनीय चुनौतीहरूमा दललाई अगुवाई गर्ने दृढ अन्तरिक्ष यात्री। यो ग्राउन्डब्रेकिङ चलचित्रले बलिदान, आशा र अदम्य मानवीय भावनाको विषयहरू अन्वेषण गर्छ।',
            status: 'उत्पादन २०२६'
        },
        contact: {
            title: 'जोड्नुहोस्',
            subtitle: 'नयाँ परियोजना, सिर्जनात्मक सहकार्य वा बोल्ने अवसरहरू चर्चा गर्न सधैं उत्साहित छु',
            email_label: 'इमेल',
            management_label: 'प्रबन्धन',
            follow: 'मेरो यात्रा अनुसरण गर्नुहोस्'
        },
        footer: { badge: 'अभिनेत्री • लेखिका • निर्देशक', copyright: '© २०२६ पनाह अधिकारी। सर्वाधिकार सुरक्षित।' }
    }
};

function getNested(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    const root = document.getElementById('htmlRoot');
    if (root) root.setAttribute('lang', lang === 'ne' ? 'ne' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNested(t, key);
        if (value != null) {
            el.textContent = value;
        }
    });

    const heroEn = document.querySelector('.hero-name-en');
    const heroNe = document.querySelector('.hero-name-ne');
    if (heroEn) heroEn.style.display = lang === 'ne' ? 'none' : '';
    if (heroNe) heroNe.style.display = lang === 'ne' ? '' : 'none';

    document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
}

function initLanguage() {
    let lang = 'en';
    try { lang = localStorage.getItem(STORAGE_LANG) || 'en'; } catch (e) {}
    if (lang !== 'ne') lang = 'en';
    applyLanguage(lang);

    document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const l = btn.getAttribute('data-lang');
            if (l && translations[l]) applyLanguage(l);
        });
    });
}

document.addEventListener('DOMContentLoaded', initLanguage);

// Navigation scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.stat-item, .featured-image, .portfolio-item, .achievement-card, .video-card, .project-card'
);

animatedElements.forEach(el => observer.observe(el));
