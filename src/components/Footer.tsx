import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 text-center text-muted-foreground text-sm">
      <div className="container mx-auto max-w-[1200px] px-5">
        © {currentYear} Felix Garage — Oficina Mecânica Especializada
      </div>
    </footer>
  );
};

export default Footer;