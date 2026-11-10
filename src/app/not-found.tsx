import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/content";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-xl w-full relative z-10 p-8 sm:p-12 rounded-2xl bg-[#161616] border border-white/[0.08] shadow-2xl">
        <span className="font-mono text-7xl sm:text-8xl font-light text-stroke-dark block leading-none mb-6 select-none">
          404
        </span>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD100] block mb-2">
          [ PERÍMETRO NÃO LOCALIZADO ]
        </span>

        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F5]">
          Página fora de rota
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
          O endereço que você tentou acessar não existe ou foi transferido. Retorne à página inicial da PM Neto ou acione nosso plantão operacional.
        </p>

        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            Voltar ao Início
          </Button>

          <Button
            href={whatsappUrl}
            isExternal
            variant="secondary"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
