import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { useContentValue } from '../hooks/useContent';
import Container from '../imports/Container';

export default function SearchPage() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Load content from CMS with unique key 'search_page'
  const titleAr = useContentValue('search_page', 'titleAr', 'البحث عن تذكرة');
  const titleEn = useContentValue('search_page', 'titleEn', 'Search Ticket');
  const subtitleAr = useContentValue('search_page', 'subtitleAr', 'ابحث عن تذكرتك باستخدام رقم التذكرة أو البريد الإلكتروني');
  const subtitleEn = useContentValue('search_page', 'subtitleEn', 'Search for your ticket using ticket number or email');

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

  return (
    <div 
      ref={sectionRef}
      className={`bg-white relative w-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      data-name="search_section"
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

          {/* Search Form */}
          <div 
            className={`content-stretch flex flex-col gap-[16px] items-center max-w-[600px] w-full transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}