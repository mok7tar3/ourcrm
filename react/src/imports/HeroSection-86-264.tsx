import imgAboutHeroImage1 from "figma:asset/98ba85f888287ff174bf52e04d60cd8363aeaff3.png";
import { useLanguage } from '../contexts/LanguageContext';
import { useContentValue } from '../hooks/useContent';

function Content({ 
  titleAr, 
  titleEn, 
  point1Ar, 
  point1En, 
  point2Ar, 
  point2En, 
  point3Ar, 
  point3En 
}: { 
  titleAr: string; 
  titleEn: string; 
  point1Ar: string; 
  point1En: string; 
  point2Ar: string; 
  point2En: string; 
  point3Ar: string; 
  point3En: string; 
}) {
  const { language } = useLanguage();
  
  return (
    <div 
      className={`basis-0 content-stretch flex flex-col gap-[16px] md:gap-[20px] grow h-full items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 ${
        language === 'ar' ? 'text-right' : 'text-left'
      }`} 
      data-name="content"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={`flex flex-col min-h-[40px] md:min-h-[60px] justify-center relative shrink-0 text-[#242524] text-[0px] w-full ${
        language === 'ar' ? 'items-end' : 'items-start'
      }`}>
        <p className="leading-[1.2] md:leading-[90px] not-italic text-[28px] md:text-[36px] lg:text-[40px]">
          {language === 'ar' ? (
            titleAr
          ) : (
            <>
              <span>{titleEn.split(' ')[0]} </span>
              <span className="text-[#008dc3]">{titleEn.split(' ').slice(1).join(' ')}</span>
            </>
          )}
        </p>
      </div>
      <ul className={`block relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[16px] lg:text-[18px] w-full space-y-2 ${
        language === 'ar' ? 'list-disc pr-[20px] md:pr-[27px]' : 'list-disc pl-[20px] md:pl-[27px]'
      }`}>
        <li className={language === 'ar' ? 'mr-[20px] md:mr-[27px]' : 'ml-[20px] md:ml-[27px]'}>
          <span className="leading-[1.6] md:leading-[30px]">
            {language === 'ar' ? point1Ar : point1En}
          </span>
        </li>
        <li className={language === 'ar' ? 'mr-[20px] md:mr-[27px]' : 'ml-[20px] md:ml-[27px]'}>
          <span className="leading-[1.6] md:leading-[30px]">
            {language === 'ar' ? point2Ar : point2En}
          </span>
        </li>
        <li className={language === 'ar' ? 'mr-[20px] md:mr-[27px]' : 'ml-[20px] md:ml-[27px]'}>
          <span className="leading-[1.6] md:leading-[30px]">
            {language === 'ar' ? point3Ar : point3En}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default function HeroSection() {
  const { language } = useLanguage();
  
  // Load content from CMS with unique key 'about_page'
  const titleAr = useContentValue('about_page', 'titleAr', 'من نحن');
  const titleEn = useContentValue('about_page', 'titleEn', 'About OUR KSU');
  const point1Ar = useContentValue('about_page', 'point1Ar', 'خدمة دعم المستفيدين هي القناة الرسمية للتواصل مع إدارة تقنية المعلومات بجامعة الملك سعود');
  const point1En = useContentValue('about_page', 'point1En', 'The Beneficiary Support Service is the official communication channel supervised by King Saud University.');
  const point2Ar = useContentValue('about_page', 'point2Ar', 'توفر طريقة موحدة وموثوقة لتقديم الطلبات والاستفسارات والمشكلات التقنية');
  const point2En = useContentValue('about_page', 'point2En', 'It provides a unified and reliable way to submit requests, inquiries and technical issues');
  const point3Ar = useContentValue('about_page', 'point3Ar', 'هدفنا هو تعزيز التواصل الفعال وتقديم الدعم الفني بأعلى مستويات الجودة');
  const point3En = useContentValue('about_page', 'point3En', 'Our goal is to enhance effective communication and provide technical support at the highest levels of quality');

  return (
    <div className="relative w-full" data-name="Hero section">
      <div className="flex flex-row items-center justify-center w-full">
        <div className={`content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[32px] items-center justify-center w-full px-[20px] md:px-[40px] lg:px-[72px] py-[40px] md:py-[60px] lg:py-[72px] relative ${
          language === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}>
          <div className="w-full md:w-auto md:h-[400px] lg:h-[478px] relative shrink-0 md:flex-shrink-0 md:basis-[40%] lg:basis-auto lg:w-[536px]" data-name="about hero image 1">
            <img alt="" className="w-full h-full object-cover rounded-[12px]" src={imgAboutHeroImage1} />
          </div>
          <div className="w-full md:basis-[60%] lg:basis-0 flex flex-row grow items-center shrink-0">
            <Content 
              titleAr={titleAr}
              titleEn={titleEn}
              point1Ar={point1Ar}
              point1En={point1En}
              point2Ar={point2Ar}
              point2En={point2En}
              point3Ar={point3Ar}
              point3En={point3En}
            />
          </div>
        </div>
      </div>
    </div>
  );
}