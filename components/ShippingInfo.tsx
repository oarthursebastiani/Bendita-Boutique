
import React, { useEffect } from 'react';
import { ArrowLeft, Truck, Package, Clock, MapPin } from 'lucide-react';
import gsap from 'gsap';

interface ShippingInfoProps {
  onBack: () => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from('.shipping-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="bg-cream min-h-screen pt-32 pb-24 shipping-content text-espresso">
      <div className="container mx-auto px-6 lg:px-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-4 text-gold group mb-12 focus:outline-none"
        >
          <div className="p-2 border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-espresso transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Voltar à Boutique</span>
        </button>

        <div className="max-w-5xl">
          <div className="flex items-center space-x-4 mb-6">
            <Truck className="w-6 h-6 text-gold" />
            <h4 className="font-serif text-gold text-xl italic">Logística de Luxo</h4>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Prazos e <span className="italic">Entregas</span></h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            {/* Modalidade 1 */}
            <div className="bg-espresso text-cream p-10 rounded-sm border border-gold/20 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Expresso Motoboy</h3>
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Grande Florianópolis</p>
              <p className="font-light text-cream/60 leading-relaxed text-sm">
                Entrega no mesmo dia para pedidos aprovados até às 12h. Consultar taxas por região.
              </p>
            </div>

            {/* Modalidade 2 */}
            <div className="bg-white p-10 rounded-sm border border-gold/10 flex flex-col items-center text-center shadow-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-espresso">Correios SEDEX</h3>
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Todo o Brasil</p>
              <p className="font-light text-espresso/60 leading-relaxed text-sm">
                Prazo estimado de 1 a 3 dias úteis após a postagem. Acompanhamento via código de rastreio.
              </p>
            </div>

            {/* Modalidade 3 */}
            <div className="bg-white p-10 rounded-sm border border-gold/10 flex flex-col items-center text-center shadow-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-espresso">Retirada na Loja</h3>
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Nova Palhoça</p>
              <p className="font-light text-espresso/60 leading-relaxed text-sm">
                Disponível em até 2 horas após a confirmação do pagamento. Visite-nos no Residencial Mercury.
              </p>
            </div>
          </div>

          <div className="mt-24 p-12 bg-espresso text-cream border border-gold/30">
            <h4 className="font-serif text-3xl text-gold mb-8">Informações Importantes:</h4>
            <ul className="space-y-6 font-light text-cream/70">
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>O prazo de entrega começa a contar a partir da aprovação do pagamento.</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>Pedidos realizados aos finais de semana e feriados serão processados no próximo dia útil.</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>A Bendita Boutique garante o seguro de todas as postagens. Em caso de extravio confirmado pelos Correios, o cliente é integralmente reembolsado ou recebe um novo produto.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
