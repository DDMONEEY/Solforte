import React from 'react';
import { ClipboardCheck, Route, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Solicitação',
      icon: <ClipboardCheck className="w-5 h-5 text-[#F58220]" />,
      description:
        'Envio dos dados da carga (origem, destino, peso, cubagem e valor de NF) pelo nosso formulário, telefone ou WhatsApp comercial.',
    },
    {
      number: '02',
      title: 'Planejamento',
      icon: <Route className="w-5 h-5 text-[#F58220]" />,
      description:
        'Nossa equipe dimensiona o veículo adequado (lotação ou fracionado), alinha prazos reais e formaliza a cotação transparente.',
    },
    {
      number: '03',
      title: 'Coleta',
      icon: <Truck className="w-5 h-5 text-[#F58220]" />,
      description:
        'Embarque da mercadoria com conferência física minuciosa, lacre de segurança e emissão imediata de CTe e MDF-e fiscal.',
    },
    {
      number: '04',
      title: 'Transporte',
      icon: <ShieldCheck className="w-5 h-5 text-[#F58220]" />,
      description:
        'Deslocamento monitorado via telemetria satelital, com apólices de seguro RCTR-C/RCF-DC ativas e paradas em pontos credenciados.',
    },
    {
      number: '05',
      title: 'Entrega',
      icon: <CheckCircle2 className="w-5 h-5 text-[#F58220]" />,
      description:
        'Descarga no destinatário com conferência da integridade da mercadoria e disponibilização digital do canhoto assinado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Fluxo Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Como funciona a operação na <span className="text-gradient-orange">SolForte</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Processos padronizados da coleta ao comprovante final, garantindo clareza e previsibilidade em cada frete.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-white/10 z-10" />
              )}

              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#F58220] font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F58220]/10 border border-[#F58220]/25 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF9D43] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 font-medium">
                Etapa {idx + 1} de 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
