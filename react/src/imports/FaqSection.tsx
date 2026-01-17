import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-7aqf7m1b0v";
import { useLanguage } from "../contexts/LanguageContext";
import { useContent } from "../hooks/useContent";

function TitleContainer() {
  const { t, language } = useLanguage();
  const { content } = useContent();
  
  const title = content.faq?.[`title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('faq.title');
  const subtitle = content.faq?.[`subtitle${language === 'ar' ? 'Ar' : 'En'}`] 
    || 'Frequently Asked Questions.';
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 text-center w-full" data-name="title_container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#242524] w-full">
        <p className="leading-[50px] md:leading-[70px] lg:leading-[90px] text-[28px] md:text-[34px] lg:text-[40px]">{title}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] lg:leading-[30px] relative shrink-0 text-[#6d6d6d] text-[15px] md:text-[17px] lg:text-[18px] w-full" dir="auto">
        {subtitle}
      </p>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="FAQ">
      <button
        onClick={onToggle}
        className="bg-[#f2f8ff] relative rounded-[8px] shrink-0 w-full text-left transition-all hover:bg-[#e8f4ff]"
        data-name="faq"
      >
        <div className="flex flex-row items-center w-full">
          <div className="content-stretch flex items-center justify-between px-[16px] md:px-[24px] py-[16px] relative w-full">
            <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative flex-1 text-[16px] md:text-[18px] lg:text-[20px] pr-[16px] ${isOpen ? 'text-[#008dc3]' : 'text-[#242524]'}`}>
              {question}
            </p>
            <div className="flex items-center justify-center relative shrink-0 size-[24px] transition-transform" style={{ transform: isOpen ? 'rotate(270deg)' : 'rotate(0deg)' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p28c47800} fill={isOpen ? "#008DC3" : "black"} fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="relative shrink-0 w-full animate-fadeIn">
          <div className="flex flex-row items-center justify-center w-full">
            <div className="content-stretch flex items-center justify-center px-[16px] md:px-[24px] py-[16px] relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[15px] lg:text-[16px] w-full">
                {answer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FaqContainer() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How long does it take to process a ticket?",
      answer: "Most tickets are processed within 3–5 business days, depending on the type of request."
    },
    {
      question: "Can I edit my ticket after submitting it?",
      answer: "Yes, you can edit your ticket within 24 hours of submission through your dashboard."
    },
    {
      question: "Can I submit tickets outside working hours?",
      answer: "Yes, you can submit tickets at any time. They will be processed during working hours."
    },
    {
      question: "How can I track my old ticket?",
      answer: "You can track your tickets by clicking the 'Search old Ticket' button on the homepage."
    },
    {
      question: "Are my details kept secure?",
      answer: "Yes, all your information is encrypted and stored securely following industry best practices."
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center max-w-[1600px] relative shrink-0 w-full" data-name="Faq_container">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function ButonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="buton_icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFaqCenter() {
  return (
    <button className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-full sm:w-[228px] hover:bg-[#f9f9f9] transition-colors" data-name="button_FAQ_Center">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#242524] text-[16px] text-center tracking-[-0.18px]" dir="auto">
        FAQ Center
      </p>
      <ButonIcon />
    </button>
  );
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-white relative w-full py-[40px] md:py-[60px] lg:py-[80px]" data-name="FAQ_section">
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] relative w-full max-w-[1600px] mx-auto">
          <div 
            className="w-full transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0ms'
            }}
          >
            <TitleContainer />
          </div>
          <div 
            className="w-full transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms'
            }}
          >
            <FaqContainer />
          </div>
          <div 
            className="w-full sm:w-auto transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms'
            }}
          >
            <ButtonFaqCenter />
          </div>
        </div>
      </div>
    </div>
  );
}