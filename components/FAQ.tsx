
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';

interface FAQProps {
  onBack: () => void;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gold/20 py-8 group transition-all duration-500">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h4 className="font-serif text-2xl md:text-3xl text-espresso group-hover:text-gold transition-colors">
          {question}
        </h4>
        <div className="p-2 border border-gold/20 rounded-full group-hover:bg-gold/10 transition-all">
          {isOpen ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5 text-gold" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-espresso/70 text-lg font-light leading-relaxed max-w-4xl italic">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from('.faq-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  const faqs = [
    {
      question: "Como faço para agendar uma consultoria VIP?",
      answer: "Você pode agendar sua consultoria personalizada através do nosso WhatsApp oficial ou diretamente em nossa loja física no Residencial Mercury. Nossas consultoras estão prontas para oferecer uma experiência exclusiva."
    },
    {
      question: "Quais são as marcas disponíveis na Bendita Boutique?",
      answer: "Trabalhamos com uma curadoria rigorosa das melhores marcas brasileiras, incluindo Farm, Animale, Cantão, Colcci, Morena Rosa e Schutz, entre outras exclusividades premium."
    },
    {
      question: "Vocês realizam entregas para todo o Brasil?",
      answer: "Sim! Enviamos nossas peças para todo o território nacional via Correios (PAC e SEDEX). Para a região da Grande Florianópolis, oferecemos também o serviço de entrega expressa via motoboy."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos todos os principais cartões de crédito (com parcelamento sem juros), Pix com confirmação imediata e boleto bancário."
    },
    {
      question: "É possível comprar online?",
      answer: "Sim, nossas vendas online são realizadas de forma personalizada via WhatsApp, garantindo que você receba toda a orientação sobre tamanhos e caimento antes de finalizar sua compra."
    }
  ];

  return (
    <section className="bg-cream min-h-screen pt-32 pb-24 faq-content text-espresso">
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
          <h4 className="font-serif text-gold text-xl italic mb-4">Suporte & Concierge</h4>
          <h1 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Dúvidas <span className="italic">Frequentes</span></h1>
          
          <div className="mt-16">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
