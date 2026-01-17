import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { useContentValue } from '../hooks/useContent';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

export default function KnowledgePage() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Load content from CMS with unique key 'knowledge_page'
  const titleAr = useContentValue('knowledge_page', 'titleAr', 'قاعدة المعرفة');
  const titleEn = useContentValue('knowledge_page', 'titleEn', 'Knowledge Base');
  const subtitleAr = useContentValue('knowledge_page', 'subtitleAr', 'موارد ومقالات لمساعدتك في حل المشاكل الشائعة');
  const subtitleEn = useContentValue('knowledge_page', 'subtitleEn', 'Resources and articles to help you solve common issues');

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    {
      icon: <BookOpen className="size-[40px] text-[#008dc3]" />,
      titleAr: 'الأدلة الإرشادية',
      titleEn: 'User Guides',
      descriptionAr: 'أدلة شاملة لاستخدام النظام',
      descriptionEn: 'Comprehensive guides for using the system'
    },
    {
      icon: <FileText className="size-[40px] text-[#008dc3]" />,
      titleAr: 'المقالات التعليمية',
      titleEn: 'Tutorial Articles',
      descriptionAr: 'مقالات تفصيلية لحل المشاكل',
      descriptionEn: 'Detailed articles for problem solving'
    },
    {
      icon: <Video className="size-[40px] text-[#008dc3]" />,
      titleAr: 'الفيديوهات التعليمية',
      titleEn: 'Tutorial Videos',
      descriptionAr: 'شروحات مرئية خطوة بخطوة',
      descriptionEn: 'Step-by-step visual explanations'
    },
    {
      icon: <Download className="size-[40px] text-[#008dc3]" />,
      titleAr: 'التنزيلات',
      titleEn: 'Downloads',
      descriptionAr: 'ملفات وأدوات مساعدة',
      descriptionEn: 'Helpful files and tools'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`bg-white relative w-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      data-name="knowledge_section"
    >
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] md:px-[40px] lg:px-[72px] py-[60px] md:py-[72px] relative w-full">
          {/* Title Container */}
          <div 
            className={`content-stretch flex flex-col gap-[8px] items-start justify-center text-center w-full transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-name="title_container"
          >
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-[32px] md:text-[40px] text-[#242524]">
                {language === 'ar' ? titleAr : titleEn}
              </h2>
            </div>
            <p className="text-[16px] md:text-[18px] text-[#6d6d6d] w-full">
              {language === 'ar' ? subtitleAr : subtitleEn}
            </p>
          </div>

          {/* Search Bar */}
          <div 
            className={`content-stretch flex flex-col gap-[16px] items-center max-w-[600px] w-full transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-full">
              <input
                type="text"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  language === 'ar' ? 'text-right' : 'text-left'
                }`}
                placeholder={language === 'ar' ? 'ابحث في قاعدة المعرفة...' : 'Search knowledge base...'}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div 
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-[#f2f8ff] rounded-xl hover:bg-[#e6f3ff] transition-colors cursor-pointer"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="mb-2">{category.icon}</div>
                  <h3 className="text-[18px] text-[#242524]">
                    {language === 'ar' ? category.titleAr : category.titleEn}
                  </h3>
                  <p className="text-[14px] text-[#6d6d6d]">
                    {language === 'ar' ? category.descriptionAr : category.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Articles */}
          <div 
            className={`w-full max-w-[1200px] transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className={`text-[24px] text-[#242524] mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'المقالات الأكثر شيوعاً' : 'Popular Articles'}
            </h3>
            
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[#f2f8ff] rounded-lg hover:bg-[#e6f3ff] transition-colors cursor-pointer"
                >
                  <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <FileText className="size-[20px] text-[#008dc3]" />
                    <p className={`flex-1 text-[16px] text-[#242524] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {language === 'ar' 
                        ? `كيفية ${item === 1 ? 'إنشاء تذكرة جديدة' : item === 2 ? 'تتبع حالة التذكرة' : 'تحديث بياناتك الشخصية'}`
                        : `How to ${item === 1 ? 'create a new ticket' : item === 2 ? 'track ticket status' : 'update your personal information'}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
