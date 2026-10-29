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

## 2. Indicadores e Números Reais (`metrics` em `content.ts`)

Os números na seção de confiança possuem animação numérica e atualmente usam estimativas para demonstração:

- [ ] **Anos de Atuação:** Atualmente marcado como `8+`. Atualizar com o ano de fundação ou tempo exato.
- [ ] **Postos Atendidos:** Atualmente marcado como `120+`. Atualizar com a quantidade aproximada de postos ativos.
- [ ] **Profissionais Treinados:** Atualmente marcado como `250+`. Atualizar com o efetivo cadastrado.

---

## 3. Biografia e Perfil do Fundador Pietro Maria Neto (`sobre` em `content.ts`)

- [ ] **Histórico Profissional:** Detalhar a trajetória do fundador Pietro Maria Neto (cursos táticos, corporações ou certificações da Polícia Federal).
- [ ] **Foto Oficial do Fundador:** O site conta com fotografia tática em `public/images/fundador.jpg`. Substituir pelo retrato oficial de Pietro Maria Neto quando disponível.

---

## 4. Logotipo e Identidade Visual (`public/`) — ✅ CONCLUÍDO

- [x] **Logotipo Oficial:** `public/logo.svg` criado com réplica fiel do emblema oficial (escudo/cadeado 3D, colar chevron amarelo ouro, flancos amarelo e branco, fechadura branca e tipografia institucional).
- [x] **Favicon Oficial:** `public/favicon.svg`, `src/app/icon.svg` e `src/app/favicon.ico` com o selo circular escuro do Instagram.
- [x] **Ícone Mobile (Apple Touch):** `public/apple-icon.png` em alta definição.

---

## 5. Depoimentos e Prova Social (`depoimentos` em `content.ts`)

- [ ] **Depoimentos Reais:** Os 3 depoimentos na home estão identificados com `[EXEMPLO - PLACEHOLDER]` (Carlos Eduardo Mendes, Mariana Vasconcelos, Roberto S. Almeida). Substituir por relatos reais de síndicos, diretores de empresas ou clientes parceiros com autorização de uso.
- [ ] **Logos de Clientes Parceiros:** Opcional adicionar logotipos em escala de cinza/amarelo na seção de depoimentos.

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
