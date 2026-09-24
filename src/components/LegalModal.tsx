import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-[#0c1220] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220]"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pr-8">
          <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="legal-modal-title" className="text-xl font-bold text-white">
              {type === 'privacy' ? 'Política de Privacidade e Proteção de Dados' : 'Termos de Uso e Contratação'}
            </h3>
            <p className="text-xs text-slate-400">
              SolForte Transportes de Cargas Ltda. • CNPJ: 53.119.407/0001-07
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed border-t border-white/10 pt-4">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>SOLFORTE TRANSPORTES DE CARGAS LTDA.</strong>, inscrita no CNPJ sob o nº <strong>53.119.407/0001-07</strong>, com sede na Avenida Lions Club, 54, Jequiezinho, Jequié - BA, CEP 45208-441, reafirma seu compromisso com a privacidade e proteção dos dados pessoais coletados em suas plataformas digitais, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
              </p>
              <h4 className="font-bold text-white text-sm pt-2">1. Coleta e Finalidade dos Dados</h4>
              <p>
                Os dados fornecidos através dos formulários de cotação e canais de contato (tais como nome, telefone, e-mail, razão social, CNPJ, cidades de origem e destino e características da carga) são utilizados exclusivamente para elaboração de propostas comerciais, formalização de contratos de transporte rodoviário, emissão de documentos fiscais obrigatórios (CTe e MDF-e) e cumprimento de obrigações regulatórias junto à ANTT e Receita Federal.
              </p>
              <h4 className="font-bold text-white text-sm pt-2">2. Compartilhamento e Segurança</h4>
              <p>
                A SolForte não comercializa dados pessoais com terceiros. As informações pertinentes à operação de transporte são compartilhadas estritamente com autoridades fiscais e seguradoras credenciadas para averbação das apólices de seguro obrigatório de carga (RCTR-C e RCF-DC).
              </p>
              <h4 className="font-bold text-white text-sm pt-2">3. Direitos do Titular</h4>
              <p>
                O titular dos dados pode solicitar a qualquer momento a confirmação, retificação ou exclusão de seus dados pessoais através do canal oficial de e-mail: <strong>comercial@solfortetransportes.com.br</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                Os presentes Termos de Uso regulam o acesso e a utilização dos serviços e informações disponibilizados no site institucional da <strong>SOLFORTE TRANSPORTES DE CARGAS LTDA.</strong>
              </p>
              <h4 className="font-bold text-white text-sm pt-2">1. Cotações e Condições Comerciais</h4>
              <p>
                As simulações e orçamentos emitidos por meio do site constituem propostas prévias sujeitas à confirmação de disponibilidade de frota, conferência das dimensões/pesos reais da mercadoria no ato da coleta e validade das certidões fiscais da carga para emissão do Conhecimento de Transporte (CTe).
              </p>
              <h4 className="font-bold text-white text-sm pt-2">2. Obrigações do Embarcador</h4>
              <p>
                É responsabilidade exclusiva do embarcador a emissão e fornecimento da Nota Fiscal idônea e correspondente à carga a ser transportada, bem como o correto acondicionamento e embalagem das mercadorias de acordo com as normas técnicas de transporte rodoviário.
              </p>
              <h4 className="font-bold text-white text-sm pt-2">3. Foro</h4>
              <p>
                Para dirimir quaisquer controvérsias decorrentes da utilização deste site ou dos serviços prestados, fica eleito o Foro da Comarca de Jequié, Estado da Bahia.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
