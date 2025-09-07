import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/6">
      <nav className="flex items-center justify-between gap-4 px-5 py-3.5 max-w-[1200px] mx-auto">
        <button 
          onClick={() => scrollToSection('hero')}
          className="font-montserrat font-extrabold text-xl tracking-[2px] hover:opacity-80 transition-opacity"
        >
          ALLA<span className="text-primary">VENTO</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 list-none">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Serviços', id: 'services' },
            { label: 'Sobre Nós', id: 'about' },
            { label: 'Depoimentos', id: 'testimonials' },
            { label: 'Contato', id: 'contact' }
          ].map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground font-semibold hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button 
          variant="automotive" 
          size="lg"
          onClick={() => scrollToSection('contact')}
          className="hidden sm:inline-flex whitespace-nowrap"
        >
          REALIZAR AGENDAMENTO
        </Button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-foreground rounded-sm transition-all"></span>
          <span className="w-6 h-0.5 bg-foreground rounded-sm transition-all"></span>
          <span className="w-6 h-0.5 bg-foreground rounded-sm transition-all"></span>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-card border border-white/6 rounded-lg p-4 shadow-automotive min-w-[220px]">
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Serviços', id: 'services' },
                { label: 'Sobre Nós', id: 'about' },
                { label: 'Depoimentos', id: 'testimonials' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground font-semibold hover:text-foreground transition-colors text-left w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;