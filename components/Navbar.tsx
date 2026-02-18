
import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onBrandClick?: () => void;
  isLight?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onBrandClick, isLight = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Coleções', 
      href: '#colecoes',
      subItems: [
        { name: 'Nova Coleção', href: '#' },
        { name: 'Mais vendidos', href: '#' },
        { name: 'Outlet Luxury', href: '#' },
      ]
    },
    { name: 'A Boutique', href: '#sobre' },
    { name: 'Localização', href: 'https://maps.app.goo.gl/iz5biNoVqFTCEDWG9', external: true },
  ];

  // Cores dinâmicas para visibilidade
  const linkTextColor = isScrolled 
    ? 'text-cream/70' 
    : (isLight ? 'text-espresso/70' : 'text-cream/70');

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-espresso/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo e Nome da Marca - AGORA TODA DOURADA */}
        <div 
          onClick={onBrandClick}
          className="flex items-center space-x-5 cursor-pointer group flex-1"
        >
          {/* Monograma ᗺB Serifado Premium */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl transform group-hover:scale-105 transition-all duration-700 ease-out">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8D6E63" />
                  <stop offset="50%" stopColor="#C5A059" />
                  <stop offset="100%" stopColor="#F9F7F2" />
                </linearGradient>
              </defs>
              
              <g fill="url(#goldGradient)">
                <rect x="48.5" y="18" width="3" height="64" />
                <path d="M42 18 H58 V21 H42 Z" />
                <path d="M42 79 H58 V82 H42 Z" />
              </g>
              
              <path 
                d="M51.5 21 C74 21, 82 32, 82 41 C82 50, 72 50, 51.5 50 M51.5 50 C78 50, 86 60, 86 70 C86 80, 76 81, 51.5 81" 
                stroke="url(#goldGradient)" 
                strokeWidth="4" 
                strokeLinecap="butt"
                fill="none"
              />
              <rect x="79" y="38" width="6" height="2.5" fill="url(#goldGradient)" transform="rotate(15, 79, 38)" />
              <rect x="83" y="68" width="6" height="2.5" fill="url(#goldGradient)" transform="rotate(15, 83, 68)" />
              
              <path 
                d="M48.5 21 C26 21, 18 32, 18 41 C18 50, 28 50, 48.5 50 M48.5 50 C22 50, 14 60, 14 70 C14 80, 24 81, 48.5 81" 
                stroke="url(#goldGradient)" 
                strokeWidth="4" 
                strokeLinecap="butt"
                fill="none"
              />
              <rect x="15" y="38" width="6" height="2.5" fill="url(#goldGradient)" transform="rotate(-15, 15, 38)" />
              <rect x="11" y="68" width="6" height="2.5" fill="url(#goldGradient)" transform="rotate(-15, 11, 68)" />

              <circle cx="50" cy="50" r="1.5" fill="#F9F7F2" />
            </svg>
          </div>
          
          <div className="flex flex-col -space-y-1.5">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tighter text-gold transition-colors duration-500">
              BENDITA <span className="font-light italic">BOUTIQUE</span>
            </h1>
            <div className="flex items-center space-x-2">
              <div className="h-[1px] w-4 bg-gold/40"></div>
              <span className="text-[8px] uppercase tracking-[0.6em] text-gold/70 font-semibold">Curadoria de Luxo</span>
            </div>
          </div>
        </div>

        {/* Links do Cabeçalho Fixo com Submenu */}
        <div className="hidden md:flex items-center space-x-12 lg:space-x-20 mr-12 lg:mr-20">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav-item py-2">
              <a 
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`flex items-center space-x-1 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-medium transition-all duration-300 relative group/link ${linkTextColor} hover:text-gold`}
              >
                <span>{link.name}</span>
                {link.subItems && <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/nav-item:rotate-180" />}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover/link:w-full"></span>
              </a>

              {/* Submenu Dropdown */}
              {link.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-500 transform translate-y-2 group-hover/nav-item:translate-y-0 z-50">
                  <div className="bg-espresso border border-gold/20 shadow-2xl p-6 space-y-4">
                    {link.subItems.map((sub) => (
                      <a 
                        key={sub.name}
                        href={sub.href}
                        className="block text-[10px] uppercase tracking-[0.2em] text-cream/60 hover:text-gold transition-colors duration-300 border-l border-transparent hover:border-gold pl-3"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botão CTA Fixo */}
        <div className="flex-shrink-0">
          <a 
            href="https://api.whatsapp.com/send/?phone=5548991220453&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-tr from-gold/20 to-gold/5 border border-gold/40 text-gold px-6 lg:px-10 py-3 text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-espresso transition-all duration-500 group shadow-2xl overflow-hidden relative"
          >
            <span className="relative z-10">Consultoria VIP</span>
            <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
