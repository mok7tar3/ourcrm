// ========================================
// Global Variables
// ========================================

let typewriterTimeout;
let underlineTimeout;
let descriptionTimeout;
let button1Timeout;
let button2Timeout;
let imageTimeout;

// Get locale from Laravel (passed via window.App in Blade template)
let currentLanguage = window.App ? window.App.locale : 'en';

// ========================================
// Translations Object
// ========================================

const translations = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.searchTicket': 'Search Ticket',
        'nav.faq': 'FAQ',
        'nav.aboutUs': 'About Us',
        'nav.knowledge': 'Knowledge',
        'nav.language': 'العربية',
        'nav.login': 'Login',
        
        // Hero Section
        'hero.title.part1': "We're here to ",
        'hero.title.part2': 'Help you out',
        'hero.description': "The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members about transformation programs and initiatives. It facilitates communication, responds to inquiries, and addresses or escalates feedback to support the university's transformation efforts.",
        'hero.createTicket': 'Create A Ticket',
        'hero.searchOld': 'Search old Ticket',
        
        // About Section
        'about.title': 'About OUR KSU',
        'about.title.part1': 'About ',
        'about.title.part2': 'OUR KSU',
        'about.point1': 'The Beneficiary Support Service is the official communication channel supervised by King Saud University.',
        'about.point2': 'It provides a unified and reliable way for KSU members to submit inquiries, report issues, and share feedback related to transformation programs and digital services.',
        'about.point3': 'Our goal is to enhance communication, ensure timely support, and improve the overall service experience across the university.',
        'about.learnMore': 'Learn more..',
        
        // How It Works
        'howItWorks.title': 'How does it work?',
        'howItWorks.subtitle': 'A simple 5-step process to get your ticket resolved',
        'howItWorks.step1.title': 'Login',
        'howItWorks.step1.desc': 'Login via your KSU credentials to access the system',
        'howItWorks.step2.title': 'Type your Problem',
        'howItWorks.step2.desc': 'Describe your issue in detail to help us understand your needs',
        'howItWorks.step3.title': 'Choose Category',
        'howItWorks.step3.desc': 'Select the appropriate category for your ticket',
        'howItWorks.step4.title': 'Track Ticket',
        'howItWorks.step4.desc': 'Monitor the progress of your ticket in real-time',
        'howItWorks.step5.title': 'Problem Solved',
        'howItWorks.step5.desc': 'Get your issue resolved efficiently',
        
        // Statistics
        'stats.tickets': 'Tickets successfully resolved',
        'stats.users': 'Happy and supported users',
        'stats.messages': 'Messages handled through the system',
        'stats.tracked': 'Successfully Tracked Tickets',
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.q1': 'What is the Beneficiary Support Service?',
        'faq.a1': 'The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members about transformation programs and initiatives.',
        'faq.q2': 'How can I submit a ticket?',
        'faq.a2': 'You can submit a ticket by logging in with your KSU credentials and clicking on "Create A Ticket" button.',
        'faq.q3': 'How long does it take to resolve a ticket?',
        'faq.a3': 'Resolution time varies depending on the complexity of the issue. You can track your ticket progress in real-time.',
        'faq.q4': 'Can I track my ticket status?',
        'faq.a4': 'Yes, you can track your ticket status in real-time through our tracking system.',
        
        // Ready Section
        'ready.title': 'Are you ready?',
        'ready.description': "Let's help you get your problem solved",
        'ready.getStarted': 'Get Started',
        
        // Footer
        'footer.description': 'The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members.',
        'footer.quickLinks': 'Quick Links',
        'footer.home': 'Home',
        'footer.about': 'About Us',
        'footer.faq': 'FAQ',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.help': 'Help Center',
        'footer.documentation': 'Documentation',
        'footer.community': 'Community',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',
        'footer.rights': '© 2024 KSU. All rights reserved.',
    },
    ar: {
        // Navbar
        'nav.home': 'الرئيسية',
        'nav.searchTicket': 'البحث عن تذكرة',
        'nav.faq': 'الأسئلة الشائعة',
        'nav.aboutUs': 'من نحن',
        'nav.knowledge': 'المعرفة',
        'nav.language': 'English',
        'nav.login': 'تسجيل الدخول',
        
        // Hero Section
        'hero.title.part1': 'نحن هنا ',
        'hero.title.part2': 'لمساعدتك',
        'hero.description': 'خدمة دعم المستفيدين هي قناة مخصصة لاستقبال الاستفسارات والملاحظات من أعضاء جامعة الملك سعود حول برامج ومبادرات التحول. تسهل التواصل، وتستجيب للاستفسارات، وتعالج أو تصعد الملاحظات لدعم جهود التحول في الجامعة.',
        'hero.createTicket': 'إنشاء تذكرة',
        'hero.searchOld': 'البحث في التذاكر القديمة',
        
        // About Section
        'about.title': 'عن جامعة الملك سعود',
        'about.title.part1': 'عن ',
        'about.title.part2': 'جامعة الملك سعود',
        'about.point1': 'خدمة دعم المستفيدين هي القناة الرسمية للاتصال تحت إشراف جامعة الملك سعود.',
        'about.point2': 'توفير طريقة موحدة وموثوقة لأعضاء جامعة الملك سعود لتقديم الاستفسارات، وتقديم التقارير عن المشاكل، ومشاركة الملاحظات المتعلقة برامج التحول والخدمات الرقمية.',
        'about.point3': 'هدفنا هو تعزيز التواصل، ضمان الدعم في الوقت المناسب، وتحسين تجربة الخدمة بشكل عام عبر الجامعة.',
        'about.learnMore': 'تعلم المزيد..',
        
        // How It Works
        'howItWorks.title': 'كيف يعمل النظام؟',
        'howItWorks.subtitle': 'عملية بسيطة من 5 خطوات لحل مشكلتك',
        'howItWorks.step1.title': 'تسجيل الدخول',
        'howItWorks.step1.desc': 'سجل الدخول باستخدام بيانات اعتماد جامعة الملك سعود',
        'howItWorks.step2.title': 'اكتب مشكلتك',
        'howItWorks.step2.desc': 'صف مشكلتك بالتفصيل لمساعدتنا في فهم احتياجاتك',
        'howItWorks.step3.title': 'اختر الفئة',
        'howItWorks.step3.desc': 'حدد الفئة المناسبة لتذكرتك',
        'howItWorks.step4.title': 'تتبع التذكرة',
        'howItWorks.step4.desc': 'راقب تقدم تذكرتك في الوقت الفعلي',
        'howItWorks.step5.title': 'تم حل المشكلة',
        'howItWorks.step5.desc': 'احصل على حل فعال لمشكلتك',
        
        // Statistics
        'stats.tickets': 'تذكرة تم حلها بنجاح',
        'stats.users': 'مستخدم سعيد ومدعوم',
        'stats.messages': 'رسالة تمت معالجتها عبر النظام',
        'stats.tracked': 'تذكرة تم تتبعها بنجاح',
        
        // FAQ
        'faq.title': 'الأسئلة الشائعة',
        'faq.q1': 'ما هي خدمة دعم المستفيدين؟',
        'faq.a1': 'خدمة دعم المستفيدين هي قناة مخصصة لاستقبال الاستفسارات والملاحظات من أعضاء جامعة الملك سعود حول برامج ومبادرات التحول.',
        'faq.q2': 'كيف يمكنني تقديم تذكرة؟',
        'faq.a2': 'يمكنك تقديم تذكرة عن طريق تسجيل الدخول باستخدام بيانات اعتماد جامعة الملك سعود والضغط على زر "إنشاء تذكرة".',
        'faq.q3': 'كم من الوقت يستغرق حل التذكرة؟',
        'faq.a3': 'يختلف وقت الحل حسب تعقيد المشكلة. يمكنك تتبع تقدم تذكرتك في الوقت الفعلي.',
        'faq.q4': 'هل يمكنني تتبع حالة تذكرتي؟',
        'faq.a4': 'نعم، يمكنك تتبع حالة تذكرتك في الوقت الفعلي من خلال نظام التتبع الخاص بنا.',
        
        // Ready Section
        'ready.title': 'هل أنت مستعد؟',
        'ready.description': 'دعنا نساعدك في حل مشكلتك',
        'ready.getStarted': 'ابدأ الآن',
        
        // Footer
        'footer.description': 'خدمة دعم المستفيدين هي قناة مخصصة لاستقبال الاستفسارات والملاحظات من أعضاء جامعة الملك سعود.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.home': 'الرئيسية',
        'footer.about': 'من نحن',
        'footer.faq': 'الأسئلة الشائعة',
        'footer.contact': 'اتصل بنا',
        'footer.support': 'الدعم',
        'footer.help': 'مركز المساعدة',
        'footer.documentation': 'التوثيق',
        'footer.community': 'المجتمع',
        'footer.legal': 'قانوني',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'شروط الخدمة',
        'footer.cookies': 'سياسة ملفات تعريف الارتباط',
        'footer.rights': '© 2025 جامعة الملك سعود. جميع الحقوق محفوظة.',
    }
};

