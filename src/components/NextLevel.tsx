import React from 'react';
import { Button } from '@/components/ui/button';

const NextLevel = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="next-level" 
      className="bg-primary/8 border-t border-b border-white/6 py-16 text-center"
    >
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-montserrat text-2xl sm:text-3xl mb-1.5">
          Leve seu carro para o próximo nível
        </h2>
        <p className="text-muted-foreground mb-4">
          Diagnósticos precisos, reparos confiáveis e um serviço que você pode confiar.
        </p>
        <Button 
          variant="automotive" 
          size="lg"
          onClick={scrollToContact}
        >
          REALIZAR AGENDAMENTO
        </Button>
      </div>
    </section>
  );
};

export default NextLevel;