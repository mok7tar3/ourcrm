import svgPaths from "./svg-s8yyf2e5ml";
import { useLanguage } from '../contexts/LanguageContext';
import { useContentValue } from '../hooks/useContent';

type InputFieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  dir?: string;
};

function InputFieldArabic2({ label, required, placeholder, type = "text", dir }: InputFieldProps) {
  const { language } = useLanguage();
  
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className={`leading-[1.55] not-italic relative shrink-0 text-[#212121] text-[14px] ${
        language === 'ar' ? 'text-right' : 'text-left'
      }`}>
        {label}
        {required && <span className="text-[#b62f2f]"> *</span>}
      </p>
      <Helper placeholder={placeholder || ''} type={type} dir={dir} />
    </div>
  );
}

function Helper({ placeholder, type, dir }: { placeholder: string; type: string; dir?: string }) {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[14px] relative w-full">
          <input
            type={type}
            placeholder={placeholder}
            dir={dir || (language === 'ar' ? 'rtl' : 'ltr')}
            className={`flex-1 bg-transparent outline-none text-[14px] text-[#212121] placeholder:text-[#616161] ${
              language === 'ar' ? 'text-right' : 'text-left'
            }`}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VuesaxOutlineSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/search-normal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search-normal">
          <path d={svgPaths.p13851c40} fill="white" stroke="white" />
          <path d={svgPaths.p2f497200} fill="white" stroke="white" />
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

function SearchButton({ text }: { text: string }) {
  return (
    <button className="bg-[#008dc3] h-[52px] relative rounded-[8px] shrink-0 w-full hover:bg-[#007ab0] transition-colors">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[20px] relative size-full">
          <ButonIcon />
          <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white">{text}</p>
        </div>
      </div>
    </button>
  );
}

export default function Container() {
  const { language } = useLanguage();
  
  // Load content from CMS with unique key 'search_page'
  const ticketNumberLabelAr = useContentValue('search_page', 'ticketNumberLabelAr', 'رقم التذكرة');
  const ticketNumberLabelEn = useContentValue('search_page', 'ticketNumberLabelEn', 'Ticket Number');
  const ticketNumberPlaceholderAr = useContentValue('search_page', 'ticketNumberPlaceholderAr', 'أدخل رقم التذكرة');
  const ticketNumberPlaceholderEn = useContentValue('search_page', 'ticketNumberPlaceholderEn', 'Enter ticket number');
  
  const emailLabelAr = useContentValue('search_page', 'emailLabelAr', 'البريد الإلكتروني');
  const emailLabelEn = useContentValue('search_page', 'emailLabelEn', 'Email');
  const emailPlaceholderAr = useContentValue('search_page', 'emailPlaceholderAr', 'أدخل البريد الإلكتروني');
  const emailPlaceholderEn = useContentValue('search_page', 'emailPlaceholderEn', 'Enter email');
  
  const searchButtonAr = useContentValue('search_page', 'searchButtonAr', 'بحث');
  const searchButtonEn = useContentValue('search_page', 'searchButtonEn', 'Search');

  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_6px_27.8px_0px_rgba(12,51,66,0.1)] size-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[inherit] px-[16px] py-[24px] relative size-full">
          <InputFieldArabic2
            label={language === 'ar' ? ticketNumberLabelAr : ticketNumberLabelEn}
            required={true}
            placeholder={language === 'ar' ? ticketNumberPlaceholderAr : ticketNumberPlaceholderEn}
            type="text"
          />
          
          <InputFieldArabic2
            label={language === 'ar' ? emailLabelAr : emailLabelEn}
            required={true}
            placeholder={language === 'ar' ? emailPlaceholderAr : emailPlaceholderEn}
            type="email"
            dir="ltr"
          />
          
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full mt-[8px]">
            <SearchButton text={language === 'ar' ? searchButtonAr : searchButtonEn} />
          </div>
        </div>
      </div>
    </div>
  );
}