// ========================================
// Language Management
// ========================================

function translate(key) {
    return translations[currentLanguage]?.[key] || translations.en?.[key] || key;
}

function updateAllTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        // Handle different element types
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else if (element.hasAttribute('value')) {
                element.setAttribute('value', translation);
            }
        } else if (element.tagName === 'IMG') {
            if (element.hasAttribute('alt')) {
                element.setAttribute('alt', translation);
            }
        } else if (element.hasAttribute('title')) {
            element.setAttribute('title', translation);
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button text
    updateLanguageToggleText();
}

function updateLanguageToggleText() {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        const text = currentLanguage === 'en' ? 'العربية' : 'English';
        languageToggle.textContent = text;
        
        // Update aria-label for accessibility
        languageToggle.setAttribute('aria-label', 
            currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'
        );
    }
}

async function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    try {
        // Send request to update language in Laravel session
        const response = await fetch('/change-language', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': window.App?.csrfToken || 
                               document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({ locale: newLanguage })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                // Reload the page to get server-side rendered content
                window.location.reload();
                return;
            }
        }
        
        // Fallback to client-side only if server request fails
        console.warn('Server language change failed, using client-side fallback');
        currentLanguage = newLanguage;
        updateLanguageClientSide();
        
    } catch (error) {
        console.error('Error changing language:', error);
        // Fallback to client-side only
        currentLanguage = newLanguage;
        updateLanguageClientSide();
    }
}

