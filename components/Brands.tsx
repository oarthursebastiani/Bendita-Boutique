
import React from 'react';

interface BrandsProps {
  onSelectBrand: (brand: string) => void;
}

const Brands: React.FC<BrandsProps> = ({ onSelectBrand }) => {
  const brands = [
    'FARM', 'ANIMALE', 'CANTÃO', 'COLCCI', 'MORENA ROSA', 'SCHUTZ'
  ];

  return (
    <section id="colecoes" className="bg-espresso py-24 border-y border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 reveal-section">
          <div className="w-12 h-[1px] bg-gold mb-6" />
          <h3 className="font-serif text-3xl text-cream tracking-widest uppercase">Nossa Curadoria</h3>
          <p className="text-gold/60 text-xs tracking-widest uppercase mt-2">Toque para explorar a coleção</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <button 
              key={brand} 
              onClick={() => onSelectBrand(brand)}
              className="group cursor-pointer reveal-section outline-none"
            >
              <span className="font-sans font-bold text-xl md:text-2xl tracking-[0.25em] text-cream/40 group-hover:text-gold transition-all duration-500 group-hover:scale-110 block">
                {brand}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 block text-center">
                Explorar
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
