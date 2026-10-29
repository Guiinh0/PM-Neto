"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { IconHelper } from "../ui/IconHelper";
import { CheckCircle2 } from "lucide-react";

export const ComoFunciona: React.FC = () => {
  return (
    <Section id="como-funciona" variant="black">
      <Heading
        badge="Metodologia em 4 Etapas"
        badgeIcon={<CheckCircle2 className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Quem entende de gestão, <span className="text-[#FFD100]">investe em segurança</span>.
          </>
        }
        subtitle="Porque prejuízo não se recupera, se evita. Conheça nosso fluxo estruturado desde o primeiro contato até a fiscalização diária no seu posto."
      />

      {/* Linha do tempo em 4 passos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {siteContent.comoFunciona.map((step, idx) => (
          <div
            key={step.step}
            className="flex flex-col rounded-xl bg-[#131313] border border-[#242424] p-6 relative hover:border-[#FFD100]/60 transition-all duration-300 group hover:-translate-y-1"
          >
            {/* Número grande no fundo */}
            <div className="text-5xl font-black text-[#222222] group-hover:text-[#FFD100]/20 font-heading tracking-tight select-none transition-colors">
              {step.step}
            </div>

            {/* Ícone e Rótulo */}
            <div className="mt-4 flex items-center justify-between">
              <div className="p-3 rounded-lg bg-[#1F1F1F] text-[#FFD100] border border-[#2E2E2E] group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A] transition-colors">
                <IconHelper name={step.icon} className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD100]">
                {step.number}
              </span>
            </div>

            {/* Título do Passo */}
            <h3 className="mt-5 text-lg font-black uppercase text-white tracking-tight font-heading group-hover:text-[#FFD100] transition-colors">
              {step.title}
            </h3>

            {/* Descrição */}
            <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
              {step.description}
            </p>

            {/* Linha amarela na base do card */}
            <div className="mt-6 pt-3 border-t border-[#1E1E1E]">
              <div className="w-6 h-1 bg-[#2E2E2E] group-hover:w-full group-hover:bg-[#FFD100] transition-all duration-500 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
