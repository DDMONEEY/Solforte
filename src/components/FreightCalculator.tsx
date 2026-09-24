import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle, Truck, Package, MapPin, CheckCircle, Sparkles, RefreshCw, PhoneCall } from 'lucide-react';

export const FreightCalculator: React.FC = () => {
  const [origin, setOrigin] = useState('Jequié - BA');
  const [destination, setDestination] = useState('');
  const [cargoType, setCargoType] = useState('Carga Seca / Geral');
  const [modalType, setModalType] = useState<'lotacao' | 'fracionada'>('lotacao');
  const [weightKg, setWeightKg] = useState('1500');
  const [invoiceValue, setInvoiceValue] = useState('');
  const [notes, setNotes] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  // Common Hubs for quick selection
  const quickDestinations = [
    'Salvador - BA',
    'Feira de Santana - BA',
    'Vitória da Conquista - BA',
    'São Paulo - SP',
    'Belo Horizonte - MG',
    'Rio de Janeiro - RJ',
    'Brasília / Goiânia',
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) {
      alert('Por favor, informe a cidade e estado de destino.');
      return;
    }
    setIsCalculated(true);
  };

  const handleSendToWhatsApp = () => {
    const formattedMessage = encodeURIComponent(
      `🚚 *NOVA SOLICITAÇÃO DE COTAÇÃO - SOLFORTE TRANSPORTES*\n\n` +
      `📍 *Origem:* ${origin}\n` +
      `🏁 *Destino:* ${destination || 'A consultar'}\n` +
      `📦 *Tipo de Carga:* ${cargoType}\n` +
      `🚛 *Modalidade:* ${modalType === 'lotacao' ? 'Carga Lotação (Veículo Exclusivo)' : 'Carga Fracionada'}\n` +
      `⚖️ *Peso Estimado:* ${weightKg ? `${weightKg} kg` : 'A definir'}\n` +
      `${invoiceValue ? `💰 *Valor da NF:* R$ ${invoiceValue}\n` : ''}` +
      `${notes ? `📝 *Observações:* ${notes}\n` : ''}\n` +
      `Por favor, me enviem a cotação com a melhor tarifa e prazo disponível!`
    );

    window.open(`https://wa.me/557330476129?text=${formattedMessage}`, '_blank');
  };

  return (
    <section id="simulador" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F58220]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Simulador de Frete Inteligente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calcule sua <span className="text-gradient-orange">Cotação</span> em Segundos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Preencha os detalhes do frete abaixo para dimensionar sua carga e enviar instantaneamente para nossa equipe comercial.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <form onSubmit={handleCalculate} className="space-y-8">
            
            {/* Modal Selection Tabs: Lotação vs Fracionada */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Escolha a Modalidade Desejada
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setModalType('lotacao')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-200 ${
                    modalType === 'lotacao'
                      ? 'bg-[#F58220]/15 border-[#F58220] shadow-lg shadow-orange-500/10'
                      : 'bg-slate-950/60 border-white/10 hover:border-white/25 text-slate-400'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      modalType === 'lotacao' ? 'bg-[#F58220] text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${modalType === 'lotacao' ? 'text-white' : 'text-slate-300'}`}>
                      Carga Lotação (Fechada)
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Caminhão exclusivo, rota direta sem paradas e máxima agilidade.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setModalType('fracionada')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-200 ${
                    modalType === 'fracionada'
                      ? 'bg-[#F58220]/15 border-[#F58220] shadow-lg shadow-orange-500/10'
                      : 'bg-slate-950/60 border-white/10 hover:border-white/25 text-slate-400'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      modalType === 'fracionada' ? 'bg-[#F58220] text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${modalType === 'fracionada' ? 'text-white' : 'text-slate-300'}`}>
                      Carga Fracionada
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Frete compartilhado ideal para remessas menores e redução de custos.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Route definition */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                2. Origem e Destino do Transporte
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#F58220] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Cidade de Coleta / Origem"
                      required
                      className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Ponto de partida / coleta da mercadoria
                  </span>
                </div>

                <div>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#FF9D43] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Cidade de Entrega / Destino"
                      required
                      className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Cidade e Estado onde a carga será entregue
                  </span>
                </div>
              </div>

              {/* Quick destination tags */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Destinos frequentes:</span>
                {quickDestinations.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setDestination(city)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cargo Details */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Informações da Carga
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Tipo de Mercadoria</label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                  >
                    <option value="Carga Seca / Geral">Carga Geral Seca</option>
                    <option value="Alimentos e Bebidas">Alimentos / Bebidas</option>
                    <option value="Autopeças e Ferramentas">Autopeças / Ferramentas</option>
                    <option value="Materiais de Construção">Materiais de Construção</option>
                    <option value="Produtos Químicos Não-Perigosos">Químicos Não Perigosos</option>
                    <option value="Outros">Outros tipos de carga</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Peso Estimado (kg ou toneladas)</label>
                  <input
                    type="text"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    placeholder="Ex: 2500 kg ou 12 ton"
                    className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Valor Declarado / NF (Opcional)</label>
                  <input
                    type="text"
                    value={invoiceValue}
                    onChange={(e) => setInvoiceValue(e.target.value)}
                    placeholder="Ex: 50.000,00"
                    className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                  />
                </div>

              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                Observações ou Exigências Específicas
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ex: Necessidade de descarga com horário agendado, plataforma elevatória, lonamento específico..."
                className="w-full bg-slate-950/90 border border-white/15 focus:border-[#F58220] rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
              />
            </div>

            {/* Submit & Generate Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl shadow-green-600/20 hover:shadow-green-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Cotação para WhatsApp Comercial</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9133] hover:to-[#ea680b] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-xl shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ver Resumo do Frete</span>
              </button>
            </div>

          </form>

          {/* Calculated Summary Box */}
          {isCalculated && (
            <div className="mt-8 pt-8 border-t border-white/15 animate-in fade-in slide-in-from-bottom-4">
              <div className="p-6 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F58220]" />
                    <h3 className="font-bold text-white text-base">Resumo da Cotação Pronto</h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Rota: {origin} ➔ {destination}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-6">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-slate-400 block mb-1">Modalidade</span>
                    <strong className="text-white">
                      {modalType === 'lotacao' ? 'Lotação Exclusiva' : 'Fracionada'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-slate-400 block mb-1">Mercadoria</span>
                    <strong className="text-white">{cargoType}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-slate-400 block mb-1">Peso Declarado</span>
                    <strong className="text-white">{weightKg || 'A definir'}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-slate-400 block mb-1">Monitoramento</span>
                    <strong className="text-green-400">Incluso 24h</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-300">
                    Nossa equipe em Jequié/BA atende de forma imediata via telefone ou WhatsApp.
                  </p>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href="tel:7330476129"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#F58220]" />
                      (73) 3047-6129
                    </a>
                    <button
                      onClick={handleSendToWhatsApp}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Receber Proposta Agora
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
