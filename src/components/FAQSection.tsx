import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quais tipos de carga a SolForte transporta?',
      answer:
        'Transportamos cargas secas em geral, cargas industriais, autopeças, mercadorias paletizadas, insumos para atacado e distribuição, tanto em regime de Carga Lotação (veículo exclusivo dedicado) quanto em Carga Fracionada. Não transportamos cargas ilícitas ou produtos fora da conformidade legal e fiscal.',
    },
    {
      question: 'Como solicitar uma cotação de frete?',
      answer:
        'Você pode solicitar a cotação diretamente pelo nosso formulário online no site, pelo WhatsApp Comercial no número (73) 3047-6129 ou pelo e-mail comercial@solfortetransportes.com.br. Para agilizar o cálculo, tenha em mãos: cidade de origem, cidade de destino, peso estimado, cubagem/volumes e valor da Nota Fiscal.',
    },
    {
      question: 'A carga possui cobertura de seguro durante todo o trajeto?',
      answer:
        'Sim. Todas as operações da SolForte contam com averbação eletrônica de apólices ativas de seguro de transporte de carga (RCTR-C para acidentes e colisões, e RCF-DC contra roubo e desvio de carga), garantindo total tranquilidade e conformidade jurídica para o embarcador.',
    },
    {
      question: 'Quais regiões são atendidas pela SolForte?',
      answer:
        'Com matriz instalada no entroncamento viário das rodovias BR-116 e BR-330 em Jequié/BA, atendemos com frequência todo o estado da Bahia (incluindo Salvador, Recôncavo e interior) e os principais corredores interestaduais com destino e origem nos estados de São Paulo, Minas Gerais, Rio de Janeiro, Espírito Santo e região Centro-Oeste.',
    },
    {
      question: 'Qual é a diferença entre Carga Lotação e Carga Fracionada?',
      answer:
        'Na Carga Lotação, o caminhão é disponibilizado exclusivamente para a mercadoria da sua empresa, seguindo rota direta e sem paradas. Na Carga Fracionada, o espaço do veículo é compartilhado entre diferentes remessas compatíveis, dividindo os custos de deslocamento e gerando economia expressiva para volumes menores.',
    },
    {
      question: 'Como faço para entrar em contato com o atendimento da SolForte?',
      answer:
        'Nosso atendimento é centralizado em Jequié / BA. Você pode ligar ou enviar mensagens para o telefone/WhatsApp (73) 3047-6129 ou enviar e-mail para comercial@solfortetransportes.com.br durante nosso horário operacional (Segunda a Sexta das 08h às 18h e Sábados das 08h às 12h).',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre os <span className="text-gradient-orange">Serviços</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Respostas objetivas sobre prazos, modalidades, documentação e contratação de transporte com a SolForte.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0c1220] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white hover:text-[#F58220] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F58220]/20 text-[#F58220]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-white">Sua dúvida não foi respondida acima?</h3>
            <p className="text-xs text-slate-400 mt-1">Converse diretamente com nosso time comercial em Jequié.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/557330476129"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('click_whatsapp', { source: 'faq_support' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:7330476129"
              onClick={() => trackConversionEvent('click_phone', { source: 'faq_support' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>(73) 3047-6129</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
