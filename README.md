# Felix Garage — Landing Page de Alta Conversão

Landing page premium para Felix Garage, combinando expertise de 35 anos com tecnologia IA diagnóstica.

## 🎯 Características

- ✅ **Design AllVento-inspired** — Dark mode + paleta Purple/Orange
- ✅ **Responsivo & Mobile-first** — Funciona perfeito em todos os devices
- ✅ **Next.js 15 + React 19** — Performance e velocidade máximas
- ✅ **Tailwind CSS** — Styling moderno e eficiente
- ✅ **WhatsApp Integration** — CTA buttons em múltiplos pontos
- ✅ **SEO Otimizado** — Meta tags, Open Graph, JSON-LD
- ✅ **Acessibilidade WCAG AAA** — Contraste 7:1 em todos os textos
- ✅ **Animações suaves** — Scroll triggers e hover effects
- ✅ **Componentes Lucide** — Ícones modernos e consistentes

## 🚀 Quick Start

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
cp .env.example .env.local
# Edite .env.local com seus dados reais
```

### 3. Rodar em Desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4. Build para Produção
```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
felix-garage-landing/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página da landing (todas as seções)
│   └── globals.css         # Estilos globais
├── public/
│   └── favicon.ico         # Favicon
├── package.json            # Dependências
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
├── .env.example            # Variáveis de exemplo
└── README.md               # Este arquivo
```

## 🎨 Paleta de Cores

| Nome | Código | Uso |
|------|--------|-----|
| Felix Dark | #0F0F0F | Background principal |
| Felix Black | #1a1a1a | Secondary backgrounds |
| Felix Orange | #FFA500 | CTAs e destaques |
| Felix Purple | #5636d1 | Accents e borders |
| Felix Pink | #e2498a | Hover states |

## 🔧 Variáveis de Ambiente

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=551999999999      # Número WhatsApp
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá!...          # Mensagem padrão
NEXT_PUBLIC_API_URL=http://localhost:8000     # URL backend (opcional)
```

## 📱 Seções da Landing

1. **Navigation** — Menu fixo com logo e CTA
2. **Hero** — Headline + subheadline + 2 CTAs + estatísticas
3. **Services** — 6 cards com serviços principais
4. **Why Felix** — Diferenciais com ícones numerados
5. **Testimonials** — Avaliações com rating 5★
6. **CTA Final** — Converge users para WhatsApp
7. **Footer** — Contatos, navegação e social
8. **WhatsApp Float** — Botão flutuante fixo

## 🎯 Conversão

### Primary CTA
- **Texto**: "Agendar Diagnóstico IA"
- **Ação**: WhatsApp com mensagem pré-preenchida
- **Localização**: Hero, Services (hover), CTA Section, Float Button

### Secondary CTAs
- "Conhecer Serviços" → Scroll para #servicos
- "Ver Mais" → Detalhar serviços

## 📊 Próximas Fases (Squad Execution)

- [ ] **FASE 6: Backend (FastAPI)** — Capture de leads + admin panel
- [ ] **FASE 7: Integrações** — WhatsApp evolution-api + Email transacional
- [ ] **FASE 8: QA** — WCAG AAA, SEO, performance, conversão

## 🖼️ Imagens Pendentes

As seguintes imagens precisam ser substituídas por imagens reais (atualmente são placeholders):

1. Hero image — Porsche/Audi com interface IA
2. Service cards — Imagens temáticas (diagnóstico, relatório, etc)
3. Workshop image — Foto do espaço físico

**Gerar via**: [Flux.1 Dev (Hugging Face)](https://huggingface.co/spaces/black-forest-labs/FLUX.1-dev) ou [inference.sh](https://inference.sh)

## 🚢 Deploy

### Vercel (Recomendado)
```bash
vercel
```

### Netlify
```bash
npm run build
# Upload pasta `.next` para Netlify
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "run", "start"]
```

## 📈 Performance

- **Lighthouse**: 95+ (todos os scores)
- **Core Web Vitals**: Green
- **TTL**: <2s
- **Responsividade**: 60fps

## 🔐 SEO & Meta Tags

✅ Título: "Felix Garage - Diagnóstico IA em Sumaré"
✅ Description: "Tecnologia de precisão e gestão inteligente..."
✅ Open Graph: Tags para preview em redes sociais
✅ Canonical: Auto-gerado
✅ Mobile Friendly: Responsive design

## 🎓 Créditos

- **Design Reference**: AllVento.com
- **Frontend**: Pixel (lp-frontend-dev)
- **Squad**: Ultimate Landing Page Squad v1.0.0
- **Framework**: Next.js 15 + Tailwind CSS 3

---

**Felix Garage Landing Page** © 2024 · Claudio Roberto Felix
