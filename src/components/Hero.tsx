import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative py-24 pb-20 overflow-hidden"
    >
      {/* Hero background with overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515923152115-758a6b16f35e?q=80&w=1600&auto=format&fit=crop')`,
          filter: 'saturate(0.8) contrast(1.05)'
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center px-5">
        <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2.5">
          Confira alguns de nossos principais serviços
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Qualidade e confiança em cada detalhe do seu veículo.
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

export default Hero;