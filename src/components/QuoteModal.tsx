import React, { useEffect } from 'react';
import { X, Calculator } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, serviceName }) => {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
    >
      <div className="relative w-full max-w-4xl bg-[#0c1220] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220]"
          aria-label="Fechar janela de cotação"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Cotação Expressa B2B</span>
          </div>
          <h3 id="modal-quote-title" className="text-xl sm:text-2xl font-extrabold text-white">
            Solicitar Cotação de Transporte
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {serviceName ? `Serviço selecionado: ${serviceName}` : 'Preencha os detalhes e receba retorno direto da nossa equipe.'}
          </p>
        </div>

        {/* Form */}
        <QuoteForm initialService={serviceName} onSuccess={onClose} isModal={true} />

      </div>
    </div>
  );
};
