
import React from 'react';
import { MapPin, Phone, Instagram, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const address = "Av. Aleixo Alves de Souza, 1582 - Loja 02 - Nova Palhoça, Palhoça - SC, 88131-560";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Residencial Mercury Av. Aleixo Alves de Souza 1582 Palhoça")}`;

  return (
    <section id="contato" className="bg-cream py-32 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute -right-24 top-0 font-serif text-[20vw] text-gold/5 pointer-events-none select-none italic">
        Mercury
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2 reveal-section">
            <div className="mb-12">
              <h4 className="font-serif text-gold text-xl italic mb-4">Visite nossa loja</h4>
              <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4 leading-tight">Um espaço pensado para você.</h2>
              <div className="w-20 h-[2px] bg-gold" />
            </div>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-widest text-espresso mb-2">Localização</h5>
                  <p className="text-lg font-light text-espresso/80">
                    Residencial Mercury<br />
                    Av. Aleixo Alves de Souza, 1582 - Loja 02<br />
                    Nova Palhoça, Palhoça - SC, 88131-560
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-widest text-espresso mb-2">Horário de Atendimento</h5>
                  <p className="text-lg font-light text-espresso/80">
                    Segunda a Sexta: 09h-12h | 14h-19h<br />
                    Sábado: 09h-12h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-widest text-espresso mb-2">Contato Direto</h5>
                  <p className="text-lg font-light text-espresso/80">
                    +55 48 99122-0453
                  </p>
                  <div className="flex space-x-6 mt-6">
                    <a href="https://www.instagram.com/benditaboutique._/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-espresso transition-colors p-2 border border-gold/20 rounded-full hover:bg-gold/10">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="mailto:contato@benditaboutique.com.br" className="text-gold hover:text-espresso transition-colors p-2 border border-gold/20 rounded-full hover:bg-gold/10">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://api.whatsapp.com/send/?phone=5548991220453&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-16 bg-espresso text-cream px-10 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500 shadow-2xl hover:-translate-y-1 transform"
            >
              Agendar Consultoria VIP
            </a>
          </div>

          {/* Map Side - Atualizado com endereço exato */}
          <div className="w-full lg:w-1/2 reveal-section">
            <div className="bg-espresso h-full min-h-[500px] w-full relative overflow-hidden group shadow-2xl transition-all duration-1000 border border-gold/20 rounded-sm">
              <iframe
                title="Google Maps Bendita Boutique - Av. Aleixo Alves de Souza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2428514936394!2d-48.6797184241038!3d-27.64303497621948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737599023023b%3A0xe54146f498960096!2sAv.%20Aleixo%20Alves%20de%20Souza%2C%201582%20-%20Nova%20Palho%C3%A7a%2C%20Palho%C3%A7a%20-%20SC%2C%2088131-560!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-90 transition-opacity duration-700"
              ></iframe>
              
              {/* Overlay Decorativo */}
              <div className="absolute inset-0 pointer-events-none border-[1px] border-gold/10 bg-espresso/5 mix-blend-multiply" />
              
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <div className="bg-espresso/90 backdrop-blur-md p-4 border border-gold/30 shadow-2xl">
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Residencial Mercury</p>
                  <p className="text-cream text-[8px] uppercase tracking-widest opacity-60">Loja 02 - Nova Palhoça</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 z-20">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gold text-espresso px-6 py-2 text-[10px] uppercase tracking-widest font-bold shadow-xl hover:bg-cream transition-all duration-300"
                >
                  Abrir Rota Direta
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
