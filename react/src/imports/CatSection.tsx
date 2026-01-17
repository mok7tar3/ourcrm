import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-gvhgtrqluu";

function VuesaxOutlineSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/search-normal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search-normal">
          <path d={svgPaths.p13851c40} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p2f497200} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ButonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <VuesaxOutlineSearchNormal />
    </div>
  );
}

function CreateATicketButton() {
  return (
    <button className="bg-[#008dc3] content-stretch flex gap-[10px] items-center justify-center px-[24px] md:px-[30px] py-[16px] md:py-[20px] relative rounded-[40px] shrink-0 hover:bg-[#007ab0] transition-colors w-full sm:w-auto" data-name="create_a_ticket_button">
      <ButonIcon />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] text-white">Create A Ticket</p>
    </button>
  );
}

function VuesaxOutlineSearchNormal1() {
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
      <VuesaxOutlineSearchNormal1 />
    </div>
  );
}

function SearchOldTicketButton() {
  return (
    <button className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[24px] shrink-0 hover:bg-[#f0f0f0] transition-colors w-full sm:w-auto" data-name="search_old_ticket_button">
      <ButonIcon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] text-center tracking-[-0.18px]" dir="auto">
        Search old Ticket
      </p>
    </button>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] items-center relative shrink-0 w-full sm:w-auto" data-name="CTA_buttons">
      <CreateATicketButton />
      <SearchOldTicketButton />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f2f8ff] max-w-[1600px] relative rounded-[20px] md:rounded-[30px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] items-center justify-center max-w-[inherit] p-[30px] md:p-[50px] lg:p-[80px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242524] text-center w-full">
            <p className="leading-[50px] md:leading-[70px] lg:leading-[90px] text-[28px] md:text-[34px] lg:text-[40px]" dir="auto">
              Are you ready?
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] lg:leading-[30px] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] md:text-[17px] lg:text-[18px] text-center w-full max-w-[700px]" dir="auto">
            Start your request now and get support directly from the official KSU team.
          </p>
          <CtaButtons />
        </div>
      </div>
    </div>
  );
}

export default function CatSection() {
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
    <div className="relative w-full" data-name="CAT_section">
      <div className="flex flex-col items-center justify-center w-full">
        <div ref={sectionRef} className="content-stretch flex flex-col items-center justify-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] py-[30px] md:py-[40px] lg:py-[48px] relative w-full">
          <div 
            className="w-full transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transitionDelay: '0ms'
            }}
          >
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}