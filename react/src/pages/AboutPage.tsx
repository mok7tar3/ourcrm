import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { useContentValue } from '../hooks/useContent';
import HeroSection from '../imports/HeroSection-86-264';
import OurPurposeSection from '../imports/OurPurposeSection';
import OurMissionSection from '../imports/OurMissionSection';
import OurVisionSection from '../imports/OurVisionSection';
import CatSection from '../imports/CatSection-86-3168';

export default function AboutPage() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isPurposeVisible, setIsPurposeVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for Purpose section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPurposeVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (purposeRef.current) {
      observer.observe(purposeRef.current);
    }

    return () => {
      if (purposeRef.current) {
        observer.unobserve(purposeRef.current);
      }
    };
  }, []);

  // Intersection Observer for Mission section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMissionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  // Intersection Observer for Vision section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => {
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
    };
  }, []);

  // Intersection Observer for CTA section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-center w-full">
        <div 
          ref={sectionRef}
          className={`w-full transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <HeroSection />
        </div>

        <div 
          ref={purposeRef}
          className={`w-full transition-all duration-700 delay-200 ${
            isPurposeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <OurPurposeSection />
        </div>

        <div 
          ref={missionRef}
          className={`w-full transition-all duration-700 delay-300 ${
            isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <OurMissionSection />
        </div>

        <div 
          ref={visionRef}
          className={`w-full transition-all duration-700 delay-400 ${
            isVisionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <OurVisionSection />
        </div>

        <div 
          ref={ctaRef}
          className={`w-full transition-all duration-700 delay-500 ${
            isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CatSection />
        </div>
      </div>
    </div>
  );
}