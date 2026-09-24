import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, ChevronRight, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de falar com o atendimento da Solforte Transportes.'
  );

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-950/90 border-b border-white/5 py-2 px-4 sm:px-6 text-xs text-slate-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
              Avenida Lions Club, 54 - Jequié, BA
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#F58220]" />
              Seg - Sex: 08h às 18h | Sáb: 08h às 12h
            </span>
            <span className="text-slate-400 border-l border-white/10 pl-4 font-mono">
              CNPJ: 53.119.407/0001-07
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/solfortetransportes?stkn=anhldG1qZTVvdDQ3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F58220] transition-colors flex items-center gap-1.5"
            >
              <span>@solfortetransportes</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:7330476129"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#F58220] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              (73) 3047-6129
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10 py-3'
            : 'bg-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo link */}
          <a href="#inicio" className="group flex items-center gap-2">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#F58220] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F58220] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/557330476129?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#simulador"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58220] to-[#E05D00] hover:from-[#ff9233] hover:to-[#ea680b] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              <span>Cotar Frete</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-[#F58220] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-3">
                <a
                  href="tel:7330476129"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm"
                >
                  <Phone className="w-4 h-4 text-[#F58220]" />
                  (73) 3047-6129
                </a>

                <a
                  href={`https://wa.me/557330476129?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chamar no WhatsApp
                </a>

                <a
                  href="#simulador"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenQuoteModal) onOpenQuoteModal();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#F58220] to-[#E05D00] text-white font-bold text-sm shadow-lg shadow-orange-500/25"
                >
                  <span>Solicitar Cotação Rápida</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
