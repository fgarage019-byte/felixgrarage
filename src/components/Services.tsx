import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import the generated automotive service images
import directInjectionImage from '@/assets/direct-injection-service.jpg';
import brakeServiceImage from '@/assets/brake-service.jpg';
import diagnosticScannerImage from '@/assets/diagnostic-scanner.jpg';

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      image: directInjectionImage,
      title: "Reparação de Injeção Direta",
      description: "Diagnóstico preciso e reparo especializado para sistemas GDI, com equipamentos de última geração.",
      alt: "Reparação de Injeção Direta"
    },
    {
      image: brakeServiceImage,
      title: "Manutenção em Sistemas de Freio",
      description: "Segurança garantida com revisão completa: pastilhas, discos, fluido e ABS.",
      alt: "Manutenção de freios"
    },
    {
      image: diagnosticScannerImage,
      title: "Diagnóstico Eletrônico",
      description: "Leitura de DTC, análise de parâmetros e testes atuadores para resolução definitiva.",
      alt: "Diagnóstico eletrônico"
    }
  ];

  return (
    <section id="services" className="py-16 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-montserrat text-2xl sm:text-3xl mb-1">Nossos Serviços</h2>
        <p className="text-muted-foreground -mt-2 mb-6">
          Diagnóstico certeiro, reparos de alta precisão e atendimento profissional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-gradient-card border border-white/6 rounded-2xl overflow-hidden shadow-automotive flex flex-col"
            >
              <img 
                src={service.image} 
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-montserrat text-lg mb-1.5">{service.title}</h3>
                <p className="text-muted-foreground mb-3 flex-1">{service.description}</p>
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                >
                  Saiba Mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            variant="automotive-secondary"
            onClick={scrollToContact}
          >
            VER TODOS OS SERVIÇOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;