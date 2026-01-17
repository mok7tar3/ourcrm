import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { useContentValue } from '../hooks/useContent';
import svgPaths from '../imports/svg-n438f7irfo';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface FaqItem {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export default function FaqPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Load content from CMS with unique key 'faq_page'
  const titleAr = useContentValue('faq_page', 'titleAr', 'الأسئلة الشائعة');
  const titleEn = useContentValue('faq_page', 'titleEn', 'FAQ');
  const subtitleAr = useContentValue('faq_page', 'subtitleAr', 'الأسئلة المتكررة');
  const subtitleEn = useContentValue('faq_page', 'subtitleEn', 'Frequently Asked Questions.');

  // Load FAQ items from CMS with unique key 'faq_page'
  const faqItems: FaqItem[] = [
    {
      questionAr: useContentValue('faq_page', 'q1Ar', 'كم من الوقت يستغرق معالجة التذكرة؟'),
      questionEn: useContentValue('faq_page', 'q1En', 'How long does it take to process a ticket?'),
      answerAr: useContentValue('faq_page', 'a1Ar', 'عادةً ما تتم معالجة التذاكر خلال 24-48 ساعة عمل. في حالة التذاكر العاجلة، يتم التعامل معها بشكل أسرع.'),
      answerEn: useContentValue('faq_page', 'a1En', 'Tickets are typically processed within 24-48 business hours. Urgent tickets are handled faster.')
    },
    {
      questionAr: useContentValue('faq_page', 'q2Ar', 'هل يمكنني تعديل التذكرة بعد إرسالها؟'),
      questionEn: useContentValue('faq_page', 'q2En', 'Can I edit my ticket after submitting it?'),
      answerAr: useContentValue('faq_page', 'a2Ar', 'نعم، يمكنك تعديل التذكرة من خلال صفحة تتبع التذاكر قبل أن يبدأ فريق الدعم بالعمل عليها.'),
      answerEn: useContentValue('faq_page', 'a2En', 'Yes, you can edit your ticket through the ticket tracking page before the support team starts working on it.')
    },
    {
      questionAr: useContentValue('faq_page', 'q3Ar', 'هل يمكنني تقديم التذاكر خارج أوقات العمل؟'),
      questionEn: useContentValue('faq_page', 'q3En', 'Can I submit tickets outside working hours?'),
      answerAr: useContentValue('faq_page', 'a3Ar', 'نعم، يمكنك تقديم التذاكر في أي وقت. سيتم معالجتها في أول يوم عمل قادم.'),
      answerEn: useContentValue('faq_page', 'a3En', 'Yes, you can submit tickets at any time. They will be processed on the next business day.')
    },
    {
      questionAr: useContentValue('faq_page', 'q4Ar', 'كيف يمكنني تتبع تذكرتي القديمة؟'),
      questionEn: useContentValue('faq_page', 'q4En', 'How can I track my old ticket?'),
      answerAr: useContentValue('faq_page', 'a4Ar', 'استخدم رقم التذكرة أو بريدك الإلكتروني في صفحة "البحث عن تذكرة قديمة" لمتابعة حالة تذكرتك.'),
      answerEn: useContentValue('faq_page', 'a4En', 'Use your ticket number or email in the "Search Old Ticket" page to track your ticket status.')
    },
    {
      questionAr: useContentValue('faq_page', 'q5Ar', 'هل بياناتي محفوظة بشكل آمن؟'),
      questionEn: useContentValue('faq_page', 'q5En', 'Are my details kept secure?'),
      answerAr: useContentValue('faq_page', 'a5Ar', 'نعم، جميع البيانات محمية بأعلى معايير الأمان ولا يتم مشاركتها مع أي جهة خارجية.'),
      answerEn: useContentValue('faq_page', 'a5En', 'Yes, all data is protected with the highest security standards and is not shared with any third parties.')
    }
  ];

  // Filter FAQ items based on search query
  const filteredFaqItems = faqItems.filter((item) => {
    const query = searchQuery.toLowerCase();
    const questionAr = item.questionAr.toLowerCase();
    const questionEn = item.questionEn.toLowerCase();
    const answerAr = item.answerAr.toLowerCase();
    const answerEn = item.answerEn.toLowerCase();
    
    return questionAr.includes(query) || 
           questionEn.includes(query) || 
           answerAr.includes(query) || 
           answerEn.includes(query);
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredFaqItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFaqItems = filteredFaqItems.slice(startIndex, endIndex);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
    setOpenIndex(null);
  }, [searchQuery]);

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOpenIndex(null);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOpenIndex(null);
    }
  };

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div 
      className={`relative shrink-0 size-[24px] transition-transform duration-300 ${
        isOpen ? (language === 'ar' ? 'rotate-90' : '-rotate-90') : ''
      }`}
      data-name="chevron left"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron left">
          <path 
            clipRule="evenodd" 
            d={svgPaths.p28c47800} 
            fill="black" 
            fillRule="evenodd" 
            id="Vector 11 (Stroke)" 
          />
        </g>
      </svg>
    </div>
  );

  return (
    <div 
      ref={sectionRef}
      className={`bg-white relative w-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      data-name="FAQ_section"
    >
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] md:px-[40px] lg:px-[72px] py-[60px] md:py-[72px] relative w-full">
          {/* Title Container */}
          <div 
            className={`content-stretch flex flex-col gap-[8px] items-start justify-center text-center w-full transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-name="title_container"
          >
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-[32px] md:text-[40px] text-[#242524]">
                {language === 'ar' ? titleAr : titleEn}
              </h2>
            </div>
            <p className="text-[16px] md:text-[18px] text-[#6d6d6d] w-full">
              {language === 'ar' ? subtitleAr : subtitleEn}
            </p>
          </div>

          {/* Search Container */}
          <div className="content-stretch flex flex-col gap-[4px] items-center max-w-[1600px] w-full" data-name="Faq_container">
            <div className={`flex items-center w-full px-[16px] md:px-[24px] py-[16px] bg-[#f2f8ff] rounded-[8px] ${
              language === 'ar' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <Search className="size-[24px] text-[#6d6d6d]" />
              <input
                type="text"
                className={`flex-1 px-[16px] md:px-[24px] py-[8px] text-[14px] md:text-[16px] text-[#6d6d6d] leading-relaxed bg-[#f2f8ff] outline-none ${
                  language === 'ar' ? 'text-right' : 'text-left'
                }`}
                placeholder={language === 'ar' ? 'ابحث عن سؤال...' : 'Search a question...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>

          {/* FAQ Container */}
          <div className="content-stretch flex flex-col gap-[4px] items-center max-w-[1600px] w-full" data-name="Faq_container">
            {filteredFaqItems.length === 0 ? (
              <div className="w-full text-center py-[40px]">
                <p className="text-[18px] md:text-[20px] text-[#6d6d6d]">
                  {language === 'ar' ? 'لا توجد نتائج للبحث' : 'No results found'}
                </p>
              </div>
            ) : (
              paginatedFaqItems.map((item, index) => (
                <div
                  key={index}
                  className={`content-stretch flex flex-col items-start w-full transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  data-name="FAQ"
                >
                  <div 
                    className={`bg-[#f2f8ff] relative rounded-[8px] w-full overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'min-h-[56px]' : 'h-[56px]'
                    }`}
                    data-name="faq"
                  >
                    {/* Question */}
                    <div 
                      className="flex flex-row items-center w-full cursor-pointer hover:bg-[#e6f3ff] transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className={`content-stretch flex items-center justify-between px-[16px] md:px-[24px] py-[16px] w-full ${
                        language === 'ar' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <p className={`basis-0 grow text-[16px] md:text-[20px] text-[#242524] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {language === 'ar' ? item.questionAr : item.questionEn}
                        </p>
                        <ChevronIcon isOpen={openIndex === index} />
                      </div>
                    </div>

                    {/* Answer */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className={`px-[16px] md:px-[24px] pb-[16px] pt-[8px] text-[14px] md:text-[16px] text-[#6d6d6d] leading-relaxed ${
                        language === 'ar' ? 'text-right' : 'text-left'
                      }`}>
                        {language === 'ar' ? item.answerAr : item.answerEn}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Container */}
          {filteredFaqItems.length > 0 && (
            <div className="content-stretch flex flex-row items-center justify-center max-w-[1600px] w-full" data-name="Pagination_container">
              <div className="flex flex-row items-center gap-[8px]">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition-colors ${
                    currentPage === 1 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#f2f8ff] cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="size-[24px] text-[#6d6d6d]" />
                </button>
                <p className="text-[16px] md:text-[18px] text-[#6d6d6d] leading-relaxed px-[16px]">
                  {language === 'ar' 
                    ? `صفحة ${currentPage} من ${totalPages}` 
                    : `Page ${currentPage} of ${totalPages}`}
                </p>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition-colors ${
                    currentPage === totalPages 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#f2f8ff] cursor-pointer'
                  }`}
                >
                  <ChevronRight className="size-[24px] text-[#6d6d6d]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
