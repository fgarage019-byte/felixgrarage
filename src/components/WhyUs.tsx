import React from 'react';
import { Cpu, Award, Clock, Shield } from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: Cpu,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para o seu veículo."
    },
    {
      icon: Award,
      title: "Profissionais Qualificados",
      description: "Equipe experiente e certificada para o melhor atendimento."
    },
    {
      icon: Clock,
      title: "Agilidade com Qualidade", 
      description: "Processos otimizados para reduzir o tempo de espera."
    },
    {
      icon: Shield,
      title: "Garantia Real",
      description: "Transparência de ponta a ponta e garantia de serviço."
    }
  ];

  return (
    <section id="why-us" className="py-16 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-montserrat text-2xl sm:text-3xl mb-8">
          Vantagens da Kemap Allavento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index}
                className="bg-card/60 border border-white/6 rounded-2xl p-4 grid grid-cols-[48px_1fr] gap-3 items-center"
              >
                <IconComponent className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-montserrat text-base mb-1">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm m-0">{advantage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;