import svgPaths from "./svg-880kn1mpj7";
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Group Label">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-white">{children}</p>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-80 transition-opacity no-underline cursor-pointer" data-name="Link">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] md:text-[14px] text-white">{children}</p>
    </Link>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-80 transition-opacity no-underline cursor-pointer" data-name="Link" target="_blank" rel="noopener noreferrer">
      <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] md:text-[14px] text-white">{children}</p>
    </a>
  );
}

function LinkList() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Link List">
      <FooterLink to="/knowledge">Knowledge</FooterLink>
      <FooterLink to="/faq">FAQ</FooterLink>
      <FooterLink to="/about">About us</FooterLink>
      <FooterLink to="/search">Search old ticket</FooterLink>
      <FooterLink to="/search">Create a ticket</FooterLink>
    </div>
  );
}

function FooterGroup() {
  const { t } = useLanguage();
  return (
    <div className="w-full md:basis-0 content-stretch flex flex-col gap-[8px] md:grow items-start min-h-px md:min-w-[180px] relative mb-[24px] md:mb-0" data-name="Footer group">
      <GroupLabel>{t('footer.quickLinks')}</GroupLabel>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <LinkList />
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Link List">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] md:text-[14px] text-white">RHMA-3184</p>
      </div>
      <ExternalLink href="mailto:info@ourksu.sa">
        info@ourksu.sa
      </ExternalLink>
      <ExternalLink href="tel:+966054875452">
        +966 05487545
      </ExternalLink>
    </div>
  );
}

function ContactGroup() {
  const { language } = useLanguage();
  return (
    <div className="w-full md:basis-0 content-stretch flex flex-col gap-[8px] md:grow items-start min-h-px md:min-w-[180px] relative mb-[24px] md:mb-0" data-name="Footer group">
      <GroupLabel>{language === 'ar' ? 'معلومات الاتصال' : 'Contact info'}</GroupLabel>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <ContactInfo />
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[11.25%_-8.75%_-8.75%_11.25%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path clipRule="evenodd" d={svgPaths.pe713580} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <Elements />
    </div>
  );
}

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[4px] shrink-0 size-[32px] hover:opacity-80 transition-opacity cursor-pointer" data-name="Button">
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[12px] py-0 relative rounded-[inherit] size-[32px]">
        {children}
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </a>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[6.25%_-13.75%_-13.75%_6.25%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p2506b400} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3d0b5600} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p165a1600} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <Elements1 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="relative size-full" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g>
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p13288500} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p12b63200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p3ae7a300} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <div className="absolute flex inset-[8.75%_-11.25%_-11.25%_8.75%] items-center justify-center">
        <div className="flex-none scale-y-[-100%] size-[20.5px]">
          <Elements2 />
        </div>
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Social media">
      <SocialButton href="https://www.instagram.com/ksu_official/">
        <LeadingIcon />
      </SocialButton>
      <SocialButton href="https://www.snapchat.com/add/ksusnapchat">
        <LeadingIcon1 />
      </SocialButton>
      <SocialButton href="https://twitter.com/KSU_NEWS">
        <LeadingIcon2 />
      </SocialButton>
    </div>
  );
}

function SocialGroup() {
  const { language } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Social media">
      <GroupLabel>{language === 'ar' ? 'وسائل التواصل الاجتماعي' : 'Social Media'}</GroupLabel>
      <SocialMedia />
    </div>
  );
}

function Elements3() {
  return (
    <div className="absolute inset-[11.25%_-3.42%_-8.76%_15.92%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g>
          <path d={svgPaths.p4423f80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <Elements3 />
    </div>
  );
}

function Elements4() {
  return (
    <div className="absolute inset-[6.25%_-13.75%_-13.75%_6.25%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <g id="Icon">
            <path d={svgPaths.p22d97400} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p21b1d80} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <Elements4 />
    </div>
  );
}

function Elements5() {
  return (
    <div className="absolute inset-[21.25%_-13.75%_1.25%_6.25%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g>
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p289621c0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3879f60} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Leading Icon">
      <Elements5 />
    </div>
  );
}

