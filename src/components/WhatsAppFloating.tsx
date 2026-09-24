import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip automatically after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent(
    'Olá! Gostaria de falar com o atendimento da Solforte Transportes.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-white/15 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-2">
          <span>Olá! Precisa de cotação de frete?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Fechar mensagem"
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
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform duration-300"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};

