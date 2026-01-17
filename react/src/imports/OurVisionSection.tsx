import imgImage from "figma:asset/fc71bd095d4edbb3d8f431d9915a21c78f80fe89.png";
import imgImage1 from "figma:asset/2c528982eddd0bc3c82cb13bf811b9852a3e6e18.png";
import imgImage2 from "figma:asset/9c03c0d4a9bf756f51d6963826c1857f33ca0912.png";
import imgImage3 from "figma:asset/a4b40c1ecf321f6dc83db32821652b094f33fa2a.png";
import imgImage4 from "figma:asset/1fd8d46858da37ac907894cc3e2e55ef277f63d5.png";
import { useLanguage } from '../contexts/LanguageContext';
import { useContentValue } from '../hooks/useContent';

function Content({ titleAr, titleEn, textAr, textEn }: { titleAr: string; titleEn: string; textAr: string; textEn: string; }) {
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
      <ul className={`block relative shrink-0 text-[#6d6d6d] text-[14px] md:text-[16px] lg:text-[18px] w-full list-disc ${
        language === 'ar' ? 'pr-[20px] md:pr-[27px]' : 'pl-[20px] md:pl-[27px]'
      }`}>
        <li className={language === 'ar' ? 'mr-[20px] md:mr-[27px]' : 'ml-[20px] md:ml-[27px]'}>
          <span className="leading-[1.6] md:leading-[30px]">
            {language === 'ar' ? textAr : textEn}
          </span>
        </li>
      </ul>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col w-full md:w-auto h-[300px] md:h-[400px] lg:h-[478px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 md:flex-shrink-0 md:basis-[40%] lg:basis-auto lg:w-[536px]" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
        <div className="absolute bg-[rgba(0,27,37,0.76)] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage2} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage3} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage4} />
      </div>
    </div>
  );
}

export default function OurVisionSection() {
  const { language } = useLanguage();
  
  // Load content from CMS with unique key 'about_vision'
  const titleAr = useContentValue('about_vision', 'titleAr', 'رؤيتنا');
  const titleEn = useContentValue('about_vision', 'titleEn', 'Our Vision');
  const textAr = useContentValue('about_vision', 'textAr', 'أن نصبح نموذجاً رائداً لخدمات الدعم الرقمي في التعليم العالي، بما يتماشى مع أهداف جامعة الملك سعود والرؤية الأوسع للتحول الرقمي في المملكة.');
  const textEn = useContentValue('about_vision', 'textEn', 'To become a leading model for digital support services in higher education, aligning with KSU\'s goals and the broader vision of digital transformation in the Kingdom.');

  return (
    <div className="relative w-full" data-name="Our_Vision_section">
      <div className="flex flex-row items-center justify-center w-full">
        <div className={`content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[32px] items-center justify-center w-full px-[20px] md:px-[40px] lg:px-[72px] py-[40px] md:py-[60px] lg:py-[32px] relative ${
          language === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}>
          <div className="w-full md:basis-[60%] lg:basis-0 flex flex-row grow items-center shrink-0">
            <Content 
              titleAr={titleAr}
              titleEn={titleEn}
              textAr={textAr}
              textEn={textEn}
            />
          </div>
          <Image />
        </div>
      </div>
    </div>
  );
}
