"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { Button } from "../ui/Button";
import { AlertTriangle, MessageSquare } from "lucide-react";

export const YellowBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vi a mensagem de prevenção no site da PM Neto e gostaria de falar sobre segurança para meu negócio/condomínio."
  )}`;

  return (
    <section className="bg-[#FFD100] text-[#0A0A0A] py-14 sm:py-20 relative overflow-hidden">
      {/* Detalhe de textura tática com faixas pretas diagonais sutis nos cantos */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none hazard-stripes" />
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 pointer-events-none hazard-stripes" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Ícone de alerta tático */}
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] text-[#FFD100] text-xs font-black uppercase tracking-widest shadow-md">
          <AlertTriangle className="w-4 h-4 fill-current text-[#FFD100]" />
          <span>Diretriz Operacional PM Neto</span>
        </div>

        {/* Título de Alto Impacto */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0A0A0A] max-w-4xl leading-[1.05] font-heading">
          &ldquo;{siteContent.company.impactPhrase}&rdquo;
        </h2>

        {/* Subtítulo complementar */}
        <p className="mt-4 text-base sm:text-lg font-semibold text-[#0A0A0A]/85 max-w-2xl">
          Quem entende de gestão sabe que o prejuízo não se recupera: ele se evita. Proteja seu patrimônio com quem entende a fundo o Litoral de São Paulo.
        </p>

        {/* Botão Preto de Contraste */}
        <div className="mt-8">
          <Button
            href={whatsappUrl}
            variant="black"
            size="lg"
            icon={<MessageSquare className="w-5 h-5 fill-current" />}
            iconPosition="left"
            className="shadow-2xl hover:scale-105 font-black text-sm sm:text-base normal-case tracking-normal"
          >
            Prevenção sempre será mais barata que o prejuízo — fale com a gente
          </Button>
        </div>
      </div>
    </section>
  );
};
