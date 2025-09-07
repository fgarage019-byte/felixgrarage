import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Excelente serviço, atendimento impecável e resolveram meu problema rapidamente!",
      name: "João Silva",
      image: "https://images.unsplash.com/photo-1531123414780-f742cd92f7a3?q=80&w=200&auto=format&fit=crop"
    },
    {
      rating: 4.5,
      text: "Honestos e muito atenciosos. Voltarei sempre que precisar!",
      name: "Marina Costa", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
      rating: 5,
      text: "Diagnóstico preciso e preço justo. Recomendo demais.",
      name: "Carlos Lima",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-montserrat text-2xl sm:text-3xl mb-8">
          Quem conhece, recomenda
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/80 border border-white/6 rounded-2xl p-4 shadow-automotive"
            >
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-foreground mb-3 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image}
                  alt={`Cliente ${testimonial.name}`}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;