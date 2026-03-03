/**
 * FELIX GARAGE — Configuração de Dados
 *
 * ⚠️ DADOS DE EXEMPLO — ATUALIZAR COM DADOS REAIS DEPOIS
 *
 * Arquivo centralizado para facilitar atualizações posteriores.
 * Basta editar este arquivo e a landing page será atualizada automaticamente (hot reload).
 */

export const businessConfig = {
  // Informações Básicas
  name: 'Felix Garage',
  tagline: 'Tecnologia de Precisão e Gestão Inteligente em Sumaré',
  description: 'Oficina especializada em veículos premium com diagnóstico IA integrado. 35 anos de expertise + tecnologia automação Athena OS.',

  // Contato
  phone: '(19) 99567-9592',
  whatsapp: '5519995679592', // ✅ ATUALIZADO
  email: 'contato@felixgarage.com.br',
  address: 'R. Vicente Rodrigues, 502 - Jardim Bom Retiro (Nova Veneza), Sumaré - SP 13181-654',

  // Horários
  hours: {
    weekday: '8h às 18h',
    saturday: '8h às 13h',
    sunday: 'Fechado',
  },
  hoursDisplay: 'Seg-Sex: 8h às 18h | Sáb: 8h às 13h | Dom: Fechado',

  // Estatísticas
  experience: 35,
  clients: 1200,
  rating: 4.8,
  reviews: 127,

  // SEO & Meta
  seoTitle: 'Felix Garage - Diagnóstico IA em Sumaré | Audi | Porsche',
  seoDescription: 'Oficina premium com diagnóstico IA em minutos. 35 anos de expertise. Agende seu diagnóstico em Sumaré.',
  seoKeywords: ['oficina sumaré', 'diagnóstico IA', 'audi', 'porsche', 'manutenção premium'],

  // Redes Sociais
  social: {
    instagram: 'https://instagram.com/felixgarage', // ← ATUALIZAR
    facebook: 'https://facebook.com/felixgarage', // ← ATUALIZAR
    youtube: 'https://youtube.com/@felixgarage', // ← ATUALIZAR
  },
}

/**
 * SERVIÇOS - Atualize com seus serviços reais
 */
export const services = [
  {
    id: 1,
    icon: 'Zap',
    title: 'Diagnóstico IA em Minutos',
    description: 'Detecta problemas em sua máquina em minutos, não em horas. Análise completa do motor, eletrônica e sistemas integrados.',
  },
  {
    id: 2,
    icon: 'FileText',
    title: 'Relatório Digital Completo',
    description: 'Receba um documento detalhado com imagens, gráficos e recomendações. Você entende exatamente o que seu carro precisa.',
  },
  {
    id: 3,
    icon: 'DollarSign',
    title: 'Preço Justo, Zero Surpresas',
    description: 'Orçamento preciso baseado em IA. Sem mistério. Sem custos ocultos. Transparência total.',
  },
  {
    id: 4,
    icon: 'Users',
    title: 'Especialista ao Seu Lado',
    description: 'Não é só máquina. Nossos técnicos têm 35 anos de experiência. Eles validam, ajustam e cuidam do seu carro.',
  },
  {
    id: 5,
    icon: 'TrendingUp',
    title: 'Manutenção Preventiva Inteligente',
    description: 'IA prevê problemas antes de acontecer. Economize com manutenção estratégica.',
  },
  {
    id: 6,
    icon: 'BarChart3',
    title: 'Monitoramento Pós-Serviço',
    description: 'Dashboard pessoal acompanhando seu veículo 24/7. Você sabe que tudo está bem.',
  },
]

/**
 * DIFERENCIAIS - Atualize com seus diferenciais reais
 */
export const differentials = [
  {
    number: 1,
    title: 'Tecnologia + Experiência',
    description: 'IA diagnóstica + 35 anos de expertise mecânica. O melhor dos dois mundos.',
  },
  {
    number: 2,
    title: 'Transparência Total',
    description: 'Sem surpresas. Orçamentos precisos baseados em análise IA completa.',
  },
  {
    number: 3,
    title: 'Serviços Premium',
    description: 'Especialização em Audi, Porsche e veículos premium. Desde 2016.',
  },
  {
    number: 4,
    title: 'Monitoramento 24/7',
    description: 'Dashboard pessoal para acompanhar seu veículo em tempo real.',
  },
]

/**
 * TESTIMONIALS - Atualize com depoimentos reais de clientes
 */
export const testimonials = [
  {
    author: 'Carlos M.',
    role: 'Proprietário Audi A4',
    text: 'Trouxe meu Audi aqui e fiquei impressionado com a precisão do diagnóstico. A IA identificou algo que mecânico em SP tinha deixado passar. Excelente atendimento!',
    rating: 5,
  },
  {
    author: 'Roberto F.',
    role: 'Empresário - Proprietário Porsche',
    text: '35 anos de experiência + tecnologia IA? Isso é o futuro aqui em Sumaré. Recomendo Felix Garage para qualquer um com carro premium. Profissionalismo garantido.',
    rating: 5,
  },
]

/**
 * COMO ATUALIZAR OS DADOS:
 *
 * 1. Abra este arquivo (app/config.ts)
 * 2. Edite os valores entre aspas
 * 3. Salve (Ctrl+S)
 * 4. A landing page atualiza automaticamente em http://localhost:3000
 *
 * DADOS PRIORITÁRIOS:
 * - whatsapp: Seu número WhatsApp real (com DDI)
 * - phone: Seu telefone comercial
 * - email: Seu email comercial
 * - address: Seu endereço completo
 * - testimonials: Depoimentos reais de clientes
 * - services: Seus serviços reais
 */
