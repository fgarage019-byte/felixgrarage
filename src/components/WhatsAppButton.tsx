const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519995679592?text=Olá!%20Vim%20pelo%20site%20Felix%20Garage%20e%20quero%20atendimento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)] z-[9999] no-underline text-[28px] text-white hover:scale-110 transition-transform duration-300"
      aria-label="Falar no WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
