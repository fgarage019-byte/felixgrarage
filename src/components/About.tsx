import React from 'react';
import { Wrench, CheckCircle } from 'lucide-react';
import movivanImage from '@/assets/movivan-vision-recorder.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-white/6 text-muted-foreground px-3 py-2 rounded-full text-sm mb-4">
              <Wrench className="w-4 h-4" />
              Quem atendemos
            </div>
            
            <h2 className="font-montserrat text-2xl sm:text-3xl mb-2">
              Excelência para quem exige o melhor
            </h2>
            <p className="text-muted-foreground -mt-2 mb-4">
              Na Allavento, oferecemos soluções completas para diversas marcas e modelos.
            </p>
            
            <ul className="space-y-2.5 mb-6">
              {[
                "Oficinas de alto nível da PAC",
                "Pessoas que buscam qualidade", 
                "Profissionais que exigem excelência"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 bg-card/80 border border-dashed border-white/10 rounded-2xl grid grid-cols-[72px_1fr] gap-3.5 items-center">
              <img 
                src={movivanImage}
                alt="MOVIVAN VISION RECORDER"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-montserrat text-base mb-1.5">MOVIVAN VISION RECORDER</h3>
                <p className="text-muted-foreground text-sm m-0">
                  Tecnologia de ponta para diagnósticos precisos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop" 
              alt="Carro em manutenção"
              className="w-full rounded-2xl shadow-automotive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;