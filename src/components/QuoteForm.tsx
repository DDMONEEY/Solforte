import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, FileText } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService, onSuccess, isModal = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    cnpj: '',
    whatsapp: '',
    email: '',
    origin: 'Jequié - BA',
    destination: '',
    serviceType: initialService || 'Carga Lotação (Veículo Exclusivo)',
    cargoType: 'Carga Geral Seca',
    weight: '',
    volumes: '',
    cargoValue: '',
    targetDate: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Mask helpers
  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2')
      .slice(0, 15);
  };

  const maskCNPJ = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
      .slice(0, 18);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.destination.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setLoading(true);

    // Format B2B message
    const formattedText = encodeURIComponent(
      `📋 *SOLICITAÇÃO DE COTAÇÃO B2B - SOLFORTE TRANSPORTES*\n\n` +
      `👤 *Solicitante:* ${formData.name}\n` +
      `🏢 *Empresa:* ${formData.company || 'Não informada'}\n` +
      `📄 *CNPJ:* ${formData.cnpj || 'Não informado'}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n\n` +
      `📍 *Origem:* ${formData.origin}\n` +
      `🏁 *Destino:* ${formData.destination}\n` +
      `🚛 *Modalidade:* ${formData.serviceType}\n` +
      `📦 *Tipo de Mercadoria:* ${formData.cargoType}\n` +
      `⚖️ *Peso Estimado:* ${formData.weight || 'A definir'}\n` +
      `📦 *Volumes/Paletes:* ${formData.volumes || 'A definir'}\n` +
      `💰 *Valor da NF:* ${formData.cargoValue ? `R$ ${formData.cargoValue}` : 'A definir'}\n` +
      `📅 *Data Prevista:* ${formData.targetDate || 'Imediata'}\n` +
      `${formData.message ? `📝 *Observações:* ${formData.message}\n` : ''}\n` +
      `Por favor, me enviem a cotação com a melhor tarifa e prazo disponível!`
    );

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      trackConversionEvent('submit_quote_form', {
        service: formData.serviceType,
        destination: formData.destination,
      });

      // Point of integration: Open WhatsApp with pre-filled structured B2B proposal
      window.open(`https://wa.me/557330476129?text=${formattedText}`, '_blank');

      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  return (
    <div className={`w-full ${isModal ? 'p-1' : ''}`}>
      {success ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Solicitação Encaminhada!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
            Formatamos os parâmetros da sua carga e abrimos a conversa com o nosso time comercial no WhatsApp. Você também pode enviar os dados por e-mail ou falar por telefone.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Nova Solicitação
            </button>
            <a
              href="tel:7330476129"
              className="px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#ff8f2e] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Ligar para a Central: (73) 3047-6129
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Group 1: Requester Details */}
          <div>
            <h4 className="text-xs font-bold text-[#F58220] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>1. Dados da Empresa e Contato</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nome do Solicitante *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Carlos Oliveira"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Empresa / Razão Social
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ex: Distribuidora Silva Ltda"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  CNPJ da Empresa
                </label>
                <input
                  type="text"
                  value={formData.cnpj}
                  onChange={(e) => setFormData({ ...formData, cnpj: maskCNPJ(e.target.value) })}
                  placeholder="00.000.000/0000-00"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  WhatsApp para Retorno *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: maskPhone(e.target.value) })}
                  placeholder="(73) 99999-9999"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contato@empresa.com.br"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>
            </div>
          </div>

          {/* Group 2: Origin and Destination */}
          <div>
            <h4 className="text-xs font-bold text-[#F58220] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>2. Origem e Destino da Carga</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Cidade de Origem (Coleta) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  placeholder="Ex: Jequié - BA"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Cidade de Destino (Entrega) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Ex: Salvador - BA, São Paulo - SP..."
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>
            </div>
          </div>

          {/* Group 3: Cargo Details */}
          <div>
            <h4 className="text-xs font-bold text-[#F58220] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>3. Características da Mercadoria</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Modalidade do Frete
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                >
                  <option value="Carga Lotação (Veículo Exclusivo)">Carga Lotação (Exclusiva)</option>
                  <option value="Carga Fracionada">Carga Fracionada</option>
                  <option value="Coleta ou Entrega Regional BA">Coleta/Entrega Regional</option>
                  <option value="Frete Urgente / Emergencial">Frete Urgente / Expresso</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tipo de Carga
                </label>
                <input
                  type="text"
                  value={formData.cargoType}
                  onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                  placeholder="Ex: Alimentos, Autopeças, Materiais..."
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Peso Estimado (kg ou ton)
                </label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  placeholder="Ex: 2.500 kg ou 14 ton"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Valor Estimado da NF
                </label>
                <input
                  type="text"
                  value={formData.cargoValue}
                  onChange={(e) => setFormData({ ...formData, cargoValue: e.target.value })}
                  placeholder="Ex: 45.000,00"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Quantidade de Volumes
                </label>
                <input
                  type="text"
                  value={formData.volumes}
                  onChange={(e) => setFormData({ ...formData, volumes: e.target.value })}
                  placeholder="Ex: 8 paletes ou 50 caixas"
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Data Prevista para Coleta
                </label>
                <input
                  type="date"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Observações ou Exigências Específicas
                </label>
                <input
                  type="text"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Descarga agendada, necessidade de plataforma, horário restrito..."
                  className="w-full bg-[#070b12] border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Dados protegidos para cotação e compliance corporativo.</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9233] hover:to-[#ea680b] disabled:opacity-50 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all text-xs sm:text-sm uppercase tracking-wider"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação de Cotação</span>
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
};
