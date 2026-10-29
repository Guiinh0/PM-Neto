import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  empresa: z.string().optional(),
  telefone: z.string().min(8, "Telefone deve ser válido"),
  email: z.string().email("E-mail inválido"),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().min(5, "Mensagem deve conter detalhes da necessidade"),
  lgpdConsent: z.boolean().refine((val) => val === true, "É obrigatório aceitar o consentimento LGPD"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Variáveis de ambiente opcionais para integração com Webhook (Slack/Discord/CRM) ou E-mail
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const emailRecipient = process.env.CONTACT_EMAIL_RECIPIENT || "contato@pmnetoserv.com.br";

    // Se houver webhook configurado, envia payload
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚨 **Novo Pedido de Orçamento - Site PM Neto**\n**Nome:** ${validatedData.nome}\n**Empresa:** ${validatedData.empresa || "Não informada"}\n**Telefone/WhatsApp:** ${validatedData.telefone}\n**E-mail:** ${validatedData.email}\n**Serviço:** ${validatedData.servico}\n**Mensagem:** ${validatedData.mensagem}`,
          }),
        });
      } catch (webhookError) {
        console.error("Falha ao disparar webhook de contato:", webhookError);
      }
    }

    // Log estruturado no servidor
    console.log("[NOVO CONTATO RECEBIDO]", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      destination: emailRecipient,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Sua solicitação foi enviada com sucesso! Nossa equipe entrará em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Erro interno ao processar formulário:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor ao processar o pedido." },
      { status: 500 }
    );
  }
}
