import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, ArrowLeft, MessageSquare } from "lucide-react";
import { siteContent } from "@/data/content";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Detalhes de linha amarela */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD100]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD100]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10 p-8 rounded-2xl bg-[#121212] border border-[#242424] shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-[#1A1A1A] text-[#FFD100] border-2 border-[#FFD100] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(255,209,0,0.3)]">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-[#FFD100] bg-[#FFD100]/10 px-3 py-1 rounded-full border border-[#FFD100]/30">
          Erro 404 • Perímetro Não Localizado
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl font-black uppercase font-heading tracking-tight text-white">
          Página Fora de Rota
        </h1>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          O endereço que você tentou acessar não existe ou foi transferido. Retorne à base de operações da PM Neto ou fale conosco diretamente.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            className="font-black"
          >
            Voltar ao Início
          </Button>

          <Button
            href={whatsappUrl}
            isExternal
            variant="secondary"
            size="md"
            icon={<MessageSquare className="w-4 h-4 fill-current" />}
            iconPosition="left"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
