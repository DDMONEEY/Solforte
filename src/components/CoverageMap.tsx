import React, { useState } from 'react';
import { MapPin, Navigation, ArrowUpRight, Compass, Shield, Truck } from 'lucide-react';

interface RouteInfo {
  id: string;
  from: string;
  to: string;
  highway: string;
  type: string;
  transitTime: string;
  frequency: string;
}

export const CoverageMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'bahia' | 'sudeste' | 'centro'>('all');

  const routes: RouteInfo[] = [
    {
      id: '1',
      from: 'Jequié / Região BA',
      to: 'Salvador & Recôncavo',
      highway: 'BR-116 / BR-324',
      type: 'Lotação & Fracionado',
      transitTime: '24 horas',
      frequency: 'Diária',
    },
    {
      id: '2',
      from: 'Jequié / BA',
      to: 'Vitória da Conquista & Sul da BA',
      highway: 'BR-116',
      type: 'Lotação & Fracionado',
      transitTime: '12 a 24 horas',
      frequency: 'Diária',
    },
    {
      id: '3',
      from: 'Bahia (Jequié/SSA)',
      to: 'São Paulo (Capital & Interior)',
      highway: 'BR-116 / Fernão Dias',
      type: 'Lotação Direta',
      transitTime: '48 a 72 horas',
      frequency: 'Saídas Regulares',
    },
    {
      id: '4',
      from: 'Bahia',
      to: 'Belo Horizonte & Minas Gerais',
      highway: 'BR-116 / BR-381',
      type: 'Lotação & Dedicado',
      transitTime: '36 a 48 horas',
      frequency: 'Saídas Regulares',
    },
    {
      id: '5',
      from: 'Bahia',
      to: 'Espírito Santo (Vitória/Linhares)',
      highway: 'BR-101 / BR-116',
      type: 'Lotação',
      transitTime: '36 a 48 horas',
      frequency: 'Semanal',
    },
    {
      id: '6',
      from: 'Bahia',
      to: 'Goiás & Distrito Federal',
      highway: 'BR-020 / BR-242',
      type: 'Lotação Fechada',
      transitTime: '48 a 72 horas',
      frequency: 'Sob Demanda',
    },
  ];

  return (
    <section id="cobertura" className="py-20 md:py-28 bg-slate-900/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Malha Rodoviária Estratégica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Conectando a Bahia aos <span className="text-gradient-orange">Maiores Polos</span> do País
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Com matriz localizada no coração geográfico e rodoviário da Bahia, a Solforte oferece rotas ágeis e seguras com saídas estruturadas.
          </p>
        </div>

        {/* Strategic Hub Spotlight */}
        <div className="rounded-3xl bg-slate-950 border border-white/10 p-8 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F58220]/20 text-[#FF9D43] text-xs font-bold font-mono">
                HUB CENTRAL • JEQUIÉ / BA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                O Ponto Central da Logística Baiana
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jequié é carinhosamente conhecida como a <em>Cidade Sol</em> e representa um dos pontos geográficos mais privilegiados do Nordeste. Cruzada pelas rodovias federais <strong>BR-116</strong> (Rio-Bahia) e <strong>BR-330</strong>, nossa base na <strong>Avenida Lions Club, 54</strong> permite rápido escoamento tanto para a capital quanto para o sudeste e norte.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-white">
                  <Navigation className="w-4 h-4 text-[#F58220]" />
                  Acesso imediato à BR-116
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Truck className="w-4 h-4 text-[#F58220]" />
                  Distribuição para mais de 100 municípios
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-center">
                <p className="text-3xl font-black text-[#F58220]">BR-116</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Corredor Principal</p>
                <p className="text-[11px] text-slate-500 mt-2">Ligação direta Nordeste ➔ Sudeste</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-center">
                <p className="text-3xl font-black text-white">BR-330</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Eixo Leste-Oeste</p>
                <p className="text-[11px] text-slate-500 mt-2">Conexão com o litoral e chapada</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-center">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Telemetria Ativa</p>
                <p className="text-[11px] text-slate-500 mt-2">Posicionamento contínuo da frota</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-center">
                <p className="text-3xl font-black text-green-400">RNTRC</p>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">ANTT Nacional</p>
                <p className="text-[11px] text-slate-500 mt-2">Habilitação interestadual completa</p>
              </div>
            </div>

          </div>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-[#F58220]/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/5">
                <span className="font-mono text-[#F58220] font-semibold">{route.highway}</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300">{route.frequency}</span>
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
                  <span className="text-slate-500 block">Trânsito estimado:</span>
                  <span className="font-bold text-white">{route.transitTime}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">Tipo:</span>
                  <span className="font-semibold text-slate-300">{route.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

