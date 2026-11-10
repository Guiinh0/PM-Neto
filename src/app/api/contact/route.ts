import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  telefone: z.string().min(8, "Telefone deve ser válido com DDD"),
  mensagem: z.string().min(5, "Mensagem deve conter detalhes da necessidade"),
  empresa: z.string().optional().default(""),
  email: z.string().optional().default(""),
  servico: z.string().optional().default("Contato Geral"),
  lgpdConsent: z.boolean().optional().default(true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const emailRecipient = process.env.CONTACT_EMAIL_RECIPIENT || "contato@pmnetoserv.com.br";

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚨 **Novo Contato - Site PM Neto**\n**Nome:** ${validatedData.nome}\n**Telefone/WhatsApp:** ${validatedData.telefone}\n**Especialidade:** ${validatedData.servico}\n**Mensagem:** ${validatedData.mensagem}`,
          }),
        });
      } catch (webhookError) {
        console.error("Falha ao disparar webhook de contato:", webhookError);
      }
    }

    console.log("[NOVO CONTATO RECEBIDO]", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      destination: emailRecipient,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Sua solicitação foi enviada com sucesso! Nossa equipe retornará em breve.",
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
