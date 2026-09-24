import React from 'react';
import { ShieldCheck, Cpu, Zap, Award } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F58220]" />,
      title: 'SEGURANÇA',
      subtitle: 'Proteção e controle na operação',
      description:
        'Cargas com apólices ativas de seguro (RCTR-C e RCF-DC), gerenciamento de risco preventivo e procedimentos rigorosos de viagem.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#F58220]" />,
      title: 'TECNOLOGIA',
      subtitle: 'Informação e acompanhamento',
      description:
        'Telemetria via satélite, emissão fiscal ágil de CTe e manifesto, e comunicação direta com a equipe de tráfego.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#F58220]" />,
      title: 'AGILIDADE',
      subtitle: 'Processos sem atrito operacional',
      description:
        'Localização no entroncamento das BR-116 e BR-330 em Jequié, garantindo saídas estruturadas e menor tempo de trânsito.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#F58220]" />,
      title: 'CONFIABILIDADE',
      subtitle: 'Compromisso em cada entrega',
      description:
        'Empresa regularizada com registro ANTT RNTRC (056478766), CNPJ ativo e alinhamento transparente de prazos e valores.',
    },
  ];

  return (
    <section className="py-12 bg-[#090e18] border-y border-white/5 relative" aria-label="Diferenciais operacionais da SolForte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-black text-[#F58220] uppercase tracking-wider mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm font-bold text-white mb-2">
                {pillar.subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
