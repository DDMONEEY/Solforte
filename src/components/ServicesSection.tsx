import React, { useState } from 'react';
import { Truck, Boxes, Map, ShieldAlert, Warehouse, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  idealFor: string;
}

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services: ServiceItem[] = [
    {
      id: 'lotacao',
      icon: <Truck className="w-6 h-6 text-[#F58220]" />,
      badge: 'Mais Solicitado',
      title: 'Carga Lotação (Frete Dedicado)',
      subtitle: 'Veículo 100% exclusivo da origem ao destino',
      description:
        'Operação ponto a ponto onde o veículo é reservado exclusivamente para a sua carga. Sem paradas intermediárias desnecessárias, garantindo o menor tempo de trânsito e máxima segurança física para sua mercadoria.',
      benefits: [
        'Veículo dedicado e lacrado',
        'Tempo de trânsito direto e previsível',
        'Rotas personalizadas para sua necessidade',
        'Acompanhamento em tempo real via satélite',
      ],
      idealFor: 'Indústrias, atacadistas, grandes distribuidoras e agronegócio.',
    },
    {
      id: 'fracionada',
      icon: <Boxes className="w-6 h-6 text-[#F58220]" />,
      badge: 'Custo Otimizado',
      title: 'Carga Fracionada',
      subtitle: 'Distribuição inteligente e compartilhada',
      description:
        'Sua remessa não precisa encher um caminhão inteiro para rodar com eficiência. Agrupamos mercadorias compatíveis para dividir os custos da viagem, viabilizando preços competitivos com rigor no prazo.',
      benefits: [
        'Redução expressiva do custo unitário do frete',
        'Conferência minuciosa em cada etapa',
        'Emissão ágil de CTe e manifesto',
        'Entregas em comércios e polos regionais',
      ],
      idealFor: 'Pequenas e médias empresas, e-commerce B2B e lojistas.',
    },
    {
      id: 'rotas',
      icon: <Map className="w-6 h-6 text-[#F58220]" />,
      badge: 'Abrangência',
      title: 'Transporte Intermunicipal & Interestadual',
      subtitle: 'Conexão Bahia aos grandes centros do Brasil',
      description:
        'Partindo de Jequié/BA, atendemos corredores rodoviários estratégicos conectando os estados da Bahia, Minas Gerais, São Paulo, Rio de Janeiro, Goiás, Espírito Santo e região Nordeste com frequência garantida.',
      benefits: [
        'Fluxo frequente entre polos produtivos',
        'Tráfego por rodovias prioritárias (BR-116, etc.)',
        'Motoristas experientes e treinados',
        'Monitoramento contínuo em todo o percurso',
      ],
      idealFor: 'Empresas com fornecedores ou clientes em outros estados.',
    },
    {
      id: 'seguranca',
      icon: <ShieldAlert className="w-6 h-6 text-[#F58220]" />,
      badge: 'Segurança Total',
      title: 'Gestão de Riscos & Carga Segurada',
      subtitle: 'Proteção financeira e operacional completa',
      description:
        'Todas as operações da Solforte contam com apólices de seguro de carga obrigatórias e complementares (RCTR-C e RCF-DC), além de gerenciamento de risco rigoroso com telemetria 24 horas por dia.',
      benefits: [
        'Cobertura total contra acidentes e roubo',
        'Rastreamento satelital e atuadores de segurança',
        'Protocolos de parada apenas em postos credenciados',
        'Check-in contínuo com a central de monitoramento',
      ],
      idealFor: 'Cargas de alto valor agregado e produtos de alta demanda.',
    },
    {
      id: 'logistica',
      icon: <Warehouse className="w-6 h-6 text-[#F58220]" />,
      badge: 'Hub Jequié',
      title: 'Apoio Logístico & Transbordo',
      subtitle: 'Estrutura operacional no coração da Bahia',
      description:
        'Nossa localização em Jequiezinho/Jequié atua como facilitador operacional para conferência, transbordo planejado e distribuição final para os municípios do sudoeste baiano e recôncavo.',
      benefits: [
        'Ponto de transbordo rápido e estratégico',
        'Mão de obra preparada para manuseio cuidadoso',
        'Integração facilitada para distribuição capilar',
        'Comunicação direta com o time de tráfego',
      ],
      idealFor: 'Operações com necessidade de ponto de redistribuição.',
    },
    {
      id: 'urgente',
      icon: <Clock className="w-6 h-6 text-[#F58220]" />,
      badge: 'Alta Prioridade',
      title: 'Frete Expresso / Emergencial',
      subtitle: 'Despacho com prioridade máxima de embarque',
      description:
        'Para demandas de reposição de estoque urgente, paradas de linha industrial ou datas críticas. Mobilizamos veículos prioritários para que sua carga chegue ao destino no menor tempo viável.',
      benefits: [
        'Prioridade máxima no carregamento e liberação',
        'Rotas otimizadas sem desvios',
        'Atualização ponto a ponto para o contratante',
        'Atendimento de urgência via WhatsApp dedicado',
      ],
      idealFor: 'Paradas de fábrica, peças urgentes e insumos sazonais.',
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Nossas Soluções</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Serviços Especializados em <span className="text-gradient-orange">Transporte</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Modalidades dimensionadas para a necessidade exata da sua empresa, garantindo tranquilidade do embarque ao destino.
            </p>
          </div>

          <a
            href="#simulador"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F58220] hover:text-[#ff9e47] transition-colors self-start md:self-auto group"
          >
            <span>Consultar disponibilidade de rotas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 p-7 flex flex-col justify-between group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent hover top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58220]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Card Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#F58220]/10 border border-[#F58220]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF9D43] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#F58220] mb-4">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#F58220] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Ideal For & CTA */}
              <div className="pt-5 border-t border-white/10 mt-2">
                <p className="text-xs text-slate-400 mb-4">
                  <strong className="text-slate-300">Indicado para:</strong> {service.idealFor}
                </p>
                <a
                  href={`https://wa.me/557330476129?text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações e cotação para o serviço de ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#F58220] text-slate-200 hover:text-white font-semibold text-xs border border-white/10 hover:border-[#F58220] transition-all duration-200"
                >
                  <span>Cotar este Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Security Banner under Services */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-[#F58220]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#F58220]/20 flex items-center justify-center text-[#F58220] flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Sua mercadoria 100% protegida</h4>
              <p className="text-sm text-slate-300">
                Operamos com apólices de seguro ativas e monitoramento 24h para você ter tranquilidade em cada frete.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/557330476129"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#ff8f2e] text-white font-bold text-sm shadow-lg shadow-orange-500/20 whitespace-nowrap transition-all duration-200"
          >
            Fale com a Central
          </a>
        </div>

      </div>
    </section>
  );
};
