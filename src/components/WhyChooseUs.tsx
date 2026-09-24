import React from 'react';
import { ShieldCheck, Clock4, Users2, Gauge, CheckSquare, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentials = [
    {
      icon: <Clock4 className="w-6 h-6 text-[#F58220]" />,
      title: 'Pontualidade e Compromisso',
      description:
        'Planejamento meticuloso de rotas para assegurar que cada entrega chegue dentro da janela de horário combinada com o seu cliente.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F58220]" />,
      title: 'Segurança & Rastreamento 24h',
      description:
        'Frota com rastreador via satélite, telemetria contínua, paradas monitoradas e seguro completo RCTR-C / RCF-DC em todas as viagens.',
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#F58220]" />,
      title: 'Atendimento Próximo e Humanizado',
      description:
        'Você fala diretamente com quem resolve. Nada de filas de espera ou robôs burocráticos. Suporte direto e transparente.',
    },
    {
      icon: <Gauge className="w-6 h-6 text-[#F58220]" />,
      title: 'Agilidade Operacional',
      description:
        'Emissão rápida de documentos fiscais (CTe, MDF-e), liberação imediata de veículos e comunicação em tempo real.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-[#F58220]" />,
      title: 'Honestidade e Transparência',
      description:
        'Alinhamento total de expectativas, pesagem precisa e cotações claras sem surpresas ou taxas ocultas na fatura.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#F58220]" />,
      title: 'Custo-Benefício Real',
      description:
        'Tarifas justas e pensadas para aumentar a competitividade do seu produto no mercado final com máxima eficiência.',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Diferenciais Solforte</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que confiar sua carga à <span className="text-gradient-orange">Solforte</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Mais do que levar mercadorias de um ponto a outro, construímos parcerias de longo prazo para impulsionar os negócios dos nossos parceiros.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F58220]/10 border border-[#F58220]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F58220]/20 transition-all">
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

        {/* Quote CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-600 via-[#F58220] to-amber-600 p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Pronto para transformar sua experiência com fretes?
            </h3>
            <p className="mt-2 text-slate-900 font-medium text-sm sm:text-base">
              Converse agora com nossa equipe em Jequié e tenha uma proposta sob medida para sua carga hoje mesmo.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/557330476129"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl hover:-translate-y-0.5 transition-all text-center"
            >
              Falar com um Consultor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
