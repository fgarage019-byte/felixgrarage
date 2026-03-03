# 📝 Como Atualizar os Dados da Felix Garage

**Status Atual**: Usando dados de exemplo
**Próxima Ação**: Substituir por dados reais

---

## 🎯 Arquivos com Dados

### **1. `app/config.ts` ← PRINCIPAL**
```typescript
// Dados centralizados e fáceis de atualizar

businessConfig = {
  phone: '(19) 3861-2345',      // ← Seu telefone
  whatsapp: '5519987654321',    // ← Seu WhatsApp
  email: 'seu_email@...com',    // ← Seu email
  address: 'Rua ..., Sumaré',   // ← Seu endereço
  ...
}

services = [...]  // Seus 6 serviços
testimonials = [...] // Depoimentos reais
```

### **2. `.env.local`**
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=seu_número_aqui
```

---

## 📋 Checklist de Atualização

### **DADOS CRÍTICOS (atualizar ANTES de publicar)**

- [ ] **Número WhatsApp** → `app/config.ts` linha ~12
  ```typescript
  whatsapp: '55 19 98765-4321',  // Seu número com DDI
  ```

- [ ] **Telefone Comercial** → `app/config.ts` linha ~10
  ```typescript
  phone: '(19) 3861-2345',
  ```

- [ ] **Email** → `app/config.ts` linha ~11
  ```typescript
  email: 'contato@felixgarage.com.br',
  ```

- [ ] **Endereço Completo** → `app/config.ts` linha ~12
  ```typescript
  address: 'Rua das Flores, 123 - Sumaré, SP 13170-000',
  ```

### **DADOS IMPORTANTES (atualizar após publicação)**

- [ ] **Estatísticas Reais** → `app/config.ts` linhas 30-33
  ```typescript
  experience: 35,    // Seus anos de experiência
  clients: 1200,     // Seus clientes atendidos
  rating: 4.8,       // Seu rating no Google
  reviews: 127,      // Número de avaliações
  ```

- [ ] **Testimonials** → `app/config.ts` linhas 48-66
  ```typescript
  testimonials = [
    {
      author: 'Nome Cliente',
      role: 'Profissão/Empresa',
      text: 'Seu depoimento aqui...',
      rating: 5,
    },
    ...
  ]
  ```

- [ ] **Serviços** → `app/config.ts` linhas 36-62
  ```typescript
  services = [
    {
      title: 'Seu Serviço 1',
      description: 'Descrição completa...',
    },
    ...
  ]
  ```

### **DADOS OPCIONAIS (redes sociais)**

- [ ] Redes Sociais → `app/config.ts` linhas 26-30
  ```typescript
  social: {
    instagram: 'https://instagram.com/seu_perfil',
    facebook: 'https://facebook.com/seu_perfil',
    youtube: 'https://youtube.com/seu_canal',
  }
  ```

---

## 🔄 PROCESSO DE ATUALIZAÇÃO

### **Passo 1: Abrir o arquivo de configuração**
```bash
# Abra C:\Users\ACER_2025\felix-aios-gm\projects\felix-garage-landing\app\config.ts
```

### **Passo 2: Editar os dados**
```typescript
// ANTES:
phone: '(19) 3861-2345',

// DEPOIS:
phone: '(19) SEU_TELEFONE_AQUI',
```

### **Passo 3: Salvar (Ctrl+S)**
A página será atualizada automaticamente em:
```
http://localhost:3000
```

### **Passo 4: Verificar no navegador**
Recarregue a página (F5) e veja as mudanças ao vivo!

---

## 💡 DICAS

✅ **Use o Ctrl+F** para encontrar rapidamente:
- `ATUALIZAR` → linhas que precisam ser atualizadas
- `whatsapp` → linha do número WhatsApp
- `email` → linha do email

✅ **Hot Reload Ativo**: Edite e salve, a página atualiza sozinha (no servidor `npm run dev`)

✅ **Faça um teste**: Teste o WhatsApp clicando em "Agendar" na landing para confirmar que o número está correto

---

## 📱 TESTANDO AS ATUALIZAÇÕES

### **Testar WhatsApp**
1. Clique em "Agendar Diagnóstico IA"
2. Confirme que abre WhatsApp com seu número
3. Verifique a mensagem pré-preenchida

### **Testar Contatos**
1. Rolle até o footer
2. Confirme telefone, email e endereço
3. Clique em links para validar

### **Testar no Celular**
```
http://172.30.112.1:3000
```

---

## 🚀 QUANDO PUBLICAR

**Antes de fazer deploy para produção**:

- [ ] Todos os dados críticos atualizados
- [ ] Testou WhatsApp (abre corretamente)
- [ ] Testou contatos (números e links corretos)
- [ ] Adicionou imagens reais (removeu placeholders)
- [ ] Verificou em mobile
- [ ] Testou links de redes sociais

---

## 📞 LEMBRETES

> ⚠️ **NÃO ESQUECER DE ATUALIZAR O WHATSAPP!**
> Sem isso, clientes não conseguirão entrar em contato.

> 💡 **Use dados reais de clientes** nos testimonials
> Depoimentos fictícios prejudicam a credibilidade

> 🎨 **Adicione fotos de qualidade** nos placeholders
> Imagens profissionais aumentam conversão em 40%

---

**Status**: ✅ Landing pronta para dados reais
**Próximo Passo**: Coletar dados da Felix Garage e atualizar `app/config.ts`

---

*Documento de Atualização — Felix Garage Landing Page*
