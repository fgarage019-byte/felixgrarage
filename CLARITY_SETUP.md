# 📊 Microsoft Clarity — Mapa de Calor Setup

**Status**: ✅ Integrado | ⏳ Precisa de Project ID

---

## 🔧 O QUE FOI FEITO

O script do Microsoft Clarity foi **integrado no layout** (`app/layout.tsx`).

Agora você só precisa adicionar seu **Project ID**.

---

## 📋 COMO ATIVAR

### **Passo 1: Criar Conta no Microsoft Clarity**

1. Acesse: https://clarity.microsoft.com
2. Clique em **"Get Started"**
3. Faça login com Microsoft Account (ou crie uma)
4. Selecione seu país
5. Aceite os termos

### **Passo 2: Criar Projeto**

1. Clique em **"New Project"**
2. Nome: `Felix Garage`
3. URL: `http://localhost:3001` (ou seu domínio real depois)
4. Clique em **"Create Project"**

### **Passo 3: Copiar Project ID**

1. Você receberá um **Project ID** (números)
2. Exemplo: `pr1234567890`

### **Passo 4: Adicionar ao Arquivo**

Abra `app/layout.tsx` e substitua:

```javascript
// ANTES:
"https://www.clarity.ms/tag/CLARITY_PROJECT_ID"

// DEPOIS:
"https://www.clarity.ms/tag/pr1234567890"  // ← Seu ID aqui
```

---

## ✅ PRONTO!

Após adicionar o Project ID, o Clarity começará a rastrear:

```
✓ Heatmaps (onde usuários clicam)
✓ Session Recordings (vídeos do comportamento)
✓ Rage Clicks (frustrações)
✓ Dead Clicks (cliques em áreas não clicáveis)
✓ Scroll Maps (até onde as pessoas rolam)
✓ Analytics básico
```

---

## 📊 ACESSAR DASHBOARD

1. Volte para: https://clarity.microsoft.com
2. Clique em seu projeto
3. Veja em tempo real:
   - Heatmaps
   - Vídeos de sessões
   - Eventos de usuário

---

## 💡 DICA

Após publicar em produção:

1. Atualize a URL do projeto para seu domínio real
2. O Clarity começará a coletar dados de visitantes reais
3. Use os insights para otimizar conversão

---

**Clarity Integration**: ✅ Ativada
**Status**: Aguardando Project ID
**Próximo**: Adicionar ID e validar no dashboard

