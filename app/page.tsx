'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Zap, FileText, DollarSign, Users, TrendingUp, BarChart3, Star } from 'lucide-react'

const WHATSAPP_NUMBER = '5519987654321' // ← Atualizar com número real
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um diagnóstico com IA para meu veículo'

// ← Dados de exemplo (atualizar depois)
const BUSINESS_DATA = {
  name: 'Felix Garage',
  address: 'Rua das Flores, 123 - Sumaré, SP 13170-000',
  phone: '(19) 3861-2345',
  email: 'contato@felixgarage.com.br',
  hours: 'Seg-Sex: 8h às 18h | Sáb: 8h às 13h',
  rating: 4.8,
  reviews: 127,
  experience: 35,
  clients: 1200,
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  const services = [
    {
      icon: Zap,
      title: 'Diagnóstico IA em Minutos',
      description: 'Detecta problemas em sua máquina em minutos, não em horas. Análise completa do motor, eletrônica e sistemas integrados.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    },
    {
      icon: FileText,
      title: 'Relatório Digital Completo',
      description: 'Receba um documento detalhado com imagens, gráficos e recomendações. Você entende exatamente o que seu carro precisa.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    },
    {
      icon: DollarSign,
      title: 'Preço Justo, Zero Surpresas',
      description: 'Orçamento preciso baseado em IA. Sem mistério. Sem custos ocultos. Transparência total.',
      image: 'https://images.unsplash.com/photo-1579621970795-f8f592ff49d3?w=500&h=300&fit=crop',
    },
    {
      icon: Users,
      title: 'Especialista ao Seu Lado',
      description: 'Não é só máquina. Nossos técnicos têm 35 anos de experiência. Eles validam, ajustam e cuidam do seu carro.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
    },
    {
      icon: TrendingUp,
      title: 'Manutenção Preventiva Inteligente',
      description: 'IA prevê problemas antes de acontecer. Economize com manutenção estratégica.',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=300&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Monitoramento Pós-Serviço',
      description: 'Dashboard pessoal acompanhando seu veículo 24/7. Você sabe que tudo está bem.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
  ]

  const testimonials = [
    {
      author: 'Cliente A',
      role: 'Proprietário Audi A4',
      text: 'Trouxe meu Audi aqui e fiquei impressionado com a precisão do diagnóstico. A IA identificou algo que mecânico em SP tinha deixado passar.',
      rating: 5,
    },
    {
      author: 'Cliente B',
      role: 'Empresário',
      text: '35 anos de experiência + tecnologia IA? Isso é o futuro aqui em Sumaré. Recomendo Felix Garage para qualquer um com carro premium.',
      rating: 5,
    },
  ]

  return (
    <main className="bg-felix-dark">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-felix-dark/95 backdrop-blur-sm z-50 border-b border-felix-purple/20">
        <div className="section-container flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold text-felix-orange">FELIX</h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#servicos" className="hover:text-felix-orange transition">Serviços</a>
            <a href="#sobre" className="hover:text-felix-orange transition">Sobre</a>
            <a href="#contato" className="hover:text-felix-orange transition">Contato</a>
          </div>
          <button onClick={handleWhatsApp} className="btn-primary text-sm">
            Agendar
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-felix-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-felix-orange rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="leading-tight">
                Diagnóstico <span className="text-felix-orange">Inteligente</span>.<br />
                <span className="text-felix-purple">Expertise de 35 Anos.</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Máquinas não mentem. Nem a experiência também. Conheça a oficina premium que une IA diagnóstica com expertise humana em Sumaré.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={handleWhatsApp} className="btn-primary">
                  Agendar Diagnóstico IA
                </button>
                <button className="btn-secondary">
                  Conhecer Serviços
                </button>
              </div>

              <div className="flex gap-6 pt-8 text-sm">
                <div>
                  <p className="text-felix-orange font-bold text-2xl">{BUSINESS_DATA.experience}+</p>
                  <p className="text-gray-400">Anos de Expertise</p>
                </div>
                <div>
                  <p className="text-felix-orange font-bold text-2xl">{BUSINESS_DATA.clients}+</p>
                  <p className="text-gray-400">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-felix-orange font-bold text-2xl">{BUSINESS_DATA.rating}★</p>
                  <p className="text-gray-400">({BUSINESS_DATA.reviews} avaliações)</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl border border-felix-purple/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=400&fit=crop"
                alt="Porsche Premium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-20 bg-felix-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossos Serviços</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              De diagnóstico com IA até monitoramento 24/7, tudo pensado na sua tranquilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="service-card group relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-felix-purple/30 to-felix-orange/20"></div>
                  <div className="service-card-overlay"></div>
                  <div className="service-card-content space-y-3">
                    <Icon className="w-8 h-8 text-felix-orange" />
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY FELIX SECTION */}
      <section id="sobre" className="py-20 bg-felix-dark">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-felix-orange/20 to-felix-purple/20 rounded-2xl border border-felix-purple/30 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-32 h-32 mx-auto text-felix-purple animate-pulse" />
                <p className="text-gray-400 mt-4">[Imagem do Workshop]</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2>Por Que Escolher <span className="text-felix-orange">Felix Garage</span>?</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-felix-purple/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-felix-orange font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Tecnologia + Experiência</h3>
                    <p className="text-gray-400">IA diagnóstica + 35 anos de expertise mecânica. O melhor dos dois mundos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-felix-purple/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-felix-orange font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Transparência Total</h3>
                    <p className="text-gray-400">Sem surpresas. Orçamentos precisos baseados em análise IA completa.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-felix-purple/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-felix-orange font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Serviços Premium</h3>
                    <p className="text-gray-400">Especialização em Audi, Porsche e veículos premium. Desde 2016.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-felix-purple/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-felix-orange font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Monitoramento 24/7</h3>
                    <p className="text-gray-400">Dashboard pessoal para acompanhar seu veículo em tempo real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-felix-black">
        <div className="section-container">
          <h2 className="text-center mb-16">O Que Nossos Clientes Dizem</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-felix-dark/50 border border-felix-purple/30 rounded-2xl p-8 hover:border-felix-orange/50 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-felix-orange text-felix-orange" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contato" className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-felix-orange rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="mb-6">Pronto para Diagnóstico Inteligente?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Agende seu horário via WhatsApp agora mesmo. Responderemos em minutos.
          </p>

          <button onClick={handleWhatsApp} className="btn-primary text-lg px-10 py-4">
            Conversar no WhatsApp
          </button>

          <p className="text-gray-400 mt-8 text-sm">
            Ou ligue: {BUSINESS_DATA.phone} | Email: {BUSINESS_DATA.email}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-felix-dark border-t border-felix-purple/20 py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-felix-orange font-bold mb-4">FELIX GARAGE</h3>
              <p className="text-gray-400 text-sm">Tecnologia de precisão e gestão inteligente em Sumaré.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-felix-orange transition">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-felix-orange transition">Sobre</a></li>
                <li><a href="#contato" className="hover:text-felix-orange transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 {BUSINESS_DATA.phone}</li>
                <li>📧 {BUSINESS_DATA.email}</li>
                <li>📍 {BUSINESS_DATA.address}</li>
                <li className="text-xs mt-3">⏰ {BUSINESS_DATA.hours}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-felix-orange transition">Instagram</a></li>
                <li><a href="#" className="hover:text-felix-orange transition">Facebook</a></li>
                <li><a href="#" className="hover:text-felix-orange transition">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-felix-purple/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Felix Garage. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <button
        onClick={handleWhatsApp}
        className="whatsapp-float"
        title="Conversar com Felix Garage no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </main>
  )
}
