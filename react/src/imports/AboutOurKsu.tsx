import svgPaths from "./svg-639dra6fr3";
import imgAboutHeroImage1 from "figma:asset/98ba85f888287ff174bf52e04d60cd8363aeaff3.png";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useContent, useImage } from "../hooks/useContent";

function ButonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="buton_icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const buttonText = content.about?.[`buttonText${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.learnMore');
  
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" data-name="button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#242524] text-[14px] md:text-[16px] text-center text-nowrap tracking-[-0.18px] whitespace-pre" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {buttonText}
      </p>
      <ButonIcon />
    </div>
  );
}

function AboutContent() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Use content from CMS if available
  const titlePart1 = content.about?.[`titlePart1${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.title.part1');
  const titlePart2 = content.about?.[`titlePart2${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.title.part2');
  const point1 = content.about?.[`point1${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.point1');
  const point2 = content.about?.[`point2${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.point2');
  const point3 = content.about?.[`point3${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('about.point3');

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div ref={contentRef} className="content-stretch flex flex-col gap-[16px] md:gap-[20px] h-full items-start relative w-full" data-name="about content" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        className={`flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#242524] text-[0px] w-full transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
      >
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[50px] md:leading-[70px] lg:leading-[90px] text-[28px] md:text-[34px] lg:text-[40px]">
          <span>{titlePart1}</span>
          <span className="text-[#008dc3]">{titlePart2}</span>
        </p>
      </div>
      <ul 
        className={`block font-['Inter:Regular',sans-serif] font-normal leading-[0] w-full not-italic relative shrink-0 text-[#6d6d6d] text-[15px] md:text-[17px] lg:text-[18px] transition-all duration-700 ps-0 ms-0 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <li className={`mb-0 ${language === 'ar' ? 'me-[20px] md:me-[27px]' : 'ms-[20px] md:ms-[27px]'}`}>
          <span className="leading-[24px] md:leading-[28px] lg:leading-[30px]">{point1}</span>
        </li>
        <li className={`mb-0 ${language === 'ar' ? 'me-[20px] md:me-[27px]' : 'ms-[20px] md:ms-[27px]'}`}>
          <span className="leading-[24px] md:leading-[28px] lg:leading-[30px]">{point2}</span>
        </li>
        <li className={language === 'ar' ? 'me-[20px] md:me-[27px]' : 'ms-[20px] md:ms-[27px]'}>
          <span className="leading-[24px] md:leading-[28px] lg:leading-[30px]">{point3}</span>
        </li>
      </ul>
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
      >
        <Button />
      </div>
    </div>
  );
}

export default function AboutOurKsu() {
  const { language } = useLanguage();
  const { imageUrl } = useImage('about');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="relative w-full py-[40px] md:py-[60px] lg:py-[80px]" data-name="About OUR KSU">
      <div className="flex flex-row items-center justify-center max-w-[1600px] mx-auto w-full">
        <div className={`content-stretch flex flex-col ${language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-[30px] md:gap-[40px] lg:gap-[60px] items-center justify-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] relative w-full`}>
          <div 
            className={`h-auto lg:h-[400px] xl:h-[478px] relative shrink-0 w-full sm:w-[400px] md:w-[480px] lg:w-[480px] xl:w-[536px] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${language === 'ar' ? 'translate-x-8' : '-translate-x-8'}`
            }`}
            data-name="about hero image 1"
          >
            <img alt="About KSU building" className="w-full h-auto lg:absolute lg:inset-0 lg:h-full object-cover rounded-lg pointer-events-none" src={imageUrl || imgAboutHeroImage1} />
          </div>
          <div className="flex flex-row items-center w-full lg:flex-1">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
}