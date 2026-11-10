"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/content";

export const ComoFunciona: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollLineWidth, setScrollLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progresso do scroll dentro da seção
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.2;
      const current = rect.top;

      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollLineWidth(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-28 sm:py-40 relative bg-[#161616] text-[#F5F5F5] border-t border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-20 sm:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] block mb-3 font-mono">
              [ 02 // METODOLOGIA ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F5F5]">
              Como <span className="text-[#FFD100]">funciona</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-md font-light leading-relaxed">
            Fluxo estruturado e sem ruídos, da análise inicial à presença operacional definitiva.
          </p>
        </div>

        {/* Linha de progresso horizontal amarela conectando os passos */}
        <div className="relative mb-16 hidden md:block">
          <div className="h-[2px] w-full bg-white/[0.1] absolute top-1/2 -translate-y-1/2" />
          <div
            className="h-[2px] bg-[#FFD100] absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-out shadow-[0_0_12px_#FFD100]"
            style={{ width: `${scrollLineWidth}%` }}
          />
        </div>

        {/* 3 Passos Lineares com Números de 80px em Amarelo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 relative">
          {siteContent.comoFunciona.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col pt-6 md:pt-0 border-t md:border-t-0 border-white/[0.08] group"
            >
              {/* Número Gigante de 80px em Amarelo */}
              <span className="font-mono text-6xl sm:text-7xl md:text-8xl font-light text-[#FFD100] tracking-tighter mb-4 select-none leading-none">
                {step.number}
              </span>

              <h3 className="text-2xl sm:text-3xl font-normal text-[#F5F5F5] tracking-tight mb-3 group-hover:text-[#FFD100] transition-colors">
                {step.title}
              </h3>

              <p className="text-base text-[#8A8A8A] leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Linha discreta de Segmentos */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
          <span>Aplicações</span>
          <span className="text-[#F5F5F5]">{siteContent.comoFunciona.segments}</span>
        </div>
      </div>
    </section>
  );
};
