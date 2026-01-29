import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Track click event
    console.log('[WhatsApp Click]', {
      timestamp: new Date().toISOString(),
      action: 'whatsapp_cta_click',
      source: 'floating_button'
    });
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5519995679592&text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 w-[60px] h-[60px] bg-[#25d366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-[2px_2px_10px_rgba(0,0,0,0.5)] z-[9999] transition-all duration-300 hover:scale-110 no-underline"
      aria-label="Abrir WhatsApp"
    >
      <svg width="35" height="35" fill="white" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.956-.5-5.706-1.447l-6.305 1.654zm6.597-3.807l.363.216c1.52.905 3.274 1.381 5.073 1.382h.006c5.448 0 9.886-4.438 9.889-9.885.002-2.64-1.029-5.12-2.898-6.988-1.868-1.868-4.348-2.898-6.988-2.898-5.448 0-9.886 4.437-9.889 9.885-.001 2.1.547 4.142 1.588 5.945l-.235.374-1.011 3.69 3.774-.991z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
