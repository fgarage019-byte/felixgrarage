import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519995679592?text=Olá!%20Vim%20pelo%20site%20Felix%20Garage%20e%20quero%20atendimento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 w-[60px] h-[60px] bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)] z-[99999] transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.956-.5-5.706-1.447l-6.305 1.654zm6.597-3.807l.363.216c1.52.905 3.274 1.381 5.073 1.382h.006c5.448 0 9.886-4.438 9.889-9.885.002-2.64-1.029-5.12-2.898-6.988-1.868-1.868-4.348-2.898-6.988-2.898-5.448 0-9.886 4.437-9.889 9.885-.001 2.1.547 4.142 1.588 5.945l-.235.374-1.011 3.69 3.774-.991z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
