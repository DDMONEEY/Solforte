import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, ChevronRight, Search } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenTrackingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'A SolForte', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Tecnologia & Segurança', href: '#tecnologia' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleQuoteClick = () => {
    trackConversionEvent('open_quote_modal', { source: 'navbar_primary_cta' });
    onOpenQuoteModal();
  };

  const handleTrackingClick = () => {
    trackConversionEvent('click_tracking_cta', { source: 'navbar_secondary_cta' });
    const trackingElem = document.getElementById('rastreamento');
    if (trackingElem) {
      trackingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar (B2B Contact & Operation verification) */}
      <div className="bg-[#05080f] border-b border-white/5 py-2 px-4 sm:px-6 text-xs text-slate-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sede em Jequié • Bahia • Entroncamento BR-116 e BR-330
            </span>
            <span className="text-slate-400 border-l border-white/10 pl-4 font-mono">
              CNPJ: 53.119.407/0001-07
            </span>
            <span className="text-slate-400 border-l border-white/10 pl-4 font-mono">
              ANTT RNTRC: 056478766
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:comercial@solfortetransportes.com.br"
              className="text-slate-400 hover:text-white transition-colors"
            >
              comercial@solfortetransportes.com.br
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:7330476129"
              onClick={() => trackConversionEvent('click_phone', { source: 'top_bar' })}
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#F58220] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              (73) 3047-6129
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b12]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/10 py-3'
            : 'bg-[#070b12]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] rounded-lg p-1"
            aria-label="SolForte Transportes - Voltar ao início"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#F58220] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F58220] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Distinct Primary & Secondary */}
          <div className="hidden sm:flex items-center gap-3">
            {/* CTA 2: Secondary - Rastrear Carga */}
            <button
              onClick={handleTrackingClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Ir para seção de rastreamento de carga"
            >
              <Search className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Rastrear Carga</span>
            </button>

            {/* CTA 1: Primary - Solicitar Cotação */}
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9233] hover:to-[#ea680b] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Abrir formulário de solicitação de cotação"
            >
              <span>Solicitar Cotação</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0f1d] border-b border-white/10 px-6 py-6 transition-all duration-200 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-[#F58220] py-2.5 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleTrackingClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm"
                >
                  <Search className="w-4 h-4 text-[#F58220]" />
                  <span>Rastrear Carga</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleQuoteClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#F58220] to-[#E05D00] text-white font-extrabold text-sm shadow-lg shadow-orange-500/25"
                >
                  <span>Solicitar Cotação B2B</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
