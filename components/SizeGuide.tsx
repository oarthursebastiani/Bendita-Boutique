
import React, { useEffect } from 'react';
import { ArrowLeft, Ruler } from 'lucide-react';
import gsap from 'gsap';

interface SizeGuideProps {
  onBack: () => void;
}

const SizeGuide: React.FC<SizeGuideProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.from('.guide-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.measure-row', {
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5
    });
  }, []);

  const measurements = [
    { size: 'P', manequim: '36 - 38', bust: '86 - 90 cm', waist: '68 - 72 cm', hips: '94 - 98 cm' },
    { size: 'M', manequim: '38 - 40', bust: '92 - 96 cm', waist: '74 - 78 cm', hips: '100 - 104 cm' },
    { size: 'G', manequim: '40 - 42', bust: '98 - 102 cm', waist: '80 - 84 cm', hips: '106 - 110 cm' },
  ];

  return (
    <section className="bg-cream min-h-screen pt-32 pb-24 guide-content text-espresso">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Botão Voltar */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-4 text-gold group mb-12 focus:outline-none"
        >
          <div className="p-2 border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-espresso transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Voltar à Boutique</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Tabela de Medidas */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center space-x-4 mb-6">
              <Ruler className="w-6 h-6 text-gold" />
              <h4 className="font-serif text-gold text-xl italic">Fitting Guide</h4>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Guia de <span className="italic">Medidas</span></h1>
            
            <p className="text-lg font-light text-espresso/70 leading-relaxed mb-12 max-w-xl">
              Para garantir que sua curadoria Bendita Boutique vista perfeitamente, siga nossa tabela de medidas padrão. Nossas peças são selecionadas para valorizar a silhueta feminina com conforto e elegância.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="py-6 text-xs uppercase tracking-[0.3em] font-bold text-gold">Tamanho</th>
                    <th className="py-6 text-xs uppercase tracking-[0.3em] font-bold text-gold">Manequim</th>
                    <th className="py-6 text-xs uppercase tracking-[0.3em] font-bold text-gold">Busto</th>
                    <th className="py-6 text-xs uppercase tracking-[0.3em] font-bold text-gold">Cintura</th>
                    <th className="py-6 text-xs uppercase tracking-[0.3em] font-bold text-gold">Quadril</th>
                  </tr>
                </thead>
                <tbody>
                  {measurements.map((m) => (
                    <tr key={m.size} className="measure-row border-b border-gold/10 hover:bg-gold/5 transition-colors group">
                      <td className="py-8">
                        <span className="font-serif text-4xl md:text-5xl font-bold text-gold block">
                          {m.size}
                        </span>
                      </td>
                      <td className="py-8 font-sans text-sm tracking-widest text-espresso/80 font-bold">
                        {m.manequim}
                      </td>
                      <td className="py-8 font-sans text-sm tracking-widest text-espresso/60">{m.bust}</td>
                      <td className="py-8 font-sans text-sm tracking-widest text-espresso/60">{m.waist}</td>
                      <td className="py-8 font-sans text-sm tracking-widest text-espresso/60">{m.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-8 bg-espresso/5 border-l-4 border-gold">
              <p className="text-sm italic font-light">
                * Dica Bendita: Utilize uma fita métrica sem apertar demais contra o corpo para obter medidas mais precisas. Caso tenha dúvidas, nossa consultoria VIP via WhatsApp está à disposição.
              </p>
            </div>
          </div>

          {/* Imagem de Referência */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden shadow-2xl rounded-sm border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modelo com cabelos pretos e vestido azul suave"
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                  style={{ filter: 'brightness(1.05)' }}
                />
              </div>
              {/* Elemento Decorativo */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-gold/40 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold/40 -z-10"></div>
              
              <div className="absolute bottom-10 right-10 bg-cream/90 backdrop-blur-sm p-6 border border-gold/20 shadow-xl max-w-[200px]">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-2">Editorial Style</p>
                <p className="text-xs italic font-serif leading-relaxed text-espresso/80">
                  "O caimento perfeito é o segredo da elegância duradoura."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
