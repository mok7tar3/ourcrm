import svgPaths from "../imports/svg-3ckyeqpg9v";
import imgLogo from "figma:asset/99dd989727a003d1451e90bb5ff2c09e4c24de63.png";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ to, label, isActive }: { to: string; label: string; isActive: boolean }) {
  return (
    <Link to={to} className="content-stretch flex flex-col gap-[3px] items-end relative shrink-0 cursor-pointer group" data-name="nav_item">
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre ${
        isActive ? 'text-[#242524]' : 'text-[#b0b0b0] group-hover:text-[#242524]'
      } transition-colors duration-200`}>
        {label}
      </p>
      <div className={`h-[2px] relative shrink-0 w-full ${isActive ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-200`}>
        <div className="absolute inset-[-50%_-1.96%_-50.01%_-1.96%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 4">
            <path d={svgPaths.p1e583400} id="Vector 32" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function NavbarItems() {
  const { t } = useLanguage();
  const location = useLocation();
  
  return (
    <div className="content-stretch hidden lg:flex gap-[32px] items-start relative shrink-0" data-name="navbar">
      <NavItem to="/" label={t('nav.home')} isActive={location.pathname === '/'} />
      <NavItem to="/search" label={t('nav.searchTicket')} isActive={location.pathname === '/search'} />
      <NavItem to="/faq" label={t('nav.faq')} isActive={location.pathname === '/faq'} />
      <NavItem to="/about" label={t('nav.aboutUs')} isActive={location.pathname === '/about'} />
      <NavItem to="/knowledge" label={t('nav.knowledge')} isActive={location.pathname === '/knowledge'} />
    </div>
  );
}

function TabTitle() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tab title">
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] text-nowrap text-right">
        <p className="leading-[24px] whitespace-pre" dir="auto">
          {t('nav.language')}
        </p>
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p286acf00} fill="var(--fill-0, #161616)" fillRule="evenodd" />
            <path d={svgPaths.p20518e00} fill="var(--fill-0, #161616)" />
            <path clipRule="evenodd" d={svgPaths.p1d6b82c0} fill="var(--fill-0, #161616)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Leading Icon">
      <Elements />
    </div>
  );
}

function HeaderAction() {
  const { toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage}
      className="content-stretch flex gap-[4px] h-[72px] items-center justify-center min-w-[72px] px-[16px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200" 
      data-name="Header Action 2"
    >
      <TabTitle />
      <LeadingIcon />
    </button>
  );
}

function ButonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="buton_icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#008dc3] content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#007ab0] transition-colors" data-name="button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.18px] whitespace-pre" dir="auto">
        {t('nav.login')}
      </p>
      <ButonIcon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch hidden lg:flex gap-[8px] items-center justify-end relative shrink-0">
      <HeaderAction />
      <Button />
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const location = useLocation();
  
  if (!isOpen) return null;
  
  const menuItems = [
    { to: '/', label: t('nav.home') },
    { to: '/search', label: t('nav.searchTicket') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/about', label: t('nav.aboutUs') },
    { to: '/knowledge', label: t('nav.knowledge') }
  ];
  
  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-gray-200">
          <div className="h-[40px] w-[116px]">
            <img alt="" className="max-w-none object-contain object-left size-full" src={imgLogo} />
          </div>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-[#242524]" />
          </button>
        </div>
        <div className="flex flex-col gap-[24px] p-[20px]">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[18px] ${
                location.pathname === item.to ? 'text-[#242524]' : 'text-[#a6a6a6]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <div 
        className={`max-w-[1600px] mx-auto relative shrink-0 w-full transition-all duration-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`} 
        data-name="Navbar"
      >
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[20px] md:px-[40px] lg:px-[60px] py-[8px] relative w-full">
            <Link to="/" className="h-[40px] md:h-[48px] lg:h-[56px] relative shrink-0 w-[116px] md:w-[140px] lg:w-[163px]" data-name="logo">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
            </Link>
            <button 
              className="lg:hidden p-2 z-10"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-[#242524]" />
            </button>
            <NavbarItems />
            <Frame1 />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