function AccessibilityButtons() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Social media">
      <div className="max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[4px] shrink-0 size-[32px] opacity-50 cursor-not-allowed" data-name="Button">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[12px] py-0 relative rounded-[inherit] size-[32px]">
          <LeadingIcon3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[4px] shrink-0 size-[32px] opacity-50 cursor-not-allowed" data-name="Button">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[12px] py-0 relative rounded-[inherit] size-[32px]">
          <LeadingIcon4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[4px] shrink-0 size-[32px] opacity-50 cursor-not-allowed" data-name="Button">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[12px] py-0 relative rounded-[inherit] size-[32px]">
          <LeadingIcon5 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function AccessibilityTools() {
  const { language } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Accessibility tools">
      <GroupLabel>{language === 'ar' ? 'أدوات الوصول' : 'Accessibility Tools'}</GroupLabel>
      <AccessibilityButtons />
    </div>
  );
}

function SocialAccessibilityGroup() {
  return (
    <div className="w-full md:basis-0 content-stretch flex flex-col gap-[32px] md:grow items-start min-h-px md:min-w-[180px] relative mb-[24px] md:mb-0" data-name="Footer group">
      <SocialGroup />
      <AccessibilityTools />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-start flex flex-col md:flex-row md:flex-nowrap gap-0 md:gap-[24px] items-start pb-[20px] md:pb-[30px] lg:pb-[40px] pt-[16px] px-0 relative shrink-0 w-full" data-name="Nav links">
      <FooterGroup />
      <ContactGroup />
      <SocialAccessibilityGroup />
    </div>
  );
}

function PrivacyLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 opacity-50 cursor-not-allowed" data-name="Link">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-white underline">Privacy policy</p>
    </div>
  );
}

function LinkList2() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full" data-name="Link List">
      <PrivacyLink />
    </div>
  );
}

function LegalCaption() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Legal caption">
      <p className="font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-white" dir="auto">
        All Right Reserved For Our KSU © 2025
      </p>
    </div>
  );
}

function Legal() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[8px] items-start relative shrink-0 w-full" data-name="Legal">
      <LegalCaption />
    </div>
  );
}

function LinksLegalInfo() {
  return (
    <div className="w-full md:basis-0 content-stretch flex flex-col gap-[24px] md:gap-[40px] md:grow items-start min-h-px min-w-px relative mb-[20px] md:mb-0" data-name="Links & legal info">
      <LinkList2 />
      <Legal />
    </div>
  );
}

