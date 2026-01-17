import svgPaths from "./svg-3yu834b3c7";
import { useLanguage } from '../contexts/LanguageContext';
import { useContentValue } from '../hooks/useContent';
import { Link } from 'react-router-dom';

function VuesaxOutlineSearchNormal2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search-normal">{children}</g>
      </svg>
    </div>
  );
}

function VuesaxOutlineSearchNormal() {
  return (
    <VuesaxOutlineSearchNormal2>
      <path d={svgPaths.p13851c40} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
      <path d={svgPaths.p2f497200} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
      <g id="Vector_3" opacity="0"></g>
    </VuesaxOutlineSearchNormal2>
  );
}

function ButonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <VuesaxOutlineSearchNormal />
    </div>
  );
}

function CreateATicketButton({ text }: { text: string }) {
  return (
    <Link to="/search" className="no-underline">
      <div className="bg-[#008dc3] content-stretch flex gap-[8px] md:gap-[10px] items-center justify-center px-[20px] md:px-[30px] py-[14px] md:py-[20px] relative rounded-[30px] md:rounded-[40px] shrink-0 hover:bg-[#007bb0] transition-colors cursor-pointer" data-name="create_a_ticket_button">
        <ButonIcon />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] md:text-[18px] text-nowrap text-white">{text}</p>
      </div>
    </Link>
  );
}

function VuesaxOutlineSearchNormal1() {
  return (
    <VuesaxOutlineSearchNormal2>
      <path d={svgPaths.p13851c40} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
      <path d={svgPaths.p2f497200} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" />
      <g id="Vector_3" opacity="0"></g>
    </VuesaxOutlineSearchNormal2>
  );
}

function ButonIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buton_icon">
      <VuesaxOutlineSearchNormal1 />
    </div>
  );
}

function SearchOldTicketButton({ text }: { text: string }) {
  return (
    <Link to="/search" className="no-underline">
      <div className="content-stretch flex gap-[6px] md:gap-[8px] h-[36px] md:h-[40px] items-center justify-center p-[6px] md:p-[8px] relative rounded-[20px] md:rounded-[24px] shrink-0 hover:bg-gray-100 transition-colors cursor-pointer" data-name="search_old_ticket_button">
        <ButonIcon1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] md:leading-[22px] not-italic relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[16px] text-center text-nowrap tracking-[-0.18px]">
          {text}
        </p>
      </div>
    </Link>
  );
}

function CtaButtons({ btnText, searchText }: { btnText: string; searchText: string }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[40px] items-center relative shrink-0" data-name="CTA_buttons">
      <CreateATicketButton text={btnText} />
      <SearchOldTicketButton text={searchText} />
    </div>
  );
}

function Container({ titleAr, titleEn, descAr, descEn, btnTextAr, btnTextEn, searchTextAr, searchTextEn }: { 
  titleAr: string; 
  titleEn: string; 
  descAr: string; 
  descEn: string; 
  btnTextAr: string; 
  btnTextEn: string; 
  searchTextAr: string; 
  searchTextEn: string; 
}) {
  const { language } = useLanguage();
  
  return (
    <div className="bg-[#f2f8ff] max-w-[1600px] relative rounded-[20px] md:rounded-[30px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] lg:gap-[48px] items-center justify-center max-w-[inherit] p-[30px] md:p-[50px] lg:p-[80px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium min-h-[40px] md:min-h-[50px] lg:h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#242524] text-[28px] md:text-[36px] lg:text-[40px] text-center w-full">
            <p className="leading-[1.3] md:leading-[1.5] lg:leading-[90px]">
              {language === 'ar' ? titleAr : titleEn}
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[30px] min-w-full not-italic relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[16px] lg:text-[18px] text-center w-[min-content] px-[10px] md:px-0">
            {language === 'ar' ? descAr : descEn}
          </p>
          <CtaButtons 
            btnText={language === 'ar' ? btnTextAr : btnTextEn}
            searchText={language === 'ar' ? searchTextAr : searchTextEn}
          />
        </div>
      </div>
    </div>
  );
}

export default function CatSection() {
  const { language } = useLanguage();
  
  // Load content from CMS with unique key 'about_cta'
  const titleAr = useContentValue('about_cta', 'titleAr', 'هل أنت مستعد؟');
  const titleEn = useContentValue('about_cta', 'titleEn', 'Are you ready?');
  const descAr = useContentValue('about_cta', 'descAr', 'ابدأ طلبك الآن واحصل على الدعم مباشرة من الفريق الرسمي لجامعة الملك سعود.');
  const descEn = useContentValue('about_cta', 'descEn', 'Start your request now and get support directly from the official KSU team.');
  const btnTextAr = useContentValue('about_cta', 'btnTextAr', 'إنشاء تذكرة');
  const btnTextEn = useContentValue('about_cta', 'btnTextEn', 'Create A Ticket');
  const searchTextAr = useContentValue('about_cta', 'searchTextAr', 'البحث عن تذكرة قديمة');
  const searchTextEn = useContentValue('about_cta', 'searchTextEn', 'Search old Ticket');

  return (
    <div className="relative w-full" data-name="CAT_section">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] md:px-[40px] lg:px-[72px] py-[30px] md:py-[40px] lg:py-[48px] relative w-full">
          <Container 
            titleAr={titleAr}
            titleEn={titleEn}
            descAr={descAr}
            descEn={descEn}
            btnTextAr={btnTextAr}
            btnTextEn={btnTextEn}
            searchTextAr={searchTextAr}
            searchTextEn={searchTextEn}
          />
        </div>
      </div>
    </div>
  );
}
