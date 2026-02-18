
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-part', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });
      
      gsap.from('.hero-sub', {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-btn', {
        opacity: 0,
        scale: 0.95,
        delay: 1.2,
        duration: 1,
        ease: 'power2.out',
      });
      
      // Parallax effect
      gsap.to('.hero-bg', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-espresso">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="hero-bg absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="overflow-hidden mb-4">
          <p className="hero-sub text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            Elegância em cada detalhe
          </p>
        </div>
        
        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream leading-tight mb-8 max-w-5xl">
          <span className="block hero-title-part">A Curadoria que</span>
          <span className="block italic hero-title-part text-gold">Define sua Essência</span>
        </h2>
        
        <p className="hero-sub text-cream/70 text-base md:text-xl font-light tracking-wide max-w-2xl mb-12">
          Descubra a sofisticação das melhores marcas em um só lugar. Na Bendita Boutique, viva a experiência de uma curadoria de luxo exclusiva pra você.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 hero-btn">
          <button className="group relative overflow-hidden bg-gold text-espresso font-bold text-xs uppercase tracking-[0.3em] px-10 py-5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]">
            <span className="relative z-10">Explorar Coleção</span>
            <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <button className="border border-cream/30 text-cream font-medium text-xs uppercase tracking-[0.3em] px-10 py-5 hover:bg-cream hover:text-espresso transition-all duration-500">
            Nossa História
          </button>
        </div>
      </div>

      {/* Scroll indicator - Removed "Scroll" text as requested */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <div className="w-[1px] h-12 bg-gold animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
