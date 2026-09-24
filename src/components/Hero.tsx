import React, { useState } from 'react';
import { ShieldCheck, Truck, Clock, ArrowRight, MessageCircle, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [quickOrigin, setQuickOrigin] = useState('Jequié - BA');
  const [quickDest, setQuickDest] = useState('');
  const [quickCargo, setQuickCargo] = useState('Carga Lotação / Fechada');

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const destText = quickDest.trim() || 'A definir';
    const message = encodeURIComponent(
      `Olá! Gostaria de cotar um frete com a Solforte Transportes:\n` +
      `📍 Origem: ${quickOrigin}\n` +
      `🏁 Destino: ${destText}\n` +
      `📦 Modalidade: ${quickCargo}\n` +
      `Por favor, me informe a disponibilidade e valores.`
    );
    window.open(`https://wa.me/557330476129?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#F58220]/15 via-[#F58220]/5 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Trust */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F58220]/10 border border-[#F58220]/30 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
              <span>Transportadora Rodoviária • Sede em Jequié / BA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Agilidade e Eficácia em Cada{' '}
              <span className="text-gradient-orange relative inline-block">
                Entrega
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 120 2 199 5.5" stroke="#F58220" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              A <strong className="text-white font-semibold">Solforte Transportes</strong> nasceu para atender o mercado de cargas com honestidade, segurança rigorosa e pontualidade, conectando a Bahia a todo o território nacional com a melhor relação custo-benefício.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#F58220] flex-shrink-0" />
                <span>RNTRC / ANTT Regularizado (056478766)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#F58220] flex-shrink-0" />
                <span>Monitoramento e Rastreamento 24h</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#F58220] flex-shrink-0" />
                <span>Seguro RCTR-C e RCF-DC Completo</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#F58220] flex-shrink-0" />
                <span>Cargas Lotação e Fracionadas</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F58220] via-[#fa8b2a] to-[#d96b0b] hover:from-[#ff9336] hover:to-[#ea680b] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Simular Cotação Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/557330476129"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:border-[#F58220]/40"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-medium">Cargas Seguradas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F58220]">24/7</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-medium">Monitoramento</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">Brasil</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-medium">Intermunicipal e Interestadual</p>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Interactive Simulation Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative background glow behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F58220] to-[#E05D00] rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-900/95 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                
                {/* Header of the quick quote card */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Truck className="w-5 h-5 text-[#F58220]" />
                      Cotação Expressa
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Envie os dados e receba resposta imediata
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#F58220]/15 text-[#FF9D43] text-xs font-semibold font-mono">
                    Online
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleQuickQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Cidade / Estado de Origem
                    </label>
                    <input
                      type="text"
                      value={quickOrigin}
                      onChange={(e) => setQuickOrigin(e.target.value)}
                      placeholder="Ex: Jequié - BA"
                      required
                      className="w-full bg-slate-950/80 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Cidade / Estado de Destino
                    </label>
                    <input
                      type="text"
                      value={quickDest}
                      onChange={(e) => setQuickDest(e.target.value)}
                      placeholder="Ex: Salvador, São Paulo, Belo Horizonte..."
                      required
                      className="w-full bg-slate-950/80 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tipo de Carga / Serviço
                    </label>
                    <select
                      value={quickCargo}
                      onChange={(e) => setQuickCargo(e.target.value)}
                      className="w-full bg-slate-950/80 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                    >
                      <option value="Carga Lotação / Fechada">Carga Lotação (Veículo Exclusivo)</option>
                      <option value="Carga Fracionada">Carga Fracionada (Compartilhada)</option>
                      <option value="Carga Seca Industrial">Carga Seca Geral / Industrial</option>
                      <option value="Alimentos e Bebidas">Alimentos e Mercadorias Gerais</option>
                      <option value="Frete Emergencial / Expresso">Frete Expresso com Prazo Reduzido</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9133] hover:to-[#ea680b] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 group"
                    >
                      <span>Solicitar Orçamento no WhatsApp</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#F58220]" />
                      Dados protegidos
                    </span>
                    <a
                      href="tel:7330476129"
                      className="text-slate-300 hover:text-[#F58220] transition-colors font-medium"
                    >
                      Ou ligue: (73) 3047-6129
                    </a>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