function Component2030SaudiVision2030LogoSvg() {
  return (
    <div className="h-[95.381px] relative shrink-0 w-[132px]" data-name="شعار رؤية المملكة 2030 – Saudi vision 2030 Logo SVG 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 96">
        <g clipPath="url(#clip0_11_8546)" id="شعار رؤية المملكة 2030 – Saudi vision 2030 Logo SVG 1">
          <g id="Vector"></g>
          <path d={svgPaths.p2f885a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3b4d9280} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p61b1e00} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p23287c80} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p2fc3d680} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p38253500} fill="var(--fill-0, white)" id="Vector_7" />
              <path d={svgPaths.p1a03b700} fill="var(--fill-0, white)" id="Vector_8" />
              <path d={svgPaths.p2529ef00} fill="var(--fill-0, white)" id="Vector_9" />
              <path d={svgPaths.p4f9dc00} fill="var(--fill-0, white)" id="Vector_10" />
              <path d={svgPaths.p15a42300} fill="var(--fill-0, white)" id="Vector_11" />
              <path d={svgPaths.p3e72cb00} fill="var(--fill-0, white)" id="Vector_12" />
              <path d={svgPaths.p3110f4c0} fill="var(--fill-0, white)" id="Vector_13" />
              <path d={svgPaths.p1ee91400} fill="var(--fill-0, white)" id="Vector_14" />
              <path d={svgPaths.pb66800} fill="var(--fill-0, white)" id="Vector_15" />
              <path d={svgPaths.p22628780} fill="var(--fill-0, white)" id="Vector_16" />
              <path d={svgPaths.pe821580} fill="var(--fill-0, white)" id="Vector_17" />
              <path d={svgPaths.p33af2900} fill="var(--fill-0, white)" id="Vector_18" />
              <path d={svgPaths.p3c6a2700} fill="var(--fill-0, white)" id="Vector_19" />
              <path d={svgPaths.p2e035392} fill="var(--fill-0, white)" id="Vector_20" />
            </g>
            <path d={svgPaths.pf7c1100} fill="var(--fill-0, white)" id="Vector_21" />
            <path d={svgPaths.p2e610400} fill="var(--fill-0, white)" id="Vector_22" />
            <path d={svgPaths.p3a08d790} fill="var(--fill-0, white)" id="Vector_23" />
            <path d={svgPaths.p285ad500} fill="var(--fill-0, white)" id="Vector_24" />
            <path d={svgPaths.pc302b00} fill="var(--fill-0, white)" id="Vector_25" />
            <path d={svgPaths.p346dac00} fill="var(--fill-0, white)" id="Vector_26" />
            <path d={svgPaths.p298b970} fill="var(--fill-0, white)" id="Vector_27" />
            <path d={svgPaths.p68f5c00} fill="var(--fill-0, white)" id="Vector_28" />
            <path d={svgPaths.p2ae4780} fill="var(--fill-0, white)" id="Vector_29" />
            <path d={svgPaths.p3ce40b60} fill="var(--fill-0, white)" id="Vector_30" />
            <path d={svgPaths.p23ddc580} fill="var(--fill-0, white)" id="Vector_31" />
            <path d={svgPaths.p3d527300} fill="var(--fill-0, white)" id="Vector_32" />
            <path d={svgPaths.p173261a0} fill="var(--fill-0, white)" id="Vector_33" />
            <path d={svgPaths.p2c10bb00} fill="var(--fill-0, white)" id="Vector_34" />
            <path d={svgPaths.p21a4c700} fill="var(--fill-0, white)" id="Vector_35" />
            <path d={svgPaths.p75c5480} fill="var(--fill-0, white)" id="Vector_36" />
            <path d={svgPaths.p3385f00} fill="var(--fill-0, white)" id="Vector_37" />
            <path d={svgPaths.p382de100} fill="var(--fill-0, white)" id="Vector_38" />
            <path d={svgPaths.p1529f000} fill="var(--fill-0, white)" id="Vector_39" />
            <path d={svgPaths.p6dc8600} fill="var(--fill-0, white)" id="Vector_40" />
            <path d={svgPaths.p36334a00} fill="var(--fill-0, white)" id="Vector_41" />
            <path d={svgPaths.p233f9580} fill="var(--fill-0, white)" id="Vector_42" />
            <path d={svgPaths.p870fd00} fill="var(--fill-0, white)" id="Vector_43" />
            <path d={svgPaths.p8e1a180} fill="var(--fill-0, white)" id="Vector_44" />
            <path d={svgPaths.p2f096d00} fill="var(--fill-0, white)" id="Vector_45" />
            <path d={svgPaths.p353d6600} fill="var(--fill-0, white)" id="Vector_46" />
            <path d={svgPaths.p1dffa100} fill="var(--fill-0, white)" id="Vector_47" />
            <path d={svgPaths.p6f34180} fill="var(--fill-0, white)" id="Vector_48" />
            <path d={svgPaths.p3f1c1300} fill="var(--fill-0, white)" id="Vector_49" />
            <path d={svgPaths.p37af4670} fill="var(--fill-0, white)" id="Vector_50" />
            <path d={svgPaths.p10c5b800} fill="var(--fill-0, white)" id="Vector_51" />
            <path d={svgPaths.p27eaaf00} fill="var(--fill-0, white)" id="Vector_52" />
            <path d={svgPaths.p85a5480} fill="var(--fill-0, white)" id="Vector_53" />
            <path d={svgPaths.p64a1000} fill="var(--fill-0, white)" id="Vector_54" />
            <path d={svgPaths.p2218e300} fill="var(--fill-0, white)" id="Vector_55" />
            <path d={svgPaths.p2c1d380} fill="var(--fill-0, white)" id="Vector_56" />
            <path d={svgPaths.pc5f6b00} fill="var(--fill-0, white)" id="Vector_57" />
            <path d={svgPaths.p308ad400} fill="var(--fill-0, white)" id="Vector_58" />
            <path d={svgPaths.p3eaad9f0} fill="var(--fill-0, white)" id="Vector_59" />
            <path d={svgPaths.p38c19c00} fill="var(--fill-0, white)" id="Vector_60" />
            <path d={svgPaths.p29b22600} fill="var(--fill-0, white)" id="Vector_61" />
            <path d={svgPaths.p24aba380} fill="var(--fill-0, white)" id="Vector_62" />
            <path d={svgPaths.p1ecbdc00} fill="var(--fill-0, white)" id="Vector_63" />
            <path d={svgPaths.p4967e00} fill="var(--fill-0, white)" id="Vector_64" />
            <path d={svgPaths.p1b47b800} fill="var(--fill-0, white)" id="Vector_65" />
            <path d={svgPaths.p33b5a900} fill="var(--fill-0, white)" id="Vector_66" />
            <path d={svgPaths.p2dfe7a80} fill="var(--fill-0, white)" id="Vector_67" />
            <path d={svgPaths.p2eba2280} fill="var(--fill-0, white)" id="Vector_68" />
            <path d={svgPaths.p98b0180} fill="var(--fill-0, white)" id="Vector_69" />
            <path d={svgPaths.p34647800} fill="var(--fill-0, white)" id="Vector_70" />
            <path d={svgPaths.p38ad800} fill="var(--fill-0, white)" id="Vector_71" />
            <path d={svgPaths.p573ea70} fill="var(--fill-0, white)" id="Vector_72" />
            <path d={svgPaths.p45c3900} fill="var(--fill-0, white)" id="Vector_73" />
            <path d={svgPaths.p1ef2c080} fill="var(--fill-0, white)" id="Vector_74" />
            <path d={svgPaths.p12c05c00} fill="var(--fill-0, white)" id="Vector_75" />
            <path d={svgPaths.pca4d400} fill="var(--fill-0, white)" id="Vector_76" />
            <path d={svgPaths.p35fc1932} fill="var(--fill-0, white)" id="Vector_77" />
            <path d={svgPaths.p5d64b00} fill="var(--fill-0, white)" id="Vector_78" />
            <path d={svgPaths.p4bf680} fill="var(--fill-0, white)" id="Vector_79" />
            <path d={svgPaths.p3bb5c170} fill="var(--fill-0, white)" id="Vector_80" />
            <path d={svgPaths.p81bf172} fill="var(--fill-0, white)" id="Vector_81" />
            <path d={svgPaths.p2e1d36f0} fill="var(--fill-0, white)" id="Vector_82" />
            <path d={svgPaths.p3d751880} fill="var(--fill-0, white)" id="Vector_83" />
            <path d={svgPaths.p1c744f00} fill="var(--fill-0, white)" id="Vector_84" />
            <path d={svgPaths.p2d340f00} fill="var(--fill-0, white)" id="Vector_85" />
            <path d={svgPaths.p17ba1a00} fill="var(--fill-0, white)" id="Vector_86" />
            <path d={svgPaths.pdad7900} fill="var(--fill-0, white)" id="Vector_87" />
            <path d={svgPaths.p1e03f500} fill="var(--fill-0, white)" id="Vector_88" />
            <path d={svgPaths.p3715dd00} fill="var(--fill-0, white)" id="Vector_89" />
            <path d={svgPaths.p120b780} fill="var(--fill-0, white)" id="Vector_90" />
            <path d={svgPaths.p10587480} fill="var(--fill-0, white)" id="Vector_91" />
            <path d={svgPaths.p10e11980} fill="var(--fill-0, white)" id="Vector_92" />
            <path d={svgPaths.p3b49880} fill="var(--fill-0, white)" id="Vector_93" />
            <path d={svgPaths.p16c0d880} fill="var(--fill-0, white)" id="Vector_94" />
            <path d={svgPaths.p38474200} fill="var(--fill-0, white)" id="Vector_95" />
            <path d={svgPaths.p2bcb7100} fill="var(--fill-0, white)" id="Vector_96" />
            <path d={svgPaths.p20e3dd80} fill="var(--fill-0, white)" id="Vector_97" />
            <path d={svgPaths.pc857f00} fill="var(--fill-0, white)" id="Vector_98" />
            <path d={svgPaths.p16c7fca0} fill="var(--fill-0, white)" id="Vector_99" />
            <path d={svgPaths.p344c5010} fill="var(--fill-0, white)" id="Vector_100" />
            <path d={svgPaths.p31417600} fill="var(--fill-0, white)" id="Vector_101" />
            <path d={svgPaths.p2c433a80} fill="var(--fill-0, white)" id="Vector_102" />
            <path d={svgPaths.pc479200} fill="var(--fill-0, white)" id="Vector_103" />
            <path d={svgPaths.p12ebf200} fill="var(--fill-0, white)" id="Vector_104" />
            <path d={svgPaths.p8f4f980} fill="var(--fill-0, white)" id="Vector_105" />
            <path d={svgPaths.p1dc16b00} fill="var(--fill-0, white)" id="Vector_106" />
            <path d={svgPaths.p37ae6680} fill="var(--fill-0, white)" id="Vector_107" />
            <path d={svgPaths.p20f0c380} fill="var(--fill-0, white)" id="Vector_108" />
            <path d={svgPaths.p23283080} fill="var(--fill-0, white)" id="Vector_109" />
            <path d={svgPaths.p17db3200} fill="var(--fill-0, white)" id="Vector_110" />
            <path d={svgPaths.p1f7796d0} fill="var(--fill-0, white)" id="Vector_111" />
            <g id="Group_3">
              <path d={svgPaths.p3e41ab00} fill="var(--fill-0, white)" id="Vector_112" />
              <path d={svgPaths.p24023a00} fill="var(--fill-0, white)" id="Vector_113" />
              <path d={svgPaths.p25a35700} fill="var(--fill-0, white)" id="Vector_114" />
              <path d={svgPaths.pb3c1400} fill="var(--fill-0, white)" id="Vector_115" />
              <path d={svgPaths.p6f79180} fill="var(--fill-0, white)" id="Vector_116" />
              <path d={svgPaths.p24613b80} fill="var(--fill-0, white)" id="Vector_117" />
              <path d={svgPaths.p27f7ff00} fill="var(--fill-0, white)" id="Vector_118" />
              <path d={svgPaths.p2fad5d00} fill="var(--fill-0, white)" id="Vector_119" />
              <path d={svgPaths.p34aa2500} fill="var(--fill-0, white)" id="Vector_120" />
              <path d={svgPaths.p2dc27c00} fill="var(--fill-0, white)" id="Vector_121" />
              <path d={svgPaths.p3d2dc180} fill="var(--fill-0, white)" id="Vector_122" />
              <path d={svgPaths.p3bfef700} fill="var(--fill-0, white)" id="Vector_123" />
              <path d={svgPaths.p2e849e80} fill="var(--fill-0, white)" id="Vector_124" />
              <path d={svgPaths.p3e92b280} fill="var(--fill-0, white)" id="Vector_125" />
              <path d={svgPaths.p3b1ccc00} fill="var(--fill-0, white)" id="Vector_126" />
              <path d={svgPaths.p1da86900} fill="var(--fill-0, white)" id="Vector_127" />
              <path d={svgPaths.p20f02b00} fill="var(--fill-0, white)" id="Vector_128" />
              <path d={svgPaths.p3f45c600} fill="var(--fill-0, white)" id="Vector_129" />
              <path d={svgPaths.p3e0bc780} fill="var(--fill-0, white)" id="Vector_130" />
              <path d={svgPaths.p1e891580} fill="var(--fill-0, white)" id="Vector_131" />
              <path d={svgPaths.p35d17300} fill="var(--fill-0, white)" id="Vector_132" />
              <path d={svgPaths.p3e27be00} fill="var(--fill-0, white)" id="Vector_133" />
              <path d={svgPaths.p1a628680} fill="var(--fill-0, white)" id="Vector_134" />
              <path d={svgPaths.p2b18b1f0} fill="var(--fill-0, white)" id="Vector_135" />
              <path d={svgPaths.p30c24af0} fill="var(--fill-0, white)" id="Vector_136" />
            </g>
            <path d={svgPaths.p3aa864f0} fill="var(--fill-0, white)" id="Vector_137" />
            <path d={svgPaths.p9b7d400} fill="var(--fill-0, white)" id="Vector_138" />
            <path d={svgPaths.p121ad800} fill="var(--fill-0, white)" id="Vector_139" />
            <path d={svgPaths.p3df26df0} fill="var(--fill-0, white)" id="Vector_140" />
            <path d={svgPaths.p18aec980} fill="var(--fill-0, white)" id="Vector_141" />
            <path d={svgPaths.p719d300} fill="var(--fill-0, white)" id="Vector_142" />
            <path d={svgPaths.p23c80600} fill="var(--fill-0, white)" id="Vector_143" />
            <path d={svgPaths.p2c36cb80} fill="var(--fill-0, white)" id="Vector_144" />
            <path d={svgPaths.p28e7a300} fill="var(--fill-0, white)" id="Vector_145" />
            <path d={svgPaths.p1189d0f0} fill="var(--fill-0, white)" id="Vector_146" />
            <path d={svgPaths.pec92000} fill="var(--fill-0, white)" id="Vector_147" />
            <path d={svgPaths.p12322b80} fill="var(--fill-0, white)" id="Vector_148" />
            <path d={svgPaths.p2e25a800} fill="var(--fill-0, white)" id="Vector_149" />
            <path d={svgPaths.p2bc85580} fill="var(--fill-0, white)" id="Vector_150" />
            <path d={svgPaths.p1e7c3980} fill="var(--fill-0, white)" id="Vector_151" />
            <path d={svgPaths.p4438880} fill="var(--fill-0, white)" id="Vector_152" />
            <path d={svgPaths.p2a8242c0} fill="var(--fill-0, white)" id="Vector_153" />
            <path d={svgPaths.p2af30900} fill="var(--fill-0, white)" id="Vector_154" />
            <path d={svgPaths.p852c600} fill="var(--fill-0, white)" id="Vector_155" />
            <path d={svgPaths.p3b0c4a00} fill="var(--fill-0, white)" id="Vector_156" />
            <path d={svgPaths.p3fca6600} fill="var(--fill-0, white)" id="Vector_157" />
            <path d={svgPaths.p1c2a1b00} fill="var(--fill-0, white)" id="Vector_158" />
            <path d={svgPaths.pe7b1ff0} fill="var(--fill-0, white)" id="Vector_159" />
            <path d={svgPaths.p22da4080} fill="var(--fill-0, white)" id="Vector_160" />
            <path d={svgPaths.p3cbe0af0} fill="var(--fill-0, white)" id="Vector_161" />
            <path d={svgPaths.p183abc00} fill="var(--fill-0, white)" id="Vector_162" />
            <path d={svgPaths.p33701b00} fill="var(--fill-0, white)" id="Vector_163" />
            <path d={svgPaths.p34513380} fill="var(--fill-0, white)" id="Vector_164" />
            <path d={svgPaths.p31393f00} fill="var(--fill-0, white)" id="Vector_165" />
            <path d={svgPaths.p5af3080} fill="var(--fill-0, white)" id="Vector_166" />
            <path d={svgPaths.p16183900} fill="var(--fill-0, white)" id="Vector_167" />
            <path d={svgPaths.p1af07c00} fill="var(--fill-0, white)" id="Vector_168" />
            <path d={svgPaths.p2cfed600} fill="var(--fill-0, white)" id="Vector_169" />
            <path d={svgPaths.p1ee09d00} fill="var(--fill-0, white)" id="Vector_170" />
            <path d={svgPaths.p2a211f80} fill="var(--fill-0, white)" id="Vector_171" />
            <path d={svgPaths.p114d2e00} fill="var(--fill-0, white)" id="Vector_172" />
            <path d={svgPaths.p39e5f400} fill="var(--fill-0, white)" id="Vector_173" />
            <path d={svgPaths.p32546f00} fill="var(--fill-0, white)" id="Vector_174" />
            <path d={svgPaths.p18866c80} fill="var(--fill-0, white)" id="Vector_175" />
            <path d={svgPaths.p131c1ff0} fill="var(--fill-0, white)" id="Vector_176" />
            <path d={svgPaths.p33d2fc00} fill="var(--fill-0, white)" id="Vector_177" />
            <path d={svgPaths.p342f0e00} fill="var(--fill-0, white)" id="Vector_178" />
            <path d={svgPaths.p2df5cb00} fill="var(--fill-0, white)" id="Vector_179" />
            <path d={svgPaths.p32369f80} fill="var(--fill-0, white)" id="Vector_180" />
            <path d={svgPaths.p13ebde00} fill="var(--fill-0, white)" id="Vector_181" />
            <path d={svgPaths.p173c0000} fill="var(--fill-0, white)" id="Vector_182" />
            <path d={svgPaths.p11fde980} fill="var(--fill-0, white)" id="Vector_183" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_8546">
            <rect fill="white" height="95.381" width="132" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="w-full md:basis-0 content-stretch flex md:grow items-start min-h-px min-w-px relative mb-[20px] md:mb-0" data-name="logo">
      <Component2030SaudiVision2030LogoSvg />
    </div>
  );
}

function BottomContainer() {
  return (
    <div className="content-start flex flex-col-reverse md:flex-row md:flex-nowrap gap-[24px] md:gap-[40px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <LinksLegalInfo />
      <Logo />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] md:gap-[48px] grow items-start min-h-px min-w-px pt-[20px] md:pt-[40px] relative shrink-0" data-name="Content">
      <NavLinks />
      <BottomContainer />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#008dc3] relative w-full" data-name="Footer">
      <div className="flex flex-row justify-center w-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[20px] md:px-[32px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}