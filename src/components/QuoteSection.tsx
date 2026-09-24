import React from 'react';
import { QuoteForm } from './QuoteForm';
import { Calculator, Phone, MessageCircle } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

export const QuoteSection: React.FC = () => {
  return (
    <section id="cotacao" className="py-20 md:py-28 bg-[#090e18] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Cotação Corporativa B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Solicite uma Cotação para sua <span className="text-gradient-orange">Operação</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Preencha os parâmetros da sua carga abaixo. Nossa equipe comercial analisa a viabilidade, dimensiona o frete e responde com proposta formal e prazos garantidos.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#0c1220] border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <QuoteForm />
        </div>

        {/* Quick alternative contact channels below form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Prefere enviar seu romaneio ou planilha de cargas diretamente?
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/557330476129"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('click_whatsapp', { source: 'quote_section_footer' })}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enviar via WhatsApp</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:comercial@solfortetransportes.com.br"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F58220] transition-colors"
            >
              <span>comercial@solfortetransportes.com.br</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:7330476129"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F58220] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>(73) 3047-6129</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
