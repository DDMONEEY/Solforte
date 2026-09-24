import React, { useState } from 'react';
import { Search, ShieldCheck, Truck, MessageCircle, Phone, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

export const TrackingSection: React.FC = () => {
  const [docCode, setDocCode] = useState('');
  const [hasQueried, setHasQueried] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = docCode.trim();
    if (!clean) {
      setErrorMessage('Por favor, informe o número da Nota Fiscal, CTe ou chave de acesso.');
      return;
    }
    setErrorMessage('');
    setHasQueried(true);
    trackConversionEvent('submit_tracking_search', { docCode: clean });
  };

  const handleConnectTrafficWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá, Central de Tráfego da SolForte! Gostaria de consultar o status e a posição da minha carga referente ao documento / CTe: ${docCode.trim()}.`
    );
    trackConversionEvent('click_whatsapp', { source: 'tracking_section_result' });
    window.open(`https://wa.me/557330476129?text=${text}`, '_blank');
  };

  return (
    <section id="rastreamento" className="py-20 md:py-28 bg-[#090e18] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Transparency */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
              <Truck className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Acompanhamento Operacional</span>
            </div>

            {/* Title (Requirement 8) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Saiba onde está sua <span className="text-gradient-orange">carga</span>
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Consulte a posição e o andamento da sua entrega inserindo o número do Conhecimento de Transporte Eletrônico (CTe), Chave de Acesso ou Nota Fiscal emitida.
            </p>

            <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Veículos monitorados via telemetria satelital</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Comunicação direta com o time de tráfego</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>Confirmação e canhoto de entrega digitalizados</span>
              </div>
            </div>
          </div>

          {/* Right Column: Search Box & Result Protocol */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c1220] border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              <form onSubmit={handleSearch} className="space-y-4">
                <label htmlFor="tracking-input" className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Digite o código da carga, CTe ou Nota Fiscal:
                </label>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      id="tracking-input"
                      type="text"
                      value={docCode}
                      onChange={(e) => {
                        setDocCode(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Ex: 53119407000107 ou número da NF / CTe"
                      className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-all font-mono"
                      aria-label="Código de rastreamento ou Nota Fiscal"
                    />
                  </div>

                  {/* Button (Requirement 8) */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#ff8f2e] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all text-xs uppercase tracking-wider whitespace-nowrap"
                  >
                    <span>RASTREAR</span>
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </p>
                )}
              </form>

              {/* Ready for future API integration (No fake tracking info, clean protocol verification) */}
              {hasQueried && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-bottom-2">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">
                          Protocolo de Consulta Registrado
                        </span>
                        <p className="text-base font-bold text-white font-mono mt-0.5">
                          {docCode.trim()}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#F58220]/15 text-[#FF9D43] text-xs font-semibold font-mono">
                        Aguardando Validação
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Para sua segurança e privacidade comercial, o posicionamento detalhado via satélite desta carga é validado pela nossa central de tráfego com o contratante ou destinatário autorizado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleConnectTrafficWhatsApp}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Confirmar Posição via WhatsApp com a Central</span>
                      </button>

                      <a
                        href="tel:7330476129"
                        onClick={() => trackConversionEvent('click_phone', { source: 'tracking_box_call' })}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-3 px-4 rounded-xl text-xs font-semibold border border-white/10 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#F58220]" />
                        <span>(73) 3047-6129</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-slate-400 mt-4 text-center">
                🔒 Central de Tráfego SolForte • Base Operacional em Jequié - BA
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
