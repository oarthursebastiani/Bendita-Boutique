
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
      caption: 'Vestido Seda Champagne',
      desc: 'Editorial Verão 2024'
    },
    {
      url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800',
      caption: 'Tailleur Off-White',
      desc: 'Linha Executiva Premium'
    },
    {
      url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
      caption: 'Acessórios Dourados',
      desc: 'Curadoria de Detalhes'
    },
    {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      caption: 'Look Casual Chic',
      desc: 'Conforto e Elegância'
    }
  ];

  return (
    <section id="galeria" className="bg-espresso py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 reveal-section">
          <p className="text-gold text-xs uppercase tracking-[0.4em] font-semibold mb-4">Editorial de Estilo</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream text-center">Coleção Bendita</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden reveal-section ${idx % 2 === 1 ? 'lg:mt-12' : ''}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                <p className="text-gold text-[10px] uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.desc}
                </p>
                <h4 className="font-serif text-2xl text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.caption}
                </h4>
                <div className="w-10 h-[1px] bg-gold mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center reveal-section">
          <a 
            href="https://www.instagram.com/benditaboutique._/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-12 py-4 text-xs uppercase tracking-widest hover:bg-gold hover:text-espresso transition-all duration-500"
          >
            Ver Mais Looks no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
