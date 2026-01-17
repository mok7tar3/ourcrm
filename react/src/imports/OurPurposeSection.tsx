import imgFrame1000004207 from "figma:asset/fc71bd095d4edbb3d8f431d9915a21c78f80fe89.png";
import imgFrame1000004208 from "figma:asset/2c528982eddd0bc3c82cb13bf811b9852a3e6e18.png";
import imgFrame1000004209 from "figma:asset/9c03c0d4a9bf756f51d6963826c1857f33ca0912.png";
import { useLanguage } from '../contexts/LanguageContext';
import { useContentValue } from '../hooks/useContent';

function Content({ 
  titleAr, 
  titleEn,
  introAr,
  introEn,
  point1Ar,
  point1En,
  point2Ar,
  point2En,
  point3Ar,
  point3En,
  point4Ar,
  point4En
}: { 
  titleAr: string; 
  titleEn: string;
  introAr: string;
  introEn: string;
  point1Ar: string;
  point1En: string;
  point2Ar: string;
  point2En: string;
  point3Ar: string;
  point3En: string;
  point4Ar: string;
  point4En: string;
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
      <div className={`flex flex-col min-h-[40px] md:min-h-[60px] justify-center relative shrink-0 text-[#242524] text-[28px] md:text-[36px] lg:text-[40px] w-full ${
        language === 'ar' ? 'items-end' : 'items-start'
      }`}>
        <p className="leading-[1.2] md:leading-[90px]">
          {language === 'ar' ? (
            titleAr
          ) : (
            <>
              <span>{titleEn.split(' ')[0]} </span>
              <span className="text-[#008dc3] text-[40px]">{titleEn.split(' ').slice(1).join(' ')}</span>
            </>
          )}
        </p>
      </div>
      <ul className={`block relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[16px] lg:text-[18px] w-full ${
        language === 'ar' ? 'list-none pr-0' : 'list-none pl-0'
      }`}>
        <li className={`mb-0 ${language === 'ar' ? 'mr-[20px] md:mr-[27px]' : 'ml-[20px] md:ml-[27px]'}`}>
          <span className="leading-[1.6] md:leading-[30px]">{language === 'ar' ? introAr : introEn}</span>
        </li>
        <ul className={`list-disc relative shrink-0 w-full mt-2 space-y-2 ${
          language === 'ar' ? 'pr-[20px] md:pr-[27px]' : 'pl-[20px] md:pl-[27px]'
        }`}>
          <li className={`mb-0 ${language === 'ar' ? 'mr-[40px] md:mr-[54px]' : 'ml-[40px] md:ml-[54px]'}`}>
            <span className="leading-[1.6] md:leading-[30px]">{language === 'ar' ? point1Ar : point1En}</span>
          </li>
          <li className={`mb-0 ${language === 'ar' ? 'mr-[40px] md:mr-[54px]' : 'ml-[40px] md:ml-[54px]'}`}>
            <span className="leading-[1.6] md:leading-[30px]">{language === 'ar' ? point2Ar : point2En}</span>
          </li>
          <li className={`mb-0 ${language === 'ar' ? 'mr-[40px] md:mr-[54px]' : 'ml-[40px] md:ml-[54px]'}`}>
            <span className="leading-[1.6] md:leading-[30px]">{language === 'ar' ? point3Ar : point3En}</span>
          </li>
          <li className={language === 'ar' ? 'mr-[40px] md:mr-[54px]' : 'ml-[40px] md:ml-[54px]'}>
            <span className="leading-[1.6] md:leading-[30px]">{language === 'ar' ? point4Ar : point4En}</span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col w-full md:w-auto h-[300px] md:h-[400px] lg:h-[478px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 md:flex-shrink-0 md:basis-[40%] lg:basis-auto lg:w-[536px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame1000004207} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame1000004208} />
        <div className="absolute bg-[rgba(0,27,37,0.76)] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgFrame1000004209} />
      </div>
    </div>
  );
}

export default function OurPurposeSection() {
  const { language } = useLanguage();
  
  // Load content from CMS with unique key 'about_purpose'
  const titleAr = useContentValue('about_purpose', 'titleAr', 'هدفنا');
  const titleEn = useContentValue('about_purpose', 'titleEn', 'Our Purpose');
  const introAr = useContentValue('about_purpose', 'introAr', 'نهدف إلى تعزيز الاتصال بين أعضاء جامعة الملك سعود وفرق التحول بالجامعة من خلال:');
  const introEn = useContentValue('about_purpose', 'introEn', 'We aim to strengthen the connection between KSU members and the university\'s transformation teams by:');
  const point1Ar = useContentValue('about_purpose', 'point1Ar', 'توفير نقطة اتصال واحدة لجميع الاستفسارات');
  const point1En = useContentValue('about_purpose', 'point1En', 'Providing a single point of contact for all inquiries');
  const point2Ar = useContentValue('about_purpose', 'point2Ar', 'ضمان عملية دعم سلسة وشفافة');
  const point2En = useContentValue('about_purpose', 'point2En', 'Ensuring a smooth and transparent support process');
  const point3Ar = useContentValue('about_purpose', 'point3Ar', 'تقديم مساعدة متسقة وعالية الجودة');
  const point3En = useContentValue('about_purpose', 'point3En', 'Delivering consistent, high-quality assistance');
  const point4Ar = useContentValue('about_purpose', 'point4Ar', 'تعزيز رضا المستخدمين عبر جميع الخدمات الرقمية');
  const point4En = useContentValue('about_purpose', 'point4En', 'Enhancing user satisfaction across all digital services');

  return (
    <div className="relative w-full" data-name="Our_Purpose_section">
      <div className="flex flex-row items-center justify-center w-full">
        <div className={`content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[32px] items-center justify-center w-full px-[20px] md:px-[40px] lg:px-[72px] py-[40px] md:py-[60px] lg:py-[32px] relative ${
          language === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}>
          <div className="w-full md:basis-[60%] lg:basis-0 flex flex-row grow items-center shrink-0">
            <Content 
              titleAr={titleAr}
              titleEn={titleEn}
              introAr={introAr}
              introEn={introEn}
              point1Ar={point1Ar}
              point1En={point1En}
              point2Ar={point2Ar}
              point2En={point2En}
              point3Ar={point3Ar}
              point3En={point3En}
              point4Ar={point4Ar}
              point4En={point4En}
            />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}