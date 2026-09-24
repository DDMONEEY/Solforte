import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block">
              <Logo variant="dark" size="md" />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Transporte rodoviário de cargas com excelência operacional, segurança e agilidade. Conectando a Bahia e o Nordeste aos maiores centros do Brasil com o melhor custo-benefício.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/solfortetransportes?stkn=anhldG1qZTVvdDQ3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/557330476129"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:comercial@solfortetransportes.com.br"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#F58220] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F58220] transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#F58220] transition-colors">Simulador de Frete</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#F58220] transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F58220] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Modalidades</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Carga Lotação / Exclusiva</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Carga Fracionada</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Transporte Interestadual</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Transporte Intermunicipal BA</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Frete Expresso / Urgência</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F58220] transition-colors">Gestão de Riscos & Seguro</a>
              </li>
            </ul>
          </div>

          {/* Corporate / Registration Details */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dados Corporativos</h4>
            <div className="space-y-2 text-slate-300">
              <p className="font-bold text-white">SOLFORTE TRANSPORTES DE CARGAS LTDA.</p>
              <p className="font-mono text-slate-400">CNPJ: 53.119.407/0001-07</p>
              <p className="font-mono text-slate-400">RNTRC ANTT: 056478766</p>
              <p className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#F58220] flex-shrink-0 mt-0.5" />
                <span>Avenida Lions Club, 54 • Jequiezinho • Jequié / BA • CEP 45208-441</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span>(73) 3047-6129</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                <span className="break-all">comercial@solfortetransportes.com.br</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Solforte Transportes de Cargas Ltda. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Transportadora Credenciada e Regular
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
