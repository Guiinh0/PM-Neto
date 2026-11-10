# PENDÊNCIAS E GUIA DE CUSTOMIZAÇÃO — SITE PM NETO

Este documento relaciona todos os dados, conteúdos e configurações que utilizam marcadores `[PREENCHER]` ou necessitam de validação com os dados oficiais da empresa **PM Neto – Prestação de Serviços (Pietro Maria Neto Vigilância e Segurança)**.

Todos os textos do site estão centralizados no arquivo:
👉 `src/data/content.ts`

---

## 1. Dados Cadastrais e Contatos Oficiais (`src/data/content.ts`) — ✅ CONCLUÍDO

| Item | Valor Oficial Cadastrado | Status |
| :--- | :--- | :---: |
| **Razão Social** | `Pietro Maria Neto Segurança e Vigilância LTDA` | ✅ Atualizado |
| **Nome Fantasia** | `PM Neto - Segurança e Vigilância` | ✅ Atualizado |
| **CNPJ** | `56.161.248/0001-99` | ✅ Atualizado |
| **WhatsApp Oficial** | `(13) 99786-7173` (link direto: `5513997867173`) | ✅ Atualizado |
| **Telefone da Central** | `(13) 99786-7173` | ✅ Atualizado |
| **E-mail Comercial** | `contato@pmnetoserv.com.br` (backup: `advogadodoutorxavier@gmail.com`) | ✅ Atualizado |
| **Endereço da Sede** | `Rua Manoel Gajo, 892 - Centro, Bertioga - SP, CEP 11250-462` | ✅ Atualizado |
| **Cidades Atendidas** | `Bertioga, Riviera de São Lourenço, Santos, Guarujá, São Sebastião e Litoral Paulista` | ✅ Atualizado |
| **Horário de Atendimento** | `Plantão Operacional 24h / 7 dias` | ✅ Atualizado |

---

## 2. Indicadores e Métricas Oficiais (`metrics` em `content.ts`) — ✅ ATUALIZADO

Os números no Hero foram alinhados com o histórico real da empresa:

* **Tempo de Atuação:** `2+ anos no Litoral` (compatível com a data de registro e atuação).
* **Tempo de Diagnóstico / Resposta:** `Até 6h` para vistoria técnica inicial nos postos do Litoral de SP.

---

## 3. Biografia e Perfil do Fundador Pietro Maria Neto (`src/components/sections/Depoimentos.tsx`)

* [x] **Seção de Liderança Editorial:** Estruturada com foto em preto e branco com alto contraste, badge discreto de *Supervisão Direta* e tipografia editorial.
* [ ] **Foto Oficial do Fundador:** O site conta com fotografia de referência em `public/images/fundador.jpg`. Se desejar, pode substituir futuramente pelo retrato institucional definitivo de Pietro Maria Neto mantendo o mesmo nome de arquivo.

---

## 4. Logotipo e Identidade Visual (`public/`) — ✅ CONCLUÍDO

* [x] **Logotipo Oficial:** `public/logo.svg` criado com réplica fiel do emblema oficial (escudo/cadeado 3D, colar chevron amarelo ouro, flancos amarelo e branco, fechadura branca e tipografia institucional).
* [x] **Favicon Oficial:** `public/favicon.svg`, `src/app/icon.svg` e `src/app/favicon.ico` com o selo circular escuro do Instagram.
* [x] **Ícone Mobile (Apple Touch):** `public/apple-icon.png` em alta definição.
* [x] **Cena 3D do Escudo no Hero:** Three.js com iluminação de estúdio, oscilação suave, reflexo amaciado e fallback automático para poster SVG em conexões lentas ou economia de dados.

---

## 5. Depoimentos e Prova Social (`depoimentos` em `content.ts`) — ✅ ATUALIZADO

* [x] **Carrossel por Segmento:** Estruturado com abas de seleção e navegação para os 3 pilares da empresa:
  * 01 // Condomínio Alto Padrão (Carlos Eduardo Mendes - Riviera de São Lourenço)
  * 02 // Operação Náutica & Marina (Roberto Vianna - Guarujá)
  * 03 // Patrimonial & Logística (Fernanda Alencar - Santos)
* [ ] **Substituição por Nomes Reais de Parceiros (Opcional):** Você pode trocar os nomes dos responsáveis caso prefira citar clientes parceiros reais que autorizarem o uso da marca.

---

## 6. Integrações do Formulário de Contato (`.env.local`)

O formulário em `/api/contact` está preparado para envio via Webhook e E-mail:

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis opcionais:

```env
# Webhook para notificação instantânea em canal do Discord, Slack ou CRM
CONTACT_WEBHOOK_URL="https://discord.com/api/webhooks/..."

# E-mail que deve receber o alerta dos leads
CONTACT_EMAIL_RECIPIENT="contato@pmnetoserv.com.br"
```

---

## 7. Como Rodar o Projeto Localmente

1. Certifique-se de ter o Node.js 18+ instalado.
2. Instale as dependências:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador:
   `http://localhost:3000`

---

## 8. Como Publicar na Vercel (Produção)

1. Suba o código para um repositório no GitHub ou GitLab.
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta.
3. Clique em **"Add New Project"** e selecione o repositório `SITE PM NETO`.
4. O framework Next.js será detectado automaticamente.
5. Se for utilizar webhooks de formulário, adicione as variáveis de ambiente em **Environment Variables**.
6. Clique em **Deploy**. O site estará no ar em poucos segundos com certificado SSL e CDN global automática!
