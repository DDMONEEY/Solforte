import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip automatically after 7 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent(
    'Olá, gostaria de solicitar uma cotação de transporte com a SolForte.'
  );

  const handleClick = () => {
    trackConversionEvent('click_whatsapp', { source: 'floating_widget' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0c1220] border border-white/15 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-2">
          <span>Olá! Precisa de cotação para sua carga?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Fechar mensagem de atendimento"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/557330476129?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative group w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl shadow-green-500/25 hover:scale-105 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
        aria-label="Falar com a SolForte no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
