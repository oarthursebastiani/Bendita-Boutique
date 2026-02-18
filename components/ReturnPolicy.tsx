
import React, { useEffect } from 'react';
import { ArrowLeft, RefreshCcw, ShieldCheck, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

interface ReturnPolicyProps {
  onBack: () => void;
}

const ReturnPolicy: React.FC<ReturnPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from('.returns-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="bg-cream min-h-screen pt-32 pb-24 returns-content text-espresso">
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

        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <RefreshCcw className="w-6 h-6 text-gold" />
            <h4 className="font-serif text-gold text-xl italic">Garantia de Satisfação</h4>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Política de <span className="italic">Troca</span></h1>

          <div className="space-y-16 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-espresso text-cream p-12 rounded-sm border border-gold/20 shadow-2xl">
                <ShieldCheck className="w-10 h-10 text-gold mb-6" />
                <h3 className="font-serif text-3xl mb-6">Prazo para Troca</h3>
                <p className="font-light text-cream/70 leading-relaxed italic">
                  Você tem até 07 (sete) dias corridos após o recebimento do produto para solicitar a troca ou devolução, conforme previsto no Código de Defesa do Consumidor.
                </p>
              </div>

              <div className="bg-white p-12 rounded-sm border border-gold/10 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-gold mb-6" />
                <h3 className="font-serif text-3xl mb-6 text-espresso">Condições da Peça</h3>
                <p className="font-light text-espresso/70 leading-relaxed">
                  Para que a troca seja efetuada, a peça deve estar com a etiqueta original fixada, sem indícios de uso, lavagem ou odores, acompanhada da nota fiscal.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-espresso/80 font-light leading-loose space-y-8">
              <h2 className="font-serif text-4xl text-espresso mb-8">Como proceder:</h2>
              <ol className="list-decimal list-inside space-y-6">
                <li>Entre em contato com nossa equipe via WhatsApp informando o número do pedido e o motivo da troca.</li>
                <li>Nossa equipe enviará as instruções para postagem ou agendará a retirada em nossa loja física.</li>
                <li>Após o recebimento e análise técnica da peça, geramos um crédito para nova compra ou efetuamos o estorno do valor.</li>
              </ol>
              
              <div className="mt-12 p-8 bg-gold/5 border-l-4 border-gold italic">
                A Bendita Boutique preza pela sua total satisfação. Cada peça é conferida rigorosamente antes do envio para garantir que você receba apenas o melhor da nossa curadoria.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
