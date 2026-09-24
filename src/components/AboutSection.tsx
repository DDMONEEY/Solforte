import React from 'react';
import { Target, ShieldCheck, HeartHandshake, TrendingUp, MapPin, Building2, FileCheck, Truck, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#090e18] border-t border-white/5 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#F58220]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Nossa Identidade & Propósito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nossa <span className="text-gradient-orange">História</span> & Compromisso
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Conheça o propósito e os valores sólidos que movem cada quilômetro percorrido pela SolForte Transportes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Modern Corporate Identity Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F58220]/30 to-[#E05D00]/10 rounded-3xl blur-xl" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-[#0c1220] via-[#070b12] to-[#070b12] p-8 sm:p-9">
                
                {/* Visual Header with Emblem */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                  <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    <Logo variant="dark" size="lg" showText={false} />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    SOLFORTE TRANSPORTES
                  </h3>
                  <span className="text-xs text-[#F58220] uppercase font-bold tracking-widest mt-1">
                    Transporte Rodoviário de Cargas
                  </span>
                  <p className="text-xs text-slate-400 mt-2">
                    Sede Estratégica em Jequié • Bahia
                  </p>
                </div>

                {/* Key Operational Highlights */}
                <div className="py-6 space-y-3.5 border-b border-white/10 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#F58220]" />
                      Operação Rodoviária
                    </span>
                    <strong className="text-white font-semibold">Carga Lotação & Fracionada</strong>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#F58220]" />
                      Entroncamento
                    </span>
                    <strong className="text-white font-semibold">BR-116 e BR-330</strong>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Apólice de Carga
                    </span>
                    <strong className="text-emerald-400 font-semibold">RCTR-C e RCF-DC Ativos</strong>
                  </div>
                </div>

                {/* Official Certification Footer */}
                <div className="pt-6">
                  <div className="p-3.5 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/25 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F58220]/20 text-[#F58220] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#FF9D43] uppercase font-bold tracking-wider">
                        Empresa Regularizada
                      </p>
                      <p className="text-xs font-mono text-slate-200">
                        CNPJ: 53.119.407/0001-07
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        Registro ANTT: 056478766
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Mission and Authentic Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* The Authentic History Quote Box */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0c1220]/90 to-[#070b12] border border-[#F58220]/30 shadow-xl mb-8">
              <span className="text-5xl font-serif text-[#F58220]/30 absolute top-3 left-4 select-none">“</span>
              <p className="text-lg sm:text-xl text-slate-200 font-medium italic relative z-10 leading-relaxed pt-2 pl-4">
                A SolForte Transportes surgiu devido à necessidade do mercado em uma transportadora que seja <span className="text-[#FF9D43] font-bold not-italic">ágil e eficaz</span>, para atender as necessidades dos nossos clientes de forma <span className="text-[#FF9D43] font-bold not-italic">segura, com honestidade e seriedade</span>, visando alinhar custos e benefícios para nossos parceiros em cada entrega.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Diretoria Executiva • SolForte Transportes</span>
                <span className="font-mono text-[#F58220]">Jequié • Bahia</span>
              </div>
            </div>

            {/* Strategic Location Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F58220]" />
                Localização Estratégica no Coração Rodoviário da Bahia
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Situada estrategicamente em <strong>Jequié</strong>, a “Cidade Sol”, a SolForte está no entroncamento viário mais importante que conecta o Norte e Nordeste às regiões Sudeste e Sul do Brasil (através das rodovias federais <strong>BR-116</strong> e <strong>BR-330</strong>). Isso nos permite oferecer tempos de trânsito otimizados, menor quilometragem ociosa e saídas diárias ágeis.
              </p>
            </div>

            {/* Accreditation Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <FileCheck className="w-5 h-5 text-[#F58220] mx-auto mb-1.5" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Registro ANTT</p>
                <p className="text-xs font-mono font-bold text-white">056478766</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Building2 className="w-5 h-5 text-[#F58220] mx-auto mb-1.5" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">CNPJ Oficial</p>
                <p className="text-xs font-mono font-bold text-white">53.119.407/0001-07</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Situação Cadastral</p>
                <p className="text-xs font-bold text-emerald-400">Regular & Ativa</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Agilidade & Eficácia</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cumprimento rigoroso dos prazos acordados, planejamento inteligente de rotas e despacho rápido de cargas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Honestidade & Seriedade</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transparência absoluta do primeiro contato ao comprovante de entrega. Parcerias sólidas baseadas na confiança mútua.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Segurança Rigorosa</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Veículos monitorados via satélite, telemetria constante, gerenciamento de risco e seguro total da carga.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Custo & Benefício Real</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tarifas competitivas e justas, proporcionando máxima rentabilidade e eficiência para o fluxo logístico da sua empresa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
