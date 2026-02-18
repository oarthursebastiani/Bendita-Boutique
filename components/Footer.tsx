
import React from 'react';
import { Instagram, CreditCard, Package, QrCode, FileText, HelpCircle, RefreshCcw, User, ClipboardList, Ruler, Bike, Truck } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide?: () => void;
  onOpenFAQ?: () => void;
  onOpenReturns?: () => void;
  onOpenShipping?: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onOpenSizeGuide, 
  onOpenFAQ, 
  onOpenReturns, 
  onOpenShipping 
}) => {
  return (
    <footer className="bg-espresso pt-24 pb-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Logo e Social */}
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tighter mb-4">
              BENDITA <span className="text-gold italic">BOUTIQUE</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
            <a 
              href="https://www.instagram.com/benditaboutique._/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-espresso transition-all duration-500 group"
            >
              <Instagram className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-12 mb-20">
            {/* Navegação */}
            <div className="text-center md:text-left">
              <h5 className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6">Navegação</h5>
              <ul className="space-y-4 text-cream/50 text-xs uppercase tracking-widest font-bold">
                <li><a href="#colecoes" className="hover:text-gold transition-colors">NOVA COLEÇÃO</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">MAIS VENDIDOS</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">OUTLET LUXURY</a></li>
              </ul>
            </div>

            {/* Suporte e Institucional */}
            <div className="text-center md:text-left">
              <h5 className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6">Institucional</h5>
              <ul className="space-y-4 text-cream/50 text-xs uppercase tracking-widest font-bold">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <HelpCircle className="w-3 h-3 text-gold/50" />
                  <button onClick={onOpenFAQ} className="hover:text-gold transition-colors text-left uppercase font-bold">DÚVIDAS FREQUENTES</button>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <RefreshCcw className="w-3 h-3 text-gold/50" />
                  <button onClick={onOpenReturns} className="hover:text-gold transition-colors text-left uppercase font-bold">POLÍTICA DE TROCA E DEVOLUÇÃO</button>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Truck className="w-3 h-3 text-gold/50" />
                  <button onClick={onOpenShipping} className="hover:text-gold transition-colors text-left uppercase font-bold">PRAZOS E ENTREGAS</button>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Ruler className="w-3 h-3 text-gold/50" />
                  <button 
                    onClick={onOpenSizeGuide}
                    className="hover:text-gold transition-colors focus:outline-none uppercase font-bold"
                  >
                    GUIA DE MEDIDAS
                  </button>
                </li>
              </ul>
            </div>

            {/* Minha Conta */}
            <div className="text-center md:text-left">
              <h5 className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6">Minha Conta</h5>
              <ul className="space-y-4 text-cream/50 text-xs uppercase tracking-widest font-bold">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <ClipboardList className="w-3 h-3 text-gold/50" />
                  <a href="#" className="hover:text-gold transition-colors">MEUS PEDIDOS</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <User className="w-3 h-3 text-gold/50" />
                  <a href="#" className="hover:text-gold transition-colors">CADASTRE-SE</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Privée */}
            <div className="text-center lg:text-right">
              <h5 className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6">Newsletter Privée</h5>
              <p className="text-cream/40 text-xs mb-6 max-w-xs mx-auto lg:ml-auto uppercase tracking-tighter">Receba lançamentos exclusivos e convites VIP diretamente em seu e-mail.</p>
              <div className="flex max-w-sm mx-auto lg:ml-auto">
                <input 
                  type="email" 
                  placeholder="SEU MELHOR E-MAIL..." 
                  className="bg-transparent border-b border-gold/30 py-2 w-full text-cream text-sm focus:outline-none focus:border-gold transition-all placeholder:text-cream/20"
                />
                <button className="text-gold text-xs uppercase tracking-widest ml-4 hover:opacity-70 transition-all font-bold">Assinar</button>
              </div>
            </div>
          </div>

          {/* Formas de Pagamento e Entrega */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-y border-gold/10 mb-12">
            
            {/* Pagamento com Cores Originais */}
            <div className="flex flex-col items-center md:items-start">
              <h6 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Formas de Pagamento</h6>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                
                {/* Mastercard */}
                <div className="bg-white/90 p-1.5 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-full h-full"><circle cx="8" cy="12" r="7" fill="#EB001B" opacity="0.9"/><circle cx="16" cy="12" r="7" fill="#FF5F00" opacity="0.9"/><path d="M12 7.1c-1.8 1.1-3 3.1-3 5.4 0 2.3 1.2 4.3 3 5.4 1.8-1.1 3-3.1 3-5.4 0-2.3-1.2-4.3-3-5.4z" fill="#FF5F00"/></svg>
                </div>
                
                {/* Visa */}
                <div className="bg-white/90 p-1.5 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <span className="text-[10px] font-black italic text-[#1A1F71]">VISA</span>
                </div>

                {/* Amex */}
                <div className="bg-[#0070D1] p-1 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <span className="text-[7px] font-bold text-white uppercase tracking-tighter">Amex</span>
                </div>

                {/* Diners */}
                <div className="bg-white/90 p-1 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <span className="text-[6px] font-bold text-[#0079BE] leading-tight text-center">DINERS CLUB</span>
                </div>

                {/* Elo */}
                <div className="bg-white/90 p-1 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm overflow-hidden relative">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/3 h-full bg-[#E61C1D]"></div>
                    <div className="w-1/3 h-full bg-[#005A9E]"></div>
                    <div className="w-1/3 h-full bg-[#FFD100]"></div>
                  </div>
                  <span className="relative z-10 text-[8px] font-black text-white italic">elo</span>
                </div>

                {/* Hipercard */}
                <div className="bg-[#B31312] p-1 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <span className="text-[7px] font-bold text-white uppercase italic">Hiper</span>
                </div>

                {/* Discover */}
                <div className="bg-white/90 p-1 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <span className="text-[7px] font-bold text-[#FF6000] tracking-tighter uppercase">Discover</span>
                </div>

                {/* Pix - Melhorado com logo oficial */}
                <div className="bg-white/90 p-1.5 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                   <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.7 85.3L15.4 59.1C13.5 57.2 13.5 54.1 15.4 52.2L41.7 26C43.6 24.1 46.7 24.1 48.6 26L74.9 52.3C76.8 54.2 76.8 57.3 74.9 59.2L48.6 85.4C46.7 87.3 43.6 87.3 41.7 85.3Z" fill="#32BCAD"/>
                    <path d="M54.1 31.5L74.9 52.3C76.8 54.2 76.8 57.3 74.9 59.2L54.1 80V70.8L65.5 59.4C67.4 57.5 67.4 54.4 65.5 52.5L54.1 41.1V31.5ZM45.9 31.5V41.1L34.5 52.5C32.6 54.4 32.6 57.5 34.5 59.4L45.9 70.8V80L25.1 59.2C23.2 57.3 23.2 54.2 25.1 52.3L45.9 31.5Z" fill="white"/>
                  </svg>
                </div>

                {/* Boleto */}
                <div className="bg-white/90 p-1.5 rounded-sm flex items-center justify-center w-10 h-7 shadow-sm">
                  <FileText className="w-4 h-4 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Entrega com Logos Oficiais */}
            <div className="flex flex-col items-center md:items-end">
              <h6 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Formas de Entrega</h6>
              <div className="flex flex-wrap justify-center md:justify-end gap-8 items-center">
                
                {/* Correios */}
                <div className="flex flex-col items-center group">
                   <div className="bg-[#FFE600] p-1 rounded-sm border border-[#00418F] mb-1">
                      <span className="text-[8px] font-black text-[#00418F] italic px-1">CORREIOS</span>
                   </div>
                   <span className="text-[8px] uppercase tracking-widest text-cream/40">Oficial</span>
                </div>

                {/* SEDEX */}
                <div className="flex flex-col items-center group">
                  <div className="bg-[#00418F] px-2 py-0.5 rounded-sm mb-1">
                    <span className="text-[8px] font-black text-[#FFE600] italic">SEDEX</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-cream/40">Expresso</span>
                </div>

                {/* PAC */}
                <div className="flex flex-col items-center group">
                  <div className="border border-cream/30 px-2 py-0.5 rounded-sm mb-1 bg-white/5">
                    <span className="text-[8px] font-black text-cream uppercase">PAC</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-cream/40">Econômico</span>
                </div>

                {/* Motoboy - AGORA COM MOTO */}
                <div className="flex flex-col items-center group">
                  <div className="bg-gold/10 p-1.5 rounded-full mb-1 group-hover:bg-gold transition-colors">
                    <Bike className="w-5 h-5 text-gold group-hover:text-espresso" />
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-cream/40">Motoboy</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center w-full items-center text-[10px] uppercase tracking-[0.2em] text-cream/30 space-y-4">
            <p>&copy; 2026 Bendita Boutique. Todos os direitos reservados.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
