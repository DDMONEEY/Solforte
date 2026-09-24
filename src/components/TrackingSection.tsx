import React, { useState } from 'react';
import { Search, ShieldCheck, MapPin, Truck, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export const TrackingSection: React.FC = () => {
  const [docNumber, setDocNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<{
    searched: boolean;
    found: boolean;
    code: string;
  }>({
    searched: false,
    found: false,
    code: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docNumber.trim()) return;

    setTrackingResult({
      searched: true,
      found: true,
      code: docNumber.trim(),
    });
  };

  const handleConnectWithTraffic = () => {
    const message = encodeURIComponent(
      `Olá, Central de Tráfego da Solforte! Gostaria de consultar o status e rastreamento da minha carga com o documento / CTe: ${docNumber}.`
    );
    window.open(`https://wa.me/557330476129?text=${message}`, '_blank');
  };

  return (
    <section id="rastreamento" className="py-16 md:py-24 bg-slate-900/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-3">
              <Truck className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Rastreamento em Tempo Real</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Acompanhe a sua <span className="text-gradient-orange">Carga</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Consulte a posição da sua mercadoria informando o número do Conhecimento de Transporte (CTe), Chave de Acesso ou Nota Fiscal emitida.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F58220]" />
                <span>Atualizações de telemetria via satélite 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F58220]" />
                <span>Comprovantes de entrega digitais e canhoto ágil</span>
              </div>
            </div>
          </div>

          {/* Right Search Input Box */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <form onSubmit={handleSearch} className="space-y-4">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Digite o CTe, Chave de Acesso ou Número da NF:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={docNumber}
                      onChange={(e) => setDocNumber(e.target.value)}
                      placeholder="Ex: 53119407000107 ou 14502"
                      required
                      className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#ff8f2e] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200"
                  >
                    <span>Rastrear</span>
                  </button>
                </div>
              </form>

              {/* Result Area */}
              {trackingResult.searched && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Documento Consultado</p>
                        <p className="text-sm font-bold text-white font-mono">{trackingResult.code}</p>
                      </div>
                    </div>

                    <button
                      onClick={handleConnectWithTraffic}
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors w-full sm:w-auto justify-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Ver Posição com a Central</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

