import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-btwakxtct7";
import imgOurNumbersSection from "figma:asset/2de6f0096401685cbf6679b7498e485ca7a407bb.png";
import { useContent } from '../hooks/useContent';

// Counter component for animated counting
function AnimatedCounter({ target, prefix = "", isVisible }: { target: number; prefix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds for the animation

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isVisible]);

  return <>{prefix}{count}</>;
}

function ShieldTrust() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shield-trust 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_1355)" id="shield-trust 1">
          <path d={svgPaths.pbd64500} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1355">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="icon">
      <ShieldTrust />
    </div>
  );
}

function TicketsSuccessfullyResolved({ isVisible }: { isVisible: boolean }) {
  const { content } = useContent();
  const target = content.statistics?.resolvedTickets || 15234;
  
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[200px]" data-name="Tickets successfully resolved">
      <Icon />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">
        <AnimatedCounter target={target} prefix="+" isVisible={isVisible} />
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center w-[min-content]">Tickets successfully resolved</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Users">
          <path d={svgPaths.pae41680} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="Component 3">
      <Users />
    </div>
  );
}

function Component1Login({ isVisible }: { isVisible: boolean }) {
  const { content } = useContent();
  const target = content.statistics?.activeUsers || 8500;
  
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[200px]" data-name="1- Login">
      <Component />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">
        <AnimatedCounter target={target} prefix="+" isVisible={isVisible} />
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center w-[min-content]">Happy and supported users</p>
    </div>
  );
}

function VuesaxBoldMessageQuestion() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/message-question">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="message-question">
          <path d="M24 0H0V24H24V0Z" fill="var(--fill-0, white)" id="Vector" opacity="0" />
          <path d={svgPaths.p28ea8000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldMessageQuestion1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="vuesax/bold/message-question">
      <VuesaxBoldMessageQuestion />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="Component 3">
      <VuesaxBoldMessageQuestion1 />
    </div>
  );
}

function Component1Login1({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[200px]" data-name="1- Login">
      <Component1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">
        <AnimatedCounter target={2500} prefix="+" isVisible={isVisible} />
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center w-[min-content]">Messages handled through the system</p>
    </div>
  );
}

function Track() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="track">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_1343)" id="track">
          <path d={svgPaths.pb0b9bf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1343">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="Component 3">
      <Track />
    </div>
  );
}

function Component1Login2({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[4px] py-[16px] relative rounded-[8px] shrink-0 w-full sm:w-[200px]" data-name="1- Login">
      <Component2 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">
        <AnimatedCounter target={500} prefix="+" isVisible={isVisible} />
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center w-[min-content]">Successfully Tracked Tickets</p>
    </div>
  );
}

export default function OurNumbersSection() {
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
        threshold: 0.3,
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
    <div ref={sectionRef} className="relative w-full py-[40px] md:py-[60px]" data-name="our_numbers_section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full w-full object-cover" src={imgOurNumbersSection} />
        </div>
        <div className="absolute bg-[rgba(0,27,37,0.76)] inset-0" />
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="content-stretch flex flex-wrap sm:flex-nowrap gap-[20px] md:gap-[30px] lg:gap-[48px] items-center justify-center px-[20px] md:px-[40px] lg:px-[60px] xl:px-[72px] py-[40px] md:py-[60px] relative w-full max-w-[1600px] mx-auto">
          <TicketsSuccessfullyResolved isVisible={isVisible} />
          <div className="hidden sm:flex h-[106px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "106", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[106px]" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(176, 176, 176, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 1">
                    <line id="Divider" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" x1="0.5" x2="105.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Component1Login isVisible={isVisible} />
          <div className="hidden sm:flex h-[106px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "106", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[106px]" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(176, 176, 176, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 1">
                    <line id="Divider" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" x1="0.5" x2="105.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Component1Login1 isVisible={isVisible} />
          <div className="hidden sm:flex h-[106px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "106", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[106px]" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(176, 176, 176, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 1">
                    <line id="Divider" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" x1="0.5" x2="105.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Component1Login2 isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}