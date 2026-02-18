
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BrandDetail from './components/BrandDetail';
import SizeGuide from './components/SizeGuide';
import FAQ from './components/FAQ';
import ReturnPolicy from './components/ReturnPolicy';
import ShippingInfo from './components/ShippingInfo';

gsap.registerPlugin(ScrollTrigger);

type View = 'home' | 'brand' | 'size-guide' | 'faq' | 'returns' | 'shipping';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    if (view === 'home') {
      // Reveal animations for all sections on home view
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [view]);

  const transitionTo = (newView: View, brandName: string | null = null) => {
    gsap.to('main', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setView(newView);
        setSelectedBrand(brandName);
        gsap.to('main', { opacity: 1, duration: 0.5 });
        window.scrollTo(0, 0);
      }
    });
  };

  const handleSelectBrand = (brand: string) => transitionTo('brand', brand);
  const handleOpenSizeGuide = () => transitionTo('size-guide');
  const handleOpenFAQ = () => transitionTo('faq');
  const handleOpenReturns = () => transitionTo('returns');
  const handleOpenShipping = () => transitionTo('shipping');
  const handleBackToHome = () => transitionTo('home');

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar 
        onBrandClick={handleBackToHome} 
        isLight={['size-guide', 'faq', 'returns', 'shipping'].includes(view)} 
      />
      <main className="transition-opacity">
        {view === 'home' && (
          <>
            <Hero />
            <Brands onSelectBrand={handleSelectBrand} />
            <About />
            <Gallery />
            <Contact />
          </>
        )}
        {view === 'brand' && selectedBrand && (
          <BrandDetail brandName={selectedBrand} onBack={handleBackToHome} />
        )}
        {view === 'size-guide' && (
          <SizeGuide onBack={handleBackToHome} />
        )}
        {view === 'faq' && (
          <FAQ onBack={handleBackToHome} />
        )}
        {view === 'returns' && (
          <ReturnPolicy onBack={handleBackToHome} />
        )}
        {view === 'shipping' && (
          <ShippingInfo onBack={handleBackToHome} />
        )}
      </main>
      <Footer 
        onOpenSizeGuide={handleOpenSizeGuide}
        onOpenFAQ={handleOpenFAQ}
        onOpenReturns={handleOpenReturns}
        onOpenShipping={handleOpenShipping}
      />
    </div>
  );
};

export default App;
