import React from 'react';
import { Truck, Boxes, MapPin, Warehouse, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface SolutionsSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenQuoteModal }) => {
  const solutions = [
    {
      id: 'lotacao',
      icon: <Truck className="w-6 h-6 text-[#F58220]" />,
      badge: 'Veículo Exclusivo',
      title: 'Carga Lotação (Operações Dedicadas)',
      description:
        'Veículo disponibilizado exclusivamente para a mercadoria da sua empresa, garantindo rota direta do ponto de coleta ao destino final, sem paradas intermediárias e com tempo de trânsito reduzido.',
      features: [
        'Veículo dedicado e lacrado',
        'Rota direta de ponta a ponta',
        'Menor tempo de trânsito rodoviário',
        'Seguro integral e monitoramento 24h',
      ],
      idealFor: 'Indústrias, atacadistas, grandes distribuidoras e cargas de alto volume.',
    },
    {
      id: 'fracionada',
      icon: <Boxes className="w-6 h-6 text-[#F58220]" />,
      badge: 'Custo Otimizado',
      title: 'Carga Fracionada',
      description:
        'Solução que permite o envio de volumes menores agrupados com outras mercadorias compatíveis, rateando os custos de transporte e oferecendo tarifas altamente competitivas sem abrir mão da segurança.',
      features: [
        'Redução do custo logístico por remessa',
        'Conferência em cada movimentação',
        'Emissão ágil de CTe e manifesto fiscal',
        'Entregas em polos comerciais e distribuidores',
      ],
      idealFor: 'Pequenas e médias empresas, reposição de estoque e comércio atacadista.',
    },
    {
      id: 'coletas',
      icon: <MapPin className="w-6 h-6 text-[#F58220]" />,
      badge: 'Malha Regional',
      title: 'Coletas e Entregas Regionais',
      description:
        'Atendimento especializado para coleta e distribuição capilar nos principais municípios da Bahia, facilitando o fluxo de mercadorias entre centros produtores, entrepostos e clientes finais.',
      features: [
        'Agendamento planejado de coletas',
        'Equipe experiente nas rotas baianas',
        'Conhecimento das rotas e particularidades locais',
        'Confirmação formal de recebimento e entrega',
      ],
      idealFor: 'Empresas que distribuem ou recebem insumos no estado da Bahia.',
    },
    {
      id: 'transbordo',
      icon: <Warehouse className="w-6 h-6 text-[#F58220]" />,
      badge: 'Hub Estratégico',
      title: 'Apoio Logístico & Transbordo',
      description:
        'Utilização da base operacional própria em Jequié (Avenida Lions Club, 54) como ponto facilitador de trânsito, conferência e suporte para viagens de longa distância que cruzam o Nordeste.',
      features: [
        'Base física instalada no entroncamento BR-116 e BR-330',
        'Apoio a operações de redistribuição',
        'Conferência física de documentação e carga',
        'Suporte operacional direto da equipe local',
      ],
      idealFor: 'Operadores logísticos e transportadoras parceiras que necessitam de ponto de apoio na Bahia.',
    },
  ];

  const handleSelectService = (title: string) => {
    trackConversionEvent('click_quote_cta', { service: title, source: 'solutions_card' });
    onOpenQuoteModal(title);
  };

  return (
    <section id="solucoes" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Soluções B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Como podemos ajudar sua <span className="text-gradient-orange">operação</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Modalidades de transporte rodoviário estruturadas para atender com rigor às exigências de prazo, segurança e custo da sua empresa.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center text-[#F58220] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#FF9D43] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#F58220] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-4">
                  <strong className="text-slate-300">Recomendado para:</strong> {item.idealFor}
                </p>
                <button
                  onClick={() => handleSelectService(item.title)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/5 hover:bg-[#F58220] text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-[#F58220] transition-all duration-200"
                >
                  <span>Solicitar Cotação para esta Solução</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Todas as operações cobertas por apólices de seguro</p>
              <p className="text-xs text-slate-400">Proteção financeira RCTR-C e RCF-DC em todas as viagens com emissão fiscal regular.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#ff8f2e] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 whitespace-nowrap transition-all"
          >
            Cotar Agora
          </button>
        </div>

      </div>
    </section>
  );
};
