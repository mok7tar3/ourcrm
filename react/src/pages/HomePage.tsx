import Home from '../imports/Home';
import HeroSection from '../imports/HeroSection';
import AboutOurKsu from '../imports/AboutOurKsu';
import HowItWorksSecton from '../imports/HowItWorksSecton';
import OurNumbersSection from '../imports/OurNumbersSection';
import FaqSection from '../imports/FaqSection';
import CatSection from '../imports/CatSection';

export default function HomePage() {
  return (
    <>
      <Home />
      <div className="relative z-10">
        <HeroSection />
        <AboutOurKsu />
        <HowItWorksSecton />
        <OurNumbersSection />
        <FaqSection />
        <CatSection />
      </div>
    </>
  );
}