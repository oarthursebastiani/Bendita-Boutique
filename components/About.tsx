
import React from 'react';
import { MapPin, Star, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-cream py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative reveal-section">
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior da Bendita Boutique com peças exclusivas"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            {/* Artistic border offset */}
            <div className="absolute top-8 left-8 -right-8 -bottom-8 border-[1px] border-gold/30 z-0" />
            
            {/* Floating location tag - Caixinha Marrom (Espresso) */}
            <div className="absolute bottom-8 -right-4 bg-espresso p-6 shadow-xl z-20 reveal-section border border-gold/20">
              <div className="flex items-center space-x-3 text-gold">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Palhoça, SC</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-espresso">
            <h4 className="font-serif text-gold text-xl italic mb-4">Bendita Essence</h4>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Onde a <span className="italic">sofisticação</span> encontra o conforto.</h2>
            
            <p className="text-lg font-light text-espresso/80 leading-relaxed mb-10">
              Situada no prestigiado Residencial Mercury, a Bendita Boutique nasceu para ser mais que uma loja: um refúgio de estilo. Nossa missão é oferecer uma curadoria impecável de moda feminina que celebra a individualidade de cada mulher com peças que transcendem tendências passageiras.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold transition-colors duration-300">
                  <Star className="w-6 h-6 text-gold group-hover:text-cream" />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Curadoria Premium</h5>
                  <p className="text-sm font-light text-espresso/70">Seleção rigorosa das marcas mais desejadas do Brasil.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-gold group-hover:text-cream" />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Atendimento VIP</h5>
                  <p className="text-sm font-light text-espresso/70">Consultoria de estilo personalizada em um ambiente acolhedor.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 border-b-2 border-gold pb-2 text-espresso font-bold text-xs uppercase tracking-[0.3em] hover:text-gold transition-all duration-300">
              Conheça nossa história completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
