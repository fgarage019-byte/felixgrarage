import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! (exemplo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-montserrat text-2xl sm:text-3xl mb-8">
          Entre em Contato
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Contact Form */}
          <div className="bg-card/80 border border-white/6 rounded-2xl p-5 shadow-automotive">
            <h3 className="font-montserrat text-xl mb-4">Agende seu Serviço</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-white/8 text-foreground rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Seu E-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-white/8 text-foreground rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-background border border-white/8 text-foreground rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
              <textarea
                name="message"
                placeholder="Mensagem / Serviço Desejado"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-background border border-white/8 text-foreground rounded-xl px-3.5 py-3 text-sm resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
              <Button 
                type="submit" 
                variant="automotive" 
                size="lg"
                className="w-full"
              >
                ENVIAR MENSAGEM
              </Button>
            </form>
            
            <p className="text-muted-foreground text-xs mt-2.5">
              *Integração real pode ser feita via Formspree ou PHP.
            </p>
          </div>

          {/* Map */}
          <div className="bg-card/80 border border-white/6 rounded-2xl p-5 shadow-automotive">
            <h3 className="font-montserrat text-xl mb-4">Nossa Localização</h3>
            
            <div className="aspect-video rounded-xl overflow-hidden border border-white/8">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps?q=Felix+Garage&output=embed"
                className="w-full h-full border-0"
                title="Localização da Felix Garage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;