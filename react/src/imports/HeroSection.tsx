import svgPaths from "./svg-3ckyeqpg9v";
import imgHeroImage1 from "figma:asset/854fd69d0b03c80d9e26e8ef207b58548b2f4940.png";
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent, useImage } from '../hooks/useContent';

function Headline() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  const [displayedText, setDisplayedText] = useState('');
  const [showUnderline, setShowUnderline] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use content from CMS if available, otherwise use translations
  const titlePart1 = content.hero?.[`titlePart1${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.title.part1');
  const titlePart2 = content.hero?.[`titlePart2${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.title.part2');
  
  const fullText = titlePart1 + titlePart2;
  const highlightText = titlePart2;
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    // Reset animation when language changes
    setDisplayedText('');
    setShowUnderline(false);
    setCurrentIndex(0);
  }, [language]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (currentIndex === fullText.length && !showUnderline) {
      // Show underline after typing completes
      const underlineTimer = setTimeout(() => {
        setShowUnderline(true);
      }, 300);
      return () => clearTimeout(underlineTimer);
    }
  }, [currentIndex, fullText.length, showUnderline, fullText]);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="headline">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.125] min-w-full not-italic relative shrink-0 text-[#242524] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] w-[min-content]">
        {displayedText.split(highlightText)[0]}
        {displayedText.includes(highlightText) && (
          <span className="text-[#008dc3]">{highlightText}</span>
        )}
        {currentIndex < fullText.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
      <div className="h-[14px] sm:h-[18px] md:h-[22px] lg:h-[24px] xl:h-[26px] relative shrink-0 w-full max-w-[200px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[430px] xl:max-w-[479px]">
        <div 
          className={`absolute inset-[-15.38%_-0.84%_-15.39%_-0.84%] transition-all duration-500 ease-out origin-left ${
            showUnderline ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ "--stroke-0": "rgba(0, 141, 195, 1)" } as React.CSSProperties}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487 34">
            <path d={svgPaths.p2bee1d80} id="Vector 32" stroke="var(--stroke-0, #008DC3)" strokeLinecap="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  // Use content from CMS if available
  const buttonText = content.hero?.[`button1Text${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.createTicket');
  
  return (
    <button className="bg-[#008dc3] content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[20px] relative rounded-[40px] shrink-0 cursor-pointer transition-all duration-300 ease-out hover:bg-[#007ab0] hover:shadow-lg hover:scale-105 active:scale-100 active:shadow-md" data-name="CTA">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">{buttonText}</p>
    </button>
  );
}

function VuesaxOutlineSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/search-normal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search-normal">
          <path d={svgPaths.p13851c40} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2f497200} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ButonIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <VuesaxOutlineSearchNormal />
    </div>
  );
}

function Button1() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  // Use content from CMS if available
  const buttonText = content.hero?.[`button2Text${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.searchOld');
  
  return (
    <button className="content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[24px] shrink-0 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 hover:scale-105 active:scale-100" data-name="button">
      <ButonIcon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#242524] text-[16px] text-center text-nowrap tracking-[-0.18px] whitespace-pre" dir="auto">
        {buttonText}
      </p>
    </button>
  );
}

function HeroContent() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  const [showDescription, setShowDescription] = useState(false);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  
  // Use content from CMS if available
  const description = content.hero?.[`description${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.description');
  
  useEffect(() => {
    // Reset animations when language changes
    setShowDescription(false);
    setShowButton1(false);
    setShowButton2(false);
    
    // Calculate when headline finishes typing
    const fullText = t('hero.title.part1') + t('hero.title.part2');
    const descriptionDelay = fullText.length * 50 + 300 + 200;
    
    const descTimer = setTimeout(() => {
      setShowDescription(true);
    }, descriptionDelay);

    const btn1Timer = setTimeout(() => {
      setShowButton1(true);
    }, descriptionDelay + 500);

    const btn2Timer = setTimeout(() => {
      setShowButton2(true);
    }, descriptionDelay + 650);

    return () => {
      clearTimeout(descTimer);
      clearTimeout(btn1Timer);
      clearTimeout(btn2Timer);
    };
  }, [language, t]);

  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full lg:w-auto" data-name="hero content">
      <Headline />
      <p 
        className={`font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[#6d6d6d] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] w-full max-w-[555px] transition-all duration-500 ease-out ${
          showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {description}
      </p>
      <div className="content-stretch flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] lg:gap-[40px] items-start sm:items-center relative shrink-0 w-full sm:w-auto" data-name="CTA container">
        <div 
          className={`transition-all duration-500 ease-out ${
            showButton1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Cta />
        </div>
        <div 
          className={`transition-all duration-500 ease-out ${
            showButton2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  const { language } = useLanguage();
  const { imageUrl } = useImage('hero');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Reset image animation when language changes
    setShowImage(false);
    
    // Show image slightly after description appears
    const imageDelay = 300;
    
    const imgTimer = setTimeout(() => {
      setShowImage(true);
    }, imageDelay);

    return () => clearTimeout(imgTimer);
  }, [language]);

  return (
    <div className="min-h-[500px] lg:h-[646px] max-w-[1600px] relative shrink-0 w-full">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className={`content-center flex flex-col-reverse gap-[30px] md:gap-[40px] lg:gap-[60px] min-h-[500px] lg:h-[646px] items-center justify-between max-w-[inherit] pb-[24px] pt-0 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] relative w-full ${language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          <HeroContent />
          <div 
            className={`h-auto lg:h-[480px] xl:h-[578px] relative shrink-0 w-full sm:w-[400px] md:w-[500px] lg:w-[580px] xl:w-[696px] transition-all duration-700 ease-out ${
              showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            data-name="hero image 1"
          >
            <img alt="" className="w-full h-auto object-contain lg:absolute lg:inset-0 lg:object-cover lg:object-50%-50% lg:max-w-none lg:size-full pointer-events-none" src={imageUrl || imgHeroImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[24px] relative size-full" data-name="Hero section">
      <Frame />
    </div>
  );
}