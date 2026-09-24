import React, { useState } from 'react';
import { Compass, Navigation, Truck, Clock, ArrowRight } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface RouteItem {
  id: string;
  region: 'bahia' | 'sudeste' | 'centro';
  from: string;
  to: string;
  highway: string;
  type: string;
  frequency: string;
}

interface CoverageSectionProps {
  onOpenQuoteModal: () => void;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'bahia' | 'sudeste' | 'centro'>('all');

  const routes: RouteItem[] = [
    {
      id: '1',
      region: 'bahia',
      from: 'Jequié / Região BA',
      to: 'Salvador & Recôncavo Baiano',
      highway: 'BR-116 / BR-324',
      type: 'Lotação & Fracionado',
      frequency: 'Saídas Diárias',
    },
    {
      id: '2',
      region: 'bahia',
      from: 'Jequié / BA',
      to: 'Vitória da Conquista & Sudoeste Baiano',
      highway: 'BR-116',
      type: 'Lotação & Fracionado',
      frequency: 'Saídas Diárias',
    },
    {
      id: '3',
      region: 'bahia',
      from: 'Jequié / BA',
      to: 'Feira de Santana & Eixo Portal do Sertão',
      highway: 'BR-116',
      type: 'Lotação Direta',
      frequency: 'Saídas Diárias',
    },
    {
      id: '4',
      region: 'sudeste',
      from: 'Bahia (Jequié/Salvador)',
      to: 'São Paulo (Capital & Interior)',
      highway: 'BR-116 / Fernão Dias',
      type: 'Lotação Exclusiva',
      frequency: 'Saídas Regulares',
    },
    {
      id: '5',
      region: 'sudeste',
      from: 'Bahia',
      to: 'Belo Horizonte & Região Metropolitana MG',
      highway: 'BR-116 / BR-381',
      type: 'Lotação & Dedicado',
      frequency: 'Saídas Regulares',
    },
    {
      id: '6',
      region: 'sudeste',
      from: 'Bahia',
      to: 'Espírito Santo (Vitória / Linhares)',
      highway: 'BR-101 / BR-116',
      type: 'Lotação Fechada',
      frequency: 'Semanal',
    },
    {
      id: '7',
      region: 'centro',
      from: 'Bahia',
      to: 'Distrito Federal (Brasília) & Goiás',
      highway: 'BR-020 / BR-242',
      type: 'Lotação Especial',
      frequency: 'Sob Demanda',
    },
  ];

  const filteredRoutes = selectedRegion === 'all'
    ? routes
    : routes.filter((r) => r.region === selectedRegion);

  const handleQuoteRoute = () => {
    trackConversionEvent('click_quote_cta', { source: 'coverage_routes_button' });
    onOpenQuoteModal();
  };

  return (
    <section id="cobertura" className="py-20 md:py-28 bg-[#090e18] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Malha Rodoviária e Rotas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Conectando a Bahia aos <span className="text-gradient-orange">Maiores Polos</span> do País
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Com matriz localizada no coração geográfico e rodoviário da Bahia, a SolForte atende corredores estratégicos pelas rodovias federais BR-116 e BR-330.
          </p>
        </div>

        {/* Strategic Hub Spotlight Card */}
        <div className="rounded-3xl bg-[#0c1220] border border-white/10 p-8 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F58220]/20 text-[#FF9D43] text-xs font-bold font-mono">
                HUB CENTRAL • JEQUIÉ / BA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                O Ponto Central da Logística Baiana
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jequié, a “Cidade Sol”, é um dos pontos geográficos e logísticos mais estratégicos do Nordeste. Cruzada pelas rodovias <strong>BR-116</strong> e <strong>BR-330</strong>, nossa base na <strong>Avenida Lions Club, 54</strong> permite escoamento ágil tanto para os centros da Bahia quanto para o Sudeste e Centro-Oeste.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-white">
                  <Navigation className="w-4 h-4 text-[#F58220]" />
                  Acesso rápido à BR-116 (Rio-Bahia)
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Truck className="w-4 h-4 text-[#F58220]" />
                  Escoamento para polos produtivos e industriais
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070b12] border border-white/10 text-center">
                <p className="text-3xl font-black text-[#F58220]">BR-116</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Corredor Principal</p>
                <p className="text-[11px] text-slate-400 mt-2">Conexão Nordeste ➔ Sudeste</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070b12] border border-white/10 text-center">
                <p className="text-3xl font-black text-white">BR-330</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Eixo Leste-Oeste</p>
                <p className="text-[11px] text-slate-400 mt-2">Ligação Litoral e Chapada</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070b12] border border-white/10 text-center">
                <p className="text-3xl font-black text-white">ANTT</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">RNTRC 056478766</p>
                <p className="text-[11px] text-slate-400 mt-2">Habilitação Interestadual</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070b12] border border-white/10 text-center">
                <p className="text-3xl font-black text-emerald-400">100%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Seguro Ativo</p>
                <p className="text-[11px] text-slate-400 mt-2">RCTR-C e RCF-DC</p>
              </div>
            </div>

          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Filtrar rotas por região">
          <button
            onClick={() => setSelectedRegion('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedRegion === 'all'
                ? 'bg-[#F58220] text-white shadow-lg shadow-orange-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            Todas as Rotas
          </button>
          <button
            onClick={() => setSelectedRegion('bahia')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedRegion === 'bahia'
                ? 'bg-[#F58220] text-white shadow-lg shadow-orange-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            Bahia & Nordeste
          </button>
          <button
            onClick={() => setSelectedRegion('sudeste')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedRegion === 'sudeste'
                ? 'bg-[#F58220] text-white shadow-lg shadow-orange-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            Sudeste (SP / MG / ES)
          </button>
          <button
            onClick={() => setSelectedRegion('centro')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedRegion === 'centro'
                ? 'bg-[#F58220] text-white shadow-lg shadow-orange-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            Centro-Oeste (DF / GO)
          </button>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/5">
                <span className="font-mono text-[#F58220] font-bold">{route.highway}</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F58220]" />
                  {route.frequency}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <p className="text-xs text-slate-400 font-medium">Origem:</p>
                  <p className="text-sm font-bold text-white">{route.from}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F58220] animate-pulse" />
                  <p className="text-xs text-slate-400 font-medium">Destino:</p>
                  <p className="text-sm font-bold text-[#FF9D43]">{route.to}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Modalidade:</span>
                  <span className="font-semibold text-slate-200">{route.type}</span>
                </div>
                <button
                  onClick={handleQuoteRoute}
                  className="text-xs font-bold text-[#F58220] hover:text-[#ff9e47] flex items-center gap-1"
                >
                  <span>Cotar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
