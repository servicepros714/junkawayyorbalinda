import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Pricing from '../components/Pricing.jsx';
import Reviews from '../components/Reviews.jsx';
import About from '../components/About.jsx';
import ServiceAreas from '../components/ServiceAreas.jsx';
import FAQ from '../components/FAQ.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <BeforeAfter />
      <Pricing />
      <Reviews />
      <About />
      <ServiceAreas />
      <FAQ />
      <CtaBand />
    </>
  );
}
