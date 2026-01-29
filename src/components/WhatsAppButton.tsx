import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de agendar um serviço na Felix Garage.");
  
  const handleClick = () => {
    // Track click event
    console.log('[WhatsApp Click]', {
      timestamp: new Date().toISOString(),
      action: 'whatsapp_cta_click',
      source: 'floating_button'
    });
    
    // Open WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded CTA bubble */}
      {isExpanded && (
        <div 
          className="bg-card border border-white/10 rounded-2xl p-4 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[260px]"
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-foreground mb-3 pr-4">
            Precisa de ajuda? Fale conosco pelo WhatsApp!
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar agora
          </button>
        </div>
      )}
      
      {/* Floating WhatsApp button */}
      <button
        onClick={() => isExpanded ? handleClick() : setIsExpanded(true)}
        className="group bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
