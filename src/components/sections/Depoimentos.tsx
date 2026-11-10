"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export const Depoimentos: React.FC = () => {
  const testimonials = siteContent.depoimentos;
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex] || testimonials[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="lideranca"
      className="py-28 sm:py-40 relative bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] block mb-3 font-mono">
              [ 03 // LIDERANÇA & RECONHECIMENTO ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F5F5]">
              Presença que <span className="text-stroke font-normal">Protege</span>
            </h2>
          </div>

          {/* Seletor de Segmento dos Depoimentos */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Depoimentos por segmento">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-[3px] border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FFD100] text-[#0A0A0A] border-[#FFD100] font-medium"
                      : "bg-[#161616] text-[#8A8A8A] border-white/[0.08] hover:text-[#F5F5F5] hover:border-white/20"
                  }`}
                >
                  {`0${idx + 1} // ${item.segment}`}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Foto de Pietro Maria Neto em Preto e Branco */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-white/[0.12] bg-[#161616] group">
              <Image
                src="/images/fundador.jpg"
                alt="Pietro Maria Neto - Fundador e Diretor de Operações"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-[1.15] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90" />

              {/* Selo Superior Discreto */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-[#0A0A0A]/80 border border-white/[0.12] backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD100]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5F5F5]">
                  Supervisão Direta
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                <span className="block text-[#F5F5F5] font-sans font-medium text-base mb-0.5">
                  Pietro Maria Neto
                </span>
                <span className="text-[#FFD100]/90">Diretor Geral de Operações</span>
              </div>
            </div>
          </div>

          {/* Depoimento ao lado com Aspas Amarelas Gigantes e Navegação */}
          <div className="lg:col-span-7 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-2">
                {/* Aspas decorativas amarelas gigantes */}
                <span
                  aria-hidden="true"
                  className="text-7xl sm:text-8xl md:text-9xl font-serif text-[#FFD100]/25 select-none leading-none -mb-8 sm:-mb-12"
                >
                  &ldquo;
                </span>

                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD100] px-3 py-1 rounded-[3px] bg-[#FFD100]/10 border border-[#FFD100]/20">
                  {current.segment}
                </span>
              </div>

              <blockquote
                key={current.id}
                className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F5F5] leading-snug tracking-tight relative z-10 min-h-[160px] sm:min-h-[180px] flex items-center"
              >
                {current.quote}
              </blockquote>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm font-light">
                <span className="text-[#FFD100] font-medium font-sans text-base">
                  {current.author}
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="text-[#8A8A8A]">
                  {current.role} — {current.location}
                </span>
              </div>

              {/* Controles Anteriores / Próximos */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Depoimento anterior"
                  className="w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-[#F5F5F5] hover:bg-[#FFD100] hover:border-[#FFD100] hover:text-[#0A0A0A] transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#8A8A8A] px-2">
                  0{activeIndex + 1} / 0{testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo depoimento"
                  className="w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-[#F5F5F5] hover:bg-[#FFD100] hover:border-[#FFD100] hover:text-[#0A0A0A] transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
