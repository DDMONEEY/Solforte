import React from 'react';
import { Radio, FileText, MessageSquareText, Navigation, CheckCircle2 } from 'lucide-react';

export const TechSection: React.FC = () => {
  const techPillars = [
    {
      icon: <Radio className="w-6 h-6 text-[#F58220]" />,
      title: 'Telemetria & Rastreamento Satelital',
      description:
        'Acompanhamento contínuo dos veículos em trânsito com equipamentos de telemetria homologados, permitindo visualização de paradas, velocidade e cumprimento de roteiro.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#F58220]" />,
      title: 'Emissão Fiscal Digital Ágil',
      description:
        'Sistemas integrados para emissão e liberação imediata de Conhecimento de Transporte Eletrônico (CTe) e Manifesto Eletrônico de Documentos Fiscais (MDF-e), com averbação automática da apólice de seguro.',
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-[#F58220]" />,
      title: 'Comunicação Direta de Tráfego',
      description:
        'Contato humanizado e transparente entre o embarcador e os operadores da SolForte em Jequié. Você conversa diretamente com quem gerencia o frete, sem menus infinitos de atendimento robotizado.',
    },
    {
      icon: <Navigation className="w-6 h-6 text-[#F58220]" />,
      title: 'Planejamento de Rotas e Trânsito',
      description:
        'Dimensionamento inteligente de rotas com base nos corredores da BR-116 e BR-330, minimizando desvios, reduzindo risco de avarias e otimizando a pontualidade na entrega.',
    },
  ];

  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-[#090e18] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header (Requirement 10) */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Infraestrutura Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tecnologia que acompanha sua <span className="text-gradient-orange">operação</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ferramentas reais de controle, documentação fiscal eletrônica e telemetria para garantir total previsibilidade e tranquilidade na gestão da sua carga.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9D43] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Certification / Verification Highlights */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Documentos com averbação eletrônica imediata</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Sistemas fiscais homologados SEFAZ</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Comunicação centralizada em Jequié / BA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