function updateLanguageClientSide() {
    // Update HTML attributes
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translations
    updateAllTranslations();
    
    // Restart hero animations
    initHeroTypewriter();
    
    // Update body class for RTL-specific styles
    document.body.classList.toggle('rtl', currentLanguage === 'ar');
    document.body.classList.toggle('ltr', currentLanguage !== 'ar');
    
    // Save preference in localStorage for consistency
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function initializeLanguage() {
    // Priority: 1. URL parameter, 2. localStorage, 3. Laravel default, 4. 'en'
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'ar')) {
        currentLanguage = urlLang;
    } else {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
            currentLanguage = savedLanguage;
        } else {
            // Use Laravel's locale from window.App
            currentLanguage = window.App?.locale || 'en';
        }
    }
    
    // Set HTML attributes
    const direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', direction);
    
    // Update body classes
    document.body.classList.add(direction);
    document.body.classList.remove(direction === 'rtl' ? 'ltr' : 'rtl');
    
    // Update all translations
    updateAllTranslations();
    
    // Initialize language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        updateLanguageToggleText();
    }
}

// ========================================
// Hero Section Typewriter Effect
// ========================================

function initHeroTypewriter() {
    // Clear all existing timeouts
    clearTimeout(typewriterTimeout);
    clearTimeout(underlineTimeout);
    clearTimeout(descriptionTimeout);
    clearTimeout(button1Timeout);
    clearTimeout(button2Timeout);
    clearTimeout(imageTimeout);
    
    const heroText = document.getElementById('heroText');
    const heroCursor = document.getElementById('heroCursor');
    const heroUnderline = document.getElementById('heroUnderline');
    const heroDescription = document.getElementById('heroDescription');
    const heroButton1 = document.getElementById('heroButton1');
    const heroButton2 = document.getElementById('heroButton2');
    const heroImage = document.getElementById('heroImage');
    
    // Reset states
    if (heroText) heroText.innerHTML = '';
    if (heroCursor) heroCursor.style.display = 'inline';
    if (heroUnderline) heroUnderline.classList.remove('show');
    if (heroDescription) heroDescription.classList.remove('show');
    if (heroButton1) heroButton1.classList.remove('show');
    if (heroButton2) heroButton2.classList.remove('show');
    if (heroImage) heroImage.classList.remove('show');
    
    const part1 = translate('hero.title.part1');
    const part2 = translate('hero.title.part2');
    const fullText = part1 + part2;
    
    let currentIndex = 0;
    const typingSpeed = 50;
    
    function typeNextChar() {
        if (currentIndex < fullText.length) {
            const currentText = fullText.substring(0, currentIndex + 1);
            
            // Split text to highlight part2
            if (currentText.includes(part2) && currentText.length >= part1.length) {
                if (heroText) {
                    heroText.innerHTML = part1 + `<span class="text-primary">${currentText.substring(part1.length)}</span>`;
                }
            } else {
                if (heroText) heroText.textContent = currentText;
            }
            
            currentIndex++;
            typewriterTimeout = setTimeout(typeNextChar, typingSpeed);
        } else {
            // Typing complete, hide cursor
            if (heroCursor) heroCursor.style.display = 'none';
            
            // Show underline
            underlineTimeout = setTimeout(() => {
                if (heroUnderline) heroUnderline.classList.add('show');
            }, 300);
            
            // Show description
            descriptionTimeout = setTimeout(() => {
                if (heroDescription) heroDescription.classList.add('show');
            }, fullText.length * typingSpeed + 500);
            
            // Show buttons
            button1Timeout = setTimeout(() => {
                if (heroButton1) heroButton1.classList.add('show');
            }, fullText.length * typingSpeed + 1000);
            
            button2Timeout = setTimeout(() => {
                if (heroButton2) heroButton2.classList.add('show');
            }, fullText.length * typingSpeed + 1150);
        }
    }
    
    // Start typing
    typeNextChar();
    
    // Show image slightly after start
    imageTimeout = setTimeout(() => {
        if (heroImage) heroImage.classList.add('show');
    }, 300);
}

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ========================================
// Counter Animation for Statistics
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            if (element) element.textContent = target.toLocaleString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US');
            clearInterval(timer);
        } else {
            if (element) element.textContent = Math.floor(current).toLocaleString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US');
        }
    }, 16);
}

