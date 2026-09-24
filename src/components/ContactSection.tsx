import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Clock, Send, CheckCircle2, Building, ShieldCheck, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Cotação de Frete',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `*MENSAGEM VIA SITE - SOLFORTE TRANSPORTES*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📌 *Assunto:* ${formData.subject}\n` +
      `💬 *Mensagem:* ${formData.message}`
    );

    window.open(`https://wa.me/557330476129?text=${whatsappText}`, '_blank');
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('comercial@solfortetransportes.com.br');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Fale com a Solforte</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Canais Oficiais de <span className="text-gradient-orange">Atendimento</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Nossa equipe comercial em Jequié / BA está à disposição para dimensionar e cotar sua operação com rapidez e transparência.
          </p>
        </div>

        {/* Contact Grid: Modern Corporate Hub (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Premium Corporate Hub Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Operational Status Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/15 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Header with live pulse */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                    Central Operacional Ativa
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  Tempo médio: &lt; 5 min
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Atendimento Rápido e Humanizado
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Converse diretamente com nossos especialistas em logística rodoviária para cotações personalizadas, dúvidas técnicas ou parcerias comerciais.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="space-y-3">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/557330476129?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20comercial%20da%20Solforte%20Transportes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                      <Phone className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-400 font-semibold uppercase">WhatsApp Comercial</p>
                      <p className="text-base font-bold text-white">(73) 3047-6129</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#25D366] group-hover:translate-x-1 transition-transform">
                    Chamar ➔
                  </span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:7330476129"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Ligação Telefônica</p>
                      <p className="text-sm font-bold text-white">(73) 3047-6129</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                    Ligar agora ↗
                  </span>
                </a>

                {/* Email with copy button */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-semibold uppercase">E-mail Comercial</p>
                      <p className="text-xs font-bold text-white truncate">
                        comercial@solfortetransportes.com.br
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/solfortetransportes?stkn=anhldG1qZTVvdDQ3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Instagram Oficial</p>
                      <p className="text-sm font-bold text-white">@solfortetransportes</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-pink-400 transition-colors">
                    Seguir ↗
                  </span>
                </a>

              </div>

            </div>

            {/* Sede Matriz Details Box */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F58220] uppercase tracking-wider">
                      Matriz Operacional
                    </span>
                    <span className="text-[11px] text-green-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Base Própria
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">
                    Avenida Lions Club, 54 - Jequiezinho
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Jequié - Bahia • CEP: 45208-441
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                    <div>
                      <span className="block text-slate-500">CNPJ Matriz:</span>
                      <strong className="text-slate-300 font-mono">53.119.407/0001-07</strong>
                    </div>
                    <div>
                      <span className="block text-slate-500">RNTRC ANTT:</span>
                      <strong className="text-slate-300 font-mono">056478766</strong>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#F58220]" />
                    <span>Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/95 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold mb-3">
                  <span>Mensagem Direta</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Envie uma Solicitação</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Preencha o formulário e nossa equipe responderá com proposta formal e atendimento prioritário.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white">Mensagem Encaminhada com Sucesso!</h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Formatamos seus dados e abrimos a conversa com nosso time comercial no WhatsApp. Retornaremos rapidamente.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Seu Nome ou Razão Social *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Silva ou Distribuidora ABC"
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(73) 99999-9999"
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Assunto do Contato
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                      >
                        <option value="Cotação de Carga Lotação">Cotação de Carga Lotação (Exclusiva)</option>
                        <option value="Cotação de Carga Fracionada">Cotação de Carga Fracionada</option>
                        <option value="Frete Emergencial / Expresso">Frete Emergencial / Expresso</option>
                        <option value="Parceria de Transporte Contínuo">Parceria de Transporte Contínuo</option>
                        <option value="Outro Assunto">Outro Assunto / Dúvidas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Sua Mensagem / Detalhes da Carga *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva detalhes como cidade de origem, destino, tipo de mercadoria, peso aproximado ou dúvida..."
                      className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9133] hover:to-[#ea680b] text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 group"
                  >
                    <span>Enviar Mensagem para o Comercial</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>Atendimento com sigilo e segurança da informação.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Interactive Map of Jequié */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 relative">
          <div className="p-4 bg-slate-900 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F58220] flex-shrink-0" />
              <span className="text-sm font-bold text-white">Localização da Matriz: Avenida Lions Club, 54 - Jequié, BA</span>
            </div>
            <a
              href="https://maps.google.com/?q=Avenida+Lions+Club+54+Jequiezinho+Jequie+BA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#F58220] hover:underline font-semibold"
            >
              Abrir rota no Google Maps ↗
            </a>
          </div>
          
          <iframe
            title="Mapa Solforte Transportes Jequié"
            src="https://maps.google.com/maps?q=Avenida%20Lions%20Club,%2054,%20Jequiezinho,%20Jequie%20BA&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 border-0 filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};
