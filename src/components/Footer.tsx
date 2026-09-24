import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, ArrowUp, ShieldCheck } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-white/10 text-slate-400 pt-16 pb-12 relative" aria-label="Rodapé do site SolForte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="Voltar ao início">
              <Logo variant="dark" size="md" />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Transporte rodoviário de cargas com excelência operacional, segurança e agilidade. Conectando a Bahia e o Nordeste aos maiores centros do Brasil com frota monitorada e apólices de seguro ativas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/solfortetransportes?stkn=anhldG1qZTVvdDQ3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Instagram Oficial da SolForte Transportes"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/557330476129"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('click_whatsapp', { source: 'footer_icon' })}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="WhatsApp Oficial da SolForte Transportes"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:comercial@solfortetransportes.com.br"
                onClick={() => trackConversionEvent('click_email', { source: 'footer_icon' })}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="E-mail Comercial da SolForte Transportes"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#F58220] transition-colors">Início</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#F58220] transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F58220] transition-colors">A SolForte</a>
              </li>
              <li>
                <a href="#rastreamento" className="hover:text-[#F58220] transition-colors">Rastreamento</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#F58220] transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-[#F58220] transition-colors">Tecnologia</a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-[#F58220] transition-colors">Cobertura</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F58220] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services Quick List (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Modalidades</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="hover:text-[#F58220] transition-colors text-left"
                >
                  Carga Lotação (Dedicada)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="hover:text-[#F58220] transition-colors text-left"
                >
                  Carga Fracionada
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="hover:text-[#F58220] transition-colors text-left"
                >
                  Coletas & Entregas Regionais
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="hover:text-[#F58220] transition-colors text-left"
                >
                  Apoio Logístico & Transbordo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="hover:text-[#F58220] transition-colors text-left"
                >
                  Frete Expresso / Emergencial
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate / Registration Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dados Corporativos</h4>
            <div className="space-y-2 text-slate-300">
              <p className="font-bold text-white leading-tight">SOLFORTE TRANSPORTES DE CARGAS LTDA.</p>
              <p className="font-mono text-slate-400">CNPJ: 53.119.407/0001-07</p>
              <p className="font-mono text-slate-400">RNTRC ANTT: 056478766</p>
              <p className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-[#F58220] flex-shrink-0 mt-0.5" />
                <span>Avenida Lions Club, 54 • Jequiezinho • Jequié / BA • CEP 45208-441</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <a
                  href="tel:7330476129"
                  onClick={() => trackConversionEvent('click_phone', { source: 'footer_text' })}
                  className="hover:text-white transition-colors"
                >
                  (73) 3047-6129
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <a
                  href="mailto:comercial@solfortetransportes.com.br"
                  onClick={() => trackConversionEvent('click_email', { source: 'footer_text' })}
                  className="break-all hover:text-white transition-colors"
                >
                  comercial@solfortetransportes.com.br
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SolForte Transportes de Cargas Ltda. Todos os direitos reservados.</p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Política de Privacidade (LGPD)
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Termos de Uso
            </button>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Regular ANTT
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