// Observe stat numbers for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-counter'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            }
        });
    });
}

// ========================================
// Navbar Background on Scroll
// ========================================

function initNavbarScroll() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('mainNavbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('shadow', 'navbar-scrolled');
        } else {
            navbar.classList.remove('shadow', 'navbar-scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// ========================================
// Lazy Loading Images
// ========================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ========================================
// FAQ Accordion Functionality
// ========================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (question && answer && icon) {
            // Set initial state based on language direction
            if (currentLanguage === 'ar') {
                question.style.textAlign = 'right';
                answer.style.textAlign = 'right';
            }
            
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if (otherAnswer) otherAnswer.style.display = 'none';
                        if (otherIcon) otherIcon.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    answer.style.display = 'none';
                    icon.classList.remove('active');
                } else {
                    answer.style.display = 'block';
                    icon.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Mobile Menu Enhancement
// ========================================

function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                    navbarToggler.classList.remove('active');
                }
            });
        });
    }
}

// ========================================
// RTL/LTR Layout Adjustments
// ========================================

function adjustLayoutForRTL() {
    if (currentLanguage === 'ar') {
        // Add RTL-specific adjustments
        document.querySelectorAll('.text-start').forEach(el => {
            el.classList.remove('text-start');
            el.classList.add('text-end');
        });
        
        // Adjust carousel controls for RTL
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            const nextBtn = carousel.querySelector('.carousel-control-next');
            if (prevBtn && nextBtn) {
                prevBtn.innerHTML = nextBtn.innerHTML;
                nextBtn.innerHTML = prevBtn.innerHTML;
            }
        });
    }
}

// ========================================
// Initialize Everything on DOM Content Loaded
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language first (important for other initializations)
    initializeLanguage();
    
    // Initialize all other components
    initHeroTypewriter();
    initSmoothScroll();
    initNavbarScroll();
    initLazyLoading();
    initFAQAccordion();
    initMobileMenu();
    adjustLayoutForRTL();
    
    // Observe all fade-in elements
    document.querySelectorAll('[data-animation="fade-in"]').forEach(element => {
        observer.observe(element);
    });
    
    // Observe all counter elements
    document.querySelectorAll('[data-counter]').forEach(element => {
        statsObserver.observe(element);
    });
    
    // Initialize tooltips and popovers if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Console Welcome Message
    console.log('%c KSU Ticketing System ', 'background: #008dc3; color: white; font-size: 20px; padding: 10px;');
    console.log(`%c Current Language: ${currentLanguage.toUpperCase()} `, 'font-size: 12px; color: #6d6d6d;');
    console.log('%c Built with ❤️ using Laravel & Bootstrap 5 ', 'font-size: 12px; color: #6d6d6d;');
});

// ========================================
// Window Load Events
// ========================================

window.addEventListener('load', () => {
    // Performance Monitoring
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
    
    // Accessibility enhancements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or menus
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
                
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarToggler) navbarToggler.classList.remove('active');
            }
            
            // Close any open FAQ items
            const openFaqItems = document.querySelectorAll('.faq-item .faq-answer[style*="block"]');
            openFaqItems.forEach(item => {
                item.style.display = 'none';
                const icon = item.closest('.faq-item').querySelector('.faq-icon');
                if (icon) icon.classList.remove('active');
            });
        }
    });
});

// ========================================
// Resize Handler for Responsive Adjustments
// ========================================

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Handle any responsive adjustments here
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (window.innerWidth >= 992 && navbarCollapse) {
            navbarCollapse.classList.remove('show');
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler) navbarToggler.classList.remove('active');
        }
        
        // Re-adjust layout for RTL on resize
        if (currentLanguage === 'ar') {
            adjustLayoutForRTL();
        }
    }, 250);
});

// ========================================
// Error Handling
// ========================================

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You could send this to an error tracking service
    // Example: trackError(e.error);
}, false);

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// ========================================
// Public API for other scripts
// ========================================

// Make language functions available globally if needed
window.LanguageManager = {
    getCurrentLanguage: () => currentLanguage,
    translate: translate,
    toggleLanguage: toggleLanguage,
    updateTranslations: updateAllTranslations
};

// Export for module usage (uncomment if using ES6 modules)
/*
export {
    initializeLanguage,
    toggleLanguage,
    currentLanguage,
    translate,
    initHeroTypewriter
};
*/