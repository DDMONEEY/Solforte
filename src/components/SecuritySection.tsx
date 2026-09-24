import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, FileCheck, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPoints = [
    {
      title: 'Seguro de Cargas RCTR-C e RCF-DC',
      description:
        'Cada viagem realizada conta com averbação eletrônica de apólices ativas de seguro cobrindo eventuais acidentes e roubo/desvio de carga, assegurando estabilidade financeira para a sua operação.',
    },
    {
      title: 'Gerenciamento de Risco Preventivo (PGR)',
      description:
        'Aplicação de diretrizes rigorosas de plano de gerenciamento de risco, incluindo rastreamento via satélite, telemetria contínua e comunicação de tráfego.',
    },
    {
      title: 'Pontos de Parada Credenciados',
      description:
        'Paradas operacionais e pernoites planejados exclusivamente em postos e terminais conveniados com infraestrutura adequada e vigilância física.',
    },
    {
      title: 'Conformidade Cadastral de Veículos e Condutores',
      description:
        'Verificação formal de documentação do motorista, habilitação compatível, manutenção preventiva da frota e conformidade com as normas da ANTT e legislação de trânsito.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Arguments (Requirement 11) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Gerenciamento de Riscos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Segurança Operacional em <span className="text-gradient-orange">Cada Quilômetro</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              A proteção da sua mercadoria não se baseia em promessas, mas em procedimentos formais de prevenção, seguro regulamentado e conformidade técnica contínua.
            </p>

            <div className="space-y-6">
              {securityPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F58220]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Shield Architecture Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0c1220] border border-white/15 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <p className="text-xs font-bold text-[#F58220] uppercase tracking-wider">
                    Protocolo de Proteção
                  </p>
                  <p className="text-lg font-bold text-white mt-0.5">
                    SolForte Segurança Ativa
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Lock className="w-6 h-6" />
                </div>
              </div>

              {/* Protocol Pillars */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-5 h-5 text-[#F58220]" />
                    <span className="text-xs text-white font-semibold">Apólice RCTR-C (Acidentes)</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold">100% Avervada</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F58220]" />
                    <span className="text-xs text-white font-semibold">Apólice RCF-DC (Roubo/Desvio)</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold">Ativa</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#F58220]" />
                    <span className="text-xs text-white font-semibold">ANTT RNTRC Oficial</span>
                  </div>
                  <span className="text-xs font-mono text-white font-bold">056478766</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[#F58220]" />
                    <span className="text-xs text-white font-semibold">CNPJ Matriz Jequié/BA</span>
                  </div>
                  <span className="text-xs font-mono text-white font-bold">53.119.407/0001-07</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/25 text-center">
                <p className="text-xs text-slate-200">
                  Transparência total na comprovação de apólices e certidões para compliance corporativo da sua empresa.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
