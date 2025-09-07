import React from 'react';
import { Button } from '@/components/ui/button';
import audiImage from '@/assets/audi-garage.jpg';
import porscheImage from '@/assets/porsche-garage.jpg';

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
          Felix Garage - Sua oficina de confiança
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Serviços automotivos especializados com qualidade e tradição familiar.
        </p>
        <Button 
          variant="automotive" 
          size="lg"
          onClick={scrollToContact}
        >
          REALIZAR AGENDAMENTO
        </Button>
        
        {/* Car Images */}
        <div className="flex gap-6 justify-center mt-12">
          <div className="w-80 h-48 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={audiImage} 
              alt="Audi A4 na Felix Garage" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-48 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={porscheImage} 
              alt="Porsche 911 na Felix Garage" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;