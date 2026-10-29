"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";

export const Depoimentos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = siteContent.depoimentos;

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  };

  const current = items[currentIndex];

  return (
    <Section id="depoimentos" variant="black">
      <Heading
        badge="Prova Social & Confiança"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            O que Nossos <span className="text-[#FFD100]">Clientes Dizem</span>
          </>
        }
        subtitle="Relações pautadas pela transparência, segurança inabalável e respeito diário aos nossos parceiros."
      />

      <div className="max-w-4xl mx-auto">
        {/* Card do Depoimento com Efeito Glass escuro */}
        <div className="relative rounded-2xl bg-[#141414] border border-[#262626] p-8 sm:p-12 shadow-2xl">
          {/* Ícone de Aspas Amarelo */}
          <div className="absolute top-6 right-8 text-[#FFD100]/20 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          {/* 5 Estrelas */}
          <div className="flex items-center gap-1 mb-6 text-[#FFD100]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">
              Excelência Operacional
            </span>
          </div>

          {/* Conteúdo do Depoimento */}
          <blockquote className="text-lg sm:text-2xl text-gray-200 font-medium leading-relaxed italic">
            &ldquo;{current.content}&rdquo;
          </blockquote>

          {/* Dados do Autor */}
          <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-black text-white uppercase font-heading">
                  {current.name}
                </h4>
              </div>
              <p className="text-xs text-[#FFD100] font-semibold mt-0.5">
                {current.role} • {current.segment}
              </p>
              <p className="text-xs text-gray-400">
                {current.city}
              </p>
            </div>

            {/* Controles do Carrossel */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-lg bg-[#1E1E1E] text-white hover:bg-[#FFD100] hover:text-[#0A0A0A] border border-[#2E2E2E] transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-gray-400 px-2">
                {currentIndex + 1} / {items.length}
              </span>
              <button
                onClick={next}
                className="p-3 rounded-lg bg-[#1E1E1E] text-white hover:bg-[#FFD100] hover:text-[#0A0A0A] border border-[#2E2E2E] transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Faixa de logos de segmentos atendidos (Placeholders elegantes) */}
        <div className="mt-14 pt-10 border-t border-[#1C1C1C] text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            Segurança em Operações Críticas no Litoral de São Paulo
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-60">
            {["Terminais Portuários", "Condomínios de Luxo", "Centros Logísticos", "Polos Industriais"].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#111111] border border-[#222222] text-xs font-black uppercase text-gray-400 font-heading tracking-wider"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
