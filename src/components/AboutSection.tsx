import React from 'react';
import { Target, ShieldCheck, HeartHandshake, TrendingUp, MapPin, Building2, FileCheck, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-slate-900/50 border-t border-white/5 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#F58220]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Quem Somos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nossa <span className="text-gradient-orange">História</span> & Compromisso
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Conheça o propósito e os valores que movem cada quilômetro percorrido pela Solforte Transportes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Official Card Visual Display */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F58220]/40 to-[#E05D00]/10 rounded-3xl blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
                <img
                  src="/images/card-historia.jpg"
                  alt="História Solforte Transportes"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F58220]/20 flex items-center justify-center text-[#F58220] flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Razão Social Oficial</p>
                    <p className="text-sm font-bold text-white leading-tight">Solforte Transportes de Cargas Ltda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Authentic Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* The Authentic History Quote Box */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-[#F58220]/30 shadow-xl mb-8">
              <span className="text-5xl font-serif text-[#F58220]/30 absolute top-3 left-4 select-none">“</span>
              <p className="text-lg sm:text-xl text-slate-200 font-medium italic relative z-10 leading-relaxed pt-2 pl-4">
                A Solforte Transportes surgiu devido à necessidade do mercado em uma transportadora que seja <span className="text-[#FF9D43] font-bold not-italic">ágil e eficaz</span>, para atender as necessidades dos nossos clientes de forma <span className="text-[#FF9D43] font-bold not-italic">segura, com honestidade e seriedade</span>, visando alinhar custos e benefícios para nossos clientes em cada entrega.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Diretoria Solforte Transportes</span>
                <span className="font-mono text-[#F58220]">Jequié • Bahia</span>
              </div>
            </div>

            {/* Strategic Location Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F58220]" />
                Localização Estratégica em Jequié / BA
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Situada estrategicamente em <strong>Jequié</strong>, a “Cidade Sol”, a Solforte está no entroncamento viário das principais rodovias que ligam o Norte e Nordeste às regiões Sudeste e Sul do Brasil (como as rodovias <strong>BR-116</strong> e <strong>BR-330</strong>). Isso nos permite oferecer tempos de trânsito otimizados e saídas diárias ágeis.
              </p>
            </div>

            {/* Accreditation Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <FileCheck className="w-5 h-5 text-[#F58220] mx-auto mb-1" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Registro ANTT</p>
                <p className="text-xs font-mono font-bold text-white">056478766</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <Building2 className="w-5 h-5 text-[#F58220] mx-auto mb-1" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">CNPJ Oficial</p>
                <p className="text-xs font-mono font-bold text-white">53.119.407/0001-07</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-[#F58220] mx-auto mb-1" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Situação</p>
                <p className="text-xs font-bold text-green-400">Regular & Ativa</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Agilidade & Eficácia</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cumprimento rigoroso dos prazos acordados, planejamento inteligente de rotas e despacho rápido de cargas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Honestidade & Seriedade</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transparência absoluta do primeiro contato ao comprovante de entrega. Parcerias sólidas baseadas na confiança.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Segurança Rigorosa</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Veículos rastreados via satélite 24 horas por dia, gerenciamento de risco preventivo e seguro completo da mercadoria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Custo & Benefício</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tarifas competitivas e justas, proporcionando máxima rentabilidade e eficiência para o fluxo logístico da sua empresa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

