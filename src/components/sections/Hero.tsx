"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Shield, MessageSquare, ArrowDown, ChevronRight, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <section id="inicio" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Imagem de Fundo com Alta Resolução */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Operação de Segurança Tática e Vigilância no Litoral de SP - PM Neto"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
        />
        {/* Degradê escuro de sobreposição cinematográfica */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      {/* Faixas decorativas geométricas e cortes diagonais */}
      <div className="absolute top-0 right-0 w-48 sm:w-80 h-1.5 bg-[#FFD100] z-10 shadow-[0_0_20px_#FFD100]" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-1.5 bg-[#FFD100] z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 sm:pt-16">
        <div className="max-w-3xl">
          {/* Badge de Confiança */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" icon={<Shield className="w-3.5 h-3.5 text-[#FFD100]" />}>
              {siteContent.hero.badge}
            </Badge>
          </div>

          {/* Título Principal H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
            {siteContent.hero.titlePrimary}{" "}
            <span className="text-[#FFD100] relative inline-block">
              {siteContent.hero.titleHighlight}
              {/* Linha sublinhada estilizada */}
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#FFD100]/20 -z-10 -rotate-1" />
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal">
            {siteContent.hero.subtitle}
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              iconPosition="left"
              className="font-black shadow-[0_0_25px_rgba(255,209,0,0.4)]"
            >
              {siteContent.hero.ctaPrimary}
            </Button>

            <Button
              href="#servicos"
              variant="secondary"
              size="lg"
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
            >
              {siteContent.hero.ctaSecondary}
            </Button>
          </div>

          {/* Faixa de Confiança Embaixo do Hero */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siteContent.hero.trustStrip.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFD100] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-300 uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador sutil de rolagem */}
      <a
        href="#metricas"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-[#FFD100] transition-colors text-xs uppercase tracking-widest"
        aria-label="Rolar para os números de confiança"
      >
        <span>Rolar</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#FFD100]" />
      </a>
    </section>
  );
};
