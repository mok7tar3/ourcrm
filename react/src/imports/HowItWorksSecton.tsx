import svgPaths from "./svg-x8fh7owamr";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useContent } from "../hooks/useContent";

function TitleContainer({ isVisible }: { isVisible: boolean }) {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const title = content.howitworks?.[`title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.title');
  const subtitle = content.howitworks?.[`subtitle${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.subtitle');
  
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-center w-full" data-name="title container">
      <div
        className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#242524] w-full transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
      >
        <p className="leading-[50px] md:leading-[70px] lg:leading-[90px] text-[28px] md:text-[34px] lg:text-[40px]">{title}</p>
      </div>
      <p
        className={`font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] lg:leading-[30px] relative shrink-0 text-[#6d6d6d] text-[15px] md:text-[17px] lg:text-[18px] w-full transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        dir="auto"
      >
        {subtitle}
      </p>
    </div>
  );
}

function LoginLock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="login-lock 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_1204)" id="login-lock 2">
          <path d={svgPaths.pb26a400} fill="var(--fill-0, #242524)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1204">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="icon_container">
      <LoginLock />
    </div>
  );
}

function CardContent() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const step1Title = content.howitworks?.[`step1Title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step1.title');
  const step1Desc = content.howitworks?.[`step1Desc${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step1.desc');
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full" data-name="card_content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#242524] text-[24px] w-full">{step1Title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6d6d6d] text-[18px] w-full">{step1Desc}</p>
    </div>
  );
}

function HowItWorksCards01Login({ isVisible, delay }: { isVisible: boolean; delay: string }) {
  return (
    <div
      className={`bg-[#f2f8ff] content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[250px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      data-name="how it works cards_01_login"
    >
      <IconContainer />
      <CardContent />
    </div>
  );
}

function VuesaxBrokenReceipt() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/broken/receipt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="receipt-2">
          <path d={svgPaths.p1d83d5c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.73 11H16.23" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.73 7H16.23" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.0946 11H8.10359" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.0946 7H8.10359" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_6" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxBrokenReceipt1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="vuesax/broken/receipt-2">
      <VuesaxBrokenReceipt />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="icon_container">
      <VuesaxBrokenReceipt1 />
    </div>
  );
}

function CardContent1() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const step2Title = content.howitworks?.[`step2Title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step2.title');
  const step2Desc = content.howitworks?.[`step2Desc${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step2.desc');
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full" data-name="card_content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#242524] text-[24px] w-full">{step2Title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6d6d6d] text-[18px] w-full">{step2Desc}</p>
    </div>
  );
}

function HowItWorksCards02CreateATicket({ isVisible, delay }: { isVisible: boolean; delay: string }) {
  return (
    <div
      className={`bg-[#f2f8ff] content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[250px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      data-name="how it works cards_02_create_a_ticket"
    >
      <IconContainer1 />
      <CardContent1 />
    </div>
  );
}

function Track() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="track">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_1201)" id="track">
          <path d={svgPaths.pb0b9bf0} fill="var(--fill-0, #242524)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1201">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="icon_container">
      <Track />
    </div>
  );
}

function CardContent2() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const step3Title = content.howitworks?.[`step3Title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step3.title');
  const step3Desc = content.howitworks?.[`step3Desc${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step3.desc');
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full" data-name="card_content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#242524] text-[24px] w-full">{step3Title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6d6d6d] text-[18px] w-full">{step3Desc}</p>
    </div>
  );
}

function HowItWorksCard03TrackYourTickets({ isVisible, delay }: { isVisible: boolean; delay: string }) {
  return (
    <div
      className={`bg-[#f2f8ff] content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[250px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      data-name="how it works card_03_Track Your Tickets"
    >
      <IconContainer2 />
      <CardContent2 />
    </div>
  );
}

function ShieldTrust() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shield-trust 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_1190)" id="shield-trust 1">
          <path d={svgPaths.pbd64500} fill="var(--fill-0, #242524)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1190">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="icon_container">
      <ShieldTrust />
    </div>
  );
}

function CardContent3() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const step4Title = content.howitworks?.[`step4Title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step4.title');
  const step4Desc = content.howitworks?.[`step4Desc${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('howItWorks.step4.desc');
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full" data-name="card_content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#242524] text-[24px] w-full">{step4Title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6d6d6d] text-[18px] w-full">{step4Desc}</p>
    </div>
  );
}

function HowItWorksCard04Resolution({ isVisible, delay }: { isVisible: boolean; delay: string }) {
  return (
    <div
      className={`bg-[#f2f8ff] content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[250px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      data-name="how it works card_04_Resolution"
    >
      <IconContainer3 />
      <CardContent3 />
    </div>
  );
}

function HowItWorksCards({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-wrap sm:flex-nowrap gap-[20px] md:gap-[30px] lg:gap-[48px] items-center justify-center max-w-[1600px] relative w-full" data-name="how it works cards">
      <HowItWorksCards01Login isVisible={isVisible} delay="300ms" />
      <HowItWorksCards02CreateATicket isVisible={isVisible} delay="400ms" />
      <HowItWorksCard03TrackYourTickets isVisible={isVisible} delay="500ms" />
      <HowItWorksCard04Resolution isVisible={isVisible} delay="600ms" />
    </div>
  );
}

export default function HowItWorksSecton() {
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
    <div ref={sectionRef} className="relative w-full py-[40px] md:py-[60px] lg:py-[80px]" data-name="How It Works? secton">
      <div className="flex flex-col items-center max-w-[1600px] mx-auto w-full">
        <div className="content-stretch flex flex-col gap-[30px] md:gap-[40px] lg:gap-[48px] items-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] relative w-full">
          <TitleContainer isVisible={isVisible} />
          <HowItWorksCards isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}