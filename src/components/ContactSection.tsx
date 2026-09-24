import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `*MENSAGEM VIA SITE - SOLFORTE TRANSPORTES*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `✉️ *E-mail:* ${formData.email}\n` +
      `📌 *Assunto:* ${formData.subject || 'Contato Geral'}\n` +
      `💬 *Mensagem:* ${formData.message}`
    );

    window.open(`https://wa.me/557330476129?text=${whatsappText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Fale com a Gente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Canais de <span className="text-gradient-orange">Atendimento</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Estamos prontos para atender sua solicitação de frete com agilidade e atendimento humanizado.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Official Visual + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Official Contact Card & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Card Image Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group">
              <img
                src="/images/card-contato.jpg"
                alt="Contato Oficial Solforte Transportes"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs text-slate-300 uppercase tracking-widest font-bold">Atendimento Oficial</p>
                  <p className="text-xl font-extrabold text-white">Solforte Transportes de Cargas</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/557330476129"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#F58220]/50 transition-all group block hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Telefone & WhatsApp</p>
                <p className="text-base font-bold text-white mt-1">(73) 3047-6129</p>
                <span className="text-[11px] text-green-400 mt-1 inline-block">Atendimento imediato</span>
              </a>

              {/* Email */}
              <a
                href="mailto:comercial@solfortetransportes.com.br"
                className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#F58220]/50 transition-all group block hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase">E-mail Comercial</p>
                <p className="text-xs font-bold text-white mt-1 break-all">
                  comercial@solfortetransportes.com.br
                </p>
                <span className="text-[11px] text-slate-400 mt-1 inline-block">Cotações formais</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/solfortetransportes?stkn=anhldG1qZTVvdDQ3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#F58220]/50 transition-all group block hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Instagram Oficial</p>
                <p className="text-sm font-bold text-white mt-1">@solfortetransportes</p>
                <span className="text-[11px] text-pink-400 mt-1 inline-block">Acompanhe novidades</span>
              </a>

              {/* Horário */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Horário Operacional</p>
                <p className="text-xs font-bold text-white mt-1">Seg - Sex: 08h às 18h</p>
                <span className="text-[11px] text-slate-400 mt-1 inline-block">Sábado: 08h às 12h</span>
              </div>

            </div>

            {/* Sede Address Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F58220] uppercase tracking-wider">Matriz em Jequié / BA</p>
                <p className="text-sm font-bold text-white mt-1">
                  Avenida Lions Club, 54 - Jequiezinho
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Jequié - BA • CEP: 45208-441
                </p>
                <p className="text-xs text-slate-500 font-mono mt-2">
                  CNPJ: 53.119.407/0001-07 • RNTRC ANTT: 056478766
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/95 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Envie uma Mensagem</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Preencha os campos abaixo e nosso consultor entrará em contato imediatamente.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white">Mensagem Encaminhada!</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Abrimos o WhatsApp com sua mensagem formatada. Caso queira enviar outra mensagem, clique no botão abaixo.
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
                        Seu Nome ou Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Silva ou Distribuidora ABC"
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
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
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Cotação, Dúvidas, Parceria..."
                        className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva detalhes como origem, destino, tipo de mercadoria ou dúvida..."
                      className="w-full bg-slate-950 border border-white/15 focus:border-[#F58220] rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F58220]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9133] hover:to-[#ea680b] text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 group"
                  >
                    <span>Enviar Mensagem para o Comercial</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-slate-400 pt-2">
                    🔒 Seus dados são utilizados exclusivamente para o contato comercial da Solforte.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Interactive Map of Jequié */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 relative">
          <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F58220]" />
              <span className="text-sm font-bold text-white">Localização da Matriz: Avenida Lions Club, 54 - Jequié, BA</span>
            </div>
            <a
              href="https://maps.google.com/?q=Avenida+Lions+Club+54+Jequiezinho+Jequie+BA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#F58220] hover:underline font-semibold"
            >
              Abrir no Google Maps ↗
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

