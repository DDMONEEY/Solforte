import React from 'react';
import { ArrowRight, Search, ShieldCheck, MapPin, Truck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const handleQuoteClick = () => {
    trackConversionEvent('click_quote_cta', { location: 'hero_primary' });
    onOpenQuoteModal();
  };

  const handleTrackingClick = () => {
    trackConversionEvent('click_tracking_cta', { location: 'hero_secondary' });
    const trackingElem = document.getElementById('rastreamento');
    if (trackingElem) {
      trackingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-[#F58220]/15 via-[#F58220]/5 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-24 right-5 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-impact Headings */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Real Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
              <span>Matriz em Jequié / BA • Entroncamento Rodoviário BR-116 e BR-330</span>
            </div>

            {/* Conceptual Headline (Requirement 5) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.15] mb-6">
              Transporte de cargas com{' '}
              <span className="text-gradient-orange">segurança</span>, tecnologia e{' '}
              <span className="text-gradient-orange">previsibilidade</span>.
            </h1>

            {/* Subheadline B2B */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              A <strong className="text-white font-semibold">SolForte Transportes</strong> conecta indústrias, distribuidores e comércios da Bahia aos principais centros do país com frota monitorada, apólices de seguro ativas e atendimento comercial direto.
            </p>

            {/* Credibility Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>ANTT RNTRC Regularizado (056478766)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Apólice de Seguro de Carga RCTR-C & RCF-DC</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Carga Lotação (Exclusiva) e Carga Fracionada</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Telemetria e Rastreamento Satelital 24 Horas</span>
              </div>
            </div>

            {/* Conversion Actions (Requirement 3 & 5: CTA 1 and CTA 2) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F58220] via-[#fa8b2a] to-[#d96b0b] hover:from-[#ff9336] hover:to-[#ea680b] text-white px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Solicitar cotação de transporte"
              >
                <span>SOLICITAR COTAÇÃO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleTrackingClick}
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-7 py-4 rounded-xl font-bold text-sm sm:text-base transition-all hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Acessar campo de rastreamento de carga"
              >
                <Search className="w-4 h-4 text-[#F58220]" />
                <span>RASTREAR CARGA</span>
              </button>
            </div>

            {/* Emergency Hotline note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Plantão Comercial & Tráfego em Jequié: </span>
              <a
                href="tel:7330476129"
                onClick={() => trackConversionEvent('click_phone', { source: 'hero_caption' })}
                className="text-white hover:text-[#F58220] font-semibold transition-colors underline decoration-white/20"
              >
                (73) 3047-6129
              </a>
            </div>

          </div>

          {/* Right Column: High-End Corporate Logistics Architecture Display */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#F58220]/40 to-[#E05D00]/10 rounded-3xl blur-xl opacity-60" />
              
              <div className="relative rounded-3xl bg-[#0c1220] border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Tech Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        SolForte Hub Integrado
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Painel Operacional de Despacho
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[11px] font-bold">
                    Operação Regular
                  </span>
                </div>

                {/* Operations Diagram */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#F58220]" />
                      <div>
                        <span className="text-[11px] text-slate-400 block">Hub Central Rodoviário</span>
                        <strong className="text-sm text-white">Jequié / Bahia (Avenida Lions Club, 54)</strong>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#F58220] font-bold">BR-116 / 330</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-slate-400 block mb-1">Modalidades</span>
                      <strong className="text-xs text-white block">Lotação & Fracionada</strong>
                      <span className="text-[10px] text-emerald-400 mt-1 inline-block">Frota Monitorada</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-slate-400 block mb-1">Segurança Financeira</span>
                      <strong className="text-xs text-white block">Apólices Ativas</strong>
                      <span className="text-[10px] text-slate-400 mt-1 inline-block">RCTR-C e RCF-DC</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">CNPJ: 53.119.407/0001-07</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">ANTT: 056478766</span>
                  </div>
                </div>

                {/* Quick Action Trigger inside Card */}
                <button
                  onClick={handleQuoteClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#F58220] hover:bg-[#ff8f2e] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all group"
                >
                  <span>Calcular Cotação para sua Carga</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
