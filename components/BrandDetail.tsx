
import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  desc: string;
}

interface BrandData {
  [key: string]: {
    heroImage: string;
    description: string;
    products: Product[];
  };
}

const brandData: BrandData = {
  'FARM': {
    heroImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1600',
    description: 'A vibração do Rio em estampas exclusivas e cores solares que celebram a alegria feminina.',
    products: [
      { id: 1, name: 'Vestido Midi Floral Rio', price: 'R$ 589,00', desc: 'Estampa exclusiva Farm com caimento leve e cores vibrantes.', image: 'https://images.unsplash.com/photo-1572804013307-9977c11f9d37?auto=format&fit=crop&q=80&w=800' },
      { id: 2, name: 'Macacão Pantalona Selva', price: 'R$ 640,00', desc: 'Conforto e sofisticação em viscose premium de alta qualidade.', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=800' },
      { id: 3, name: 'Kimono Bordado Tropical', price: 'R$ 498,00', desc: 'A peça icônica que define o look boho-chic da marca.', image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=800' },
      { id: 101, name: 'Top Cropped Estampado', price: 'R$ 229,00', desc: 'Fresco e moderno, ideal para dias ensolarados.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
      { id: 102, name: 'Saia Longa Rainbow', price: 'R$ 449,00', desc: 'Fluidez e cores em uma modelagem impecável.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' },
      { id: 103, name: 'Blusa de Linho Patchwork', price: 'R$ 359,00', desc: 'O toque rústico do linho com o DNA Farm.', image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'ANIMALE': {
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600',
    description: 'Sofisticação urbana, cortes precisos e materiais nobres para a mulher contemporânea.',
    products: [
      { id: 4, name: 'Camisa de Seda Pura', price: 'R$ 1.150,00', desc: 'Minimalismo luxuoso com acabamento impecável em seda.', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
      { id: 5, name: 'Calça Alfaiataria Slim', price: 'R$ 890,00', desc: 'Corte clássico que valoriza a silhueta no ambiente business.', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' },
      { id: 6, name: 'Vestido Tubinho Noir', price: 'R$ 1.350,00', desc: 'Elegância absoluta com design atemporal e luxuoso.', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800' },
      { id: 104, name: 'Blazer Estruturado Off', price: 'R$ 1.890,00', desc: 'O poder da alfaiataria premium em tons claros.', image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=800' },
      { id: 105, name: 'Body de Tule Drapeado', price: 'R$ 590,00', desc: 'Sensualidade discreta com texturas sofisticadas.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800' },
      { id: 106, name: 'Saia Lápis em Couro', price: 'R$ 2.400,00', desc: 'Luxo tátil em couro legítimo de extrema maciez.', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'CANTÃO': {
    heroImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=1600',
    description: 'O bem-viver em peças leves, fluidas e com alma solar para dias de liberdade.',
    products: [
      { id: 7, name: 'Bata Bordada Boho', price: 'R$ 420,00', desc: 'Detalhes artesanais em tecidos naturais e arejados.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
      { id: 8, name: 'Saia Midi Evasê', price: 'R$ 380,00', desc: 'Leveza e movimento com estamparia delicada.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' },
      { id: 9, name: 'Jaqueta Jeans Soft', price: 'R$ 560,00', desc: 'O denim essencial com toque macio e lavagem clara.', image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80&w=800' },
      { id: 107, name: 'Pantacourt de Linho', price: 'R$ 480,00', desc: 'Frescor e elegância casual para o dia a dia.', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800' },
      { id: 108, name: 'Tricot Verão Soft', price: 'R$ 390,00', desc: 'Trama aberta e delicada em fios de algodão.', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=800' },
      { id: 109, name: 'Vestido Chemise Sky', price: 'R$ 550,00', desc: 'Modelagem clássica com conforto absoluto.', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'COLCCI': {
    heroImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1600',
    description: 'Atitude, jeanswear de alta performance e tendências globais com DNA brasileiro.',
    products: [
      { id: 10, name: 'Jeans Diamond Fit', price: 'R$ 499,00', desc: 'Tecnologia que molda e valoriza o corpo com conforto.', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800' },
      { id: 11, name: 'T-Shirt Logo Glam', price: 'R$ 280,00', desc: 'Algodão de alta qualidade com aplicações exclusivas.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
      { id: 12, name: 'Vestido Justo Power', price: 'R$ 720,00', desc: 'Sensualidade elegante para momentos inesquecíveis.', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800' },
      { id: 110, name: 'Jaqueta Puffer Shine', price: 'R$ 890,00', desc: 'Volume e brilho para looks urbanos impactantes.', image: 'https://images.unsplash.com/photo-1539533102307-051c0cb81e7a?auto=format&fit=crop&q=80&w=800' },
      { id: 111, name: 'Shorts Denim High', price: 'R$ 320,00', desc: 'Cintura alta e lavagem vintage premium.', image: 'https://images.unsplash.com/photo-1591348113524-7389ed041772?auto=format&fit=crop&q=80&w=800' },
      { id: 112, name: 'Top Corselet Denim', price: 'R$ 450,00', desc: 'Estrutura e estilo em uma peça única.', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'MORENA ROSA': {
    heroImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1600',
    description: 'Feminilidade vibrante e sofisticada, celebrando a beleza em cada curva.',
    products: [
      { id: 13, name: 'Biquíni Gold Shine', price: 'R$ 450,00', desc: 'Beachwear de luxo com detalhes banhados e brilho sutil.', image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=80&w=800' },
      { id: 14, name: 'Saída de Praia em Renda', price: 'R$ 680,00', desc: 'Trabalho artesanal delicado para um resort look impecável.', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800' },
      { id: 15, name: 'Vestido Longo Estampado', price: 'R$ 980,00', desc: 'Fluidez, leveza e sofisticação para noites de verão.', image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80&w=800' },
      { id: 113, name: 'Maiô Cut-Out Chic', price: 'R$ 520,00', desc: 'Design anatômico que esculpe a silhueta feminina.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
      { id: 114, name: 'Pantacourt Seda Sunset', price: 'R$ 890,00', desc: 'Cores do entardecer em um tecido nobre.', image: 'https://images.unsplash.com/photo-1550630993-c73956274941?auto=format&fit=crop&q=80&w=800' },
      { id: 115, name: 'Top Cropped Rendado', price: 'R$ 380,00', desc: 'Romantismo e sofisticação em cada detalhe.', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'SCHUTZ': {
    heroImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1600',
    description: 'Design inovador e desejo imediato. Acessórios que transformam qualquer look.',
    products: [
      { id: 16, name: 'Scarpin Classic Leather', price: 'R$ 620,00', desc: 'O clássico indispensável com couro premium e conforto.', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800' },
      { id: 17, name: 'Bolsa Crossbody Gold', price: 'R$ 1.250,00', desc: 'Couro legítimo com acabamento de alta joalheria nos metais.', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800' },
      { id: 18, name: 'Sandália Minimal Block', price: 'R$ 590,00', desc: 'Design geométrico contemporâneo com estabilidade e estilo.', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800' },
      { id: 116, name: 'Bota Over the Knee', price: 'R$ 1.490,00', desc: 'Ousadia e sofisticação em camurça de alta qualidade.', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800' },
      { id: 117, name: 'Tênis Glam Walk', price: 'R$ 520,00', desc: 'O casual de luxo com detalhes metalizados.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
      { id: 118, name: 'Mochila Urban Chic', price: 'R$ 980,00', desc: 'Funcionalidade e design premium para o dia a dia.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

interface BrandDetailProps {
  brandName: string;
  onBack: () => void;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ brandName, onBack }) => {
  const data = brandData[brandName];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.from('.brand-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.product-card', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.4
    });
  }, [brandName]);

  if (!data) return null;

  return (
    <section className="bg-espresso min-h-screen pt-32 pb-24 brand-content">
      <div className="container mx-auto px-6">
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

        {/* Cabeçalho da Marca */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-24 border-b border-gold/10 pb-20">
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Curadoria Exclusive</span>
            </div>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-cream mb-8 tracking-tighter leading-none">
              {brandName}
            </h1>
            <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>
          {/* Imagem de Destaque da Marca - ULTRA LUMINOSA */}
          <div className="lg:w-1/2 w-full h-[400px] md:h-[550px] overflow-hidden shadow-[0_30px_70px_rgba(197,160,89,0.2)] relative rounded-sm border border-gold/20 bg-white">
            <img 
              src={data.heroImage} 
              className="w-full h-full object-cover transition-transform duration-1000" 
              alt={`Curadoria ${brandName} Bendita Boutique`} 
              style={{ filter: 'brightness(1.5) contrast(1.1) saturate(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent"></div>
          </div>
        </div>

        {/* Grid de Produtos - VISIBILIDADE MÁXIMA (LIGHT BOX STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.products.map((product) => (
            <div key={product.id} className="product-card group bg-espresso border border-gold/10 p-5 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_60px_rgba(197,160,89,0.15)]">
              {/* Image Container with PURE WHITE background to pop the product */}
              <div className="aspect-[3/4] overflow-hidden mb-8 relative bg-white shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  style={{ filter: 'brightness(1.8) contrast(1.1) saturate(1.2)' }} // Brilho elevado para 1.8x e saturação para vivacidade
                />
                {/* Preço com Destaque Premium */}
                <div className="absolute top-5 right-5 bg-gold text-espresso px-4 py-2 shadow-2xl border border-white/40 z-10 transform -rotate-1 group-hover:rotate-0 transition-transform">
                  <span className="font-serif text-xl font-bold tracking-tight">{product.price}</span>
                </div>
                {/* Overlay de Compra no Hover */}
                <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-espresso/80 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="flex flex-col space-y-1">
                  <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">{product.name}</h3>
                  <div className="h-[1px] w-12 bg-gold/40"></div>
                </div>
                
                <p className="text-cream/70 text-sm font-light leading-relaxed h-12 overflow-hidden italic">
                  {product.desc}
                </p>
                
                <div className="pt-4">
                  <a 
                    href={`https://api.whatsapp.com/send/?phone=5548991220453&text=Olá! Gostaria de saber mais sobre o ${product.name} da marca ${brandName}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-gold/10 border border-gold/40 text-gold px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-espresso transition-all duration-500 group shadow-xl"
                  >
                    <span>Comprar / Consultar</span>
                    <MessageCircle className="w-4 h-4 transform group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDetail;
