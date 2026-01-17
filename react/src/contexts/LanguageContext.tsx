import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.searchTicket': 'Search Ticket',
    'nav.faq': 'FAQ',
    'nav.aboutUs': 'About Us',
    'nav.knowledge': 'Knowledge',
    'nav.language': 'اللغة العربية',
    'nav.login': 'Login',
    
    // Hero Section
    'hero.title.part1': "We're here to ",
    'hero.title.part2': 'Help you out',
    'hero.description': "The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members about transformation programs and initiatives. It facilitates communication, responds to inquiries, and addresses or escalates feedback to support the university's transformation efforts.",
    'hero.createTicket': 'Create A Ticket',
    'hero.searchOld': 'Search old Ticket',
    
    // About Section
    'about.title': 'About OUR KSU',
    'about.description': "The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members about transformation programs and initiatives. It facilitates communication, responds to inquiries, and addresses or escalates feedback to support the university's transformation efforts.",
    'about.readMore': 'Read more',
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
    'about.description': 'خدمة دعم المستفيدين هي قناة مخصصة لاستقبال الاستفسارات والملاحظات من أعضاء جامعة الملك سعود حول برامج ومبادرات التحول. تسهل التواصل، وتستجيب للاستفسارات، وتعالج أو تصعد الملاحظات لدعم جهود التحول في الجامعة.',
    'about.readMore': 'اقرأ المزيد',
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
    'footer.rights': '© 2024 جامعة الملك سعود. جميع الحقوق محفوظة.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}