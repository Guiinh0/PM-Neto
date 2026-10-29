"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { IconHelper } from "../ui/IconHelper";
import { Badge } from "../ui/Badge";
import { Shield, Target, Eye, Award, CheckCircle } from "lucide-react";

export const Sobre: React.FC = () => {
  return (
    <Section id="sobre" variant="dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Foto do Fundador com Moldura Diagonal Amarela */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            {/* Fundo geométrico com moldura e corte diagonal */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FFD100] rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-[#FFD100]/10 rounded-2xl -z-10" />

            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-[#2E2E2E] shadow-2xl bg-[#141414]">
              <Image
                src="/images/fundador.jpg"
                alt="Pietro Maria Neto - Fundador da PM Neto Prestação de Serviços"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

              {/* Tarja com Nome e Cargo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                <span className="text-[11px] font-bold text-[#FFD100] uppercase tracking-widest block">
                  Liderança Operacional
                </span>
                <h3 className="text-2xl font-black text-white uppercase font-heading tracking-tight">
                  {siteContent.sobre.founderName}
                </h3>
                <p className="text-xs text-gray-300 mt-0.5">
                  {siteContent.sobre.founderTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto Institucional e História */}
        <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
          <Badge variant="outline" icon={<Shield className="w-3.5 h-3.5 text-[#FFD100]" />}>
            {siteContent.sobre.badge}
          </Badge>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.08] font-heading">
            Experiência e Rigor Tático no{" "}
            <span className="text-[#FFD100]">Litoral Paulista</span>
          </h2>

          <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              A <strong>PM Neto – Prestação de Serviços (Pietro Maria Neto Vigilância e Segurança)</strong> nasceu da convicção de que segurança privada não pode ser tratada com amadorismo ou improviso.
            </p>
            <p className="bg-[#181818] p-4 rounded-lg border-l-4 border-[#FFD100] text-gray-200">
              {siteContent.sobre.historyHighlight}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Sob a liderança do fundador <strong>Pietro Maria Neto</strong>, unimos procedimentos militares e policiais de disciplina à gestão corporativa moderna. Atuamos com autoridade e discrição no Porto de Santos, terminais logísticos, indústrias da Baixada Santista e nos condomínios mais prestigiados da região.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-300">
              <span className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2E2E2E] text-[#FFD100] font-semibold">
                Sede: Bertioga - SP
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2E2E2E]">
                Riviera de São Lourenço
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2E2E2E]">
                Santos &amp; Guarujá
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2E2E2E]">
                São Sebastião &amp; Litoral
              </span>
            </div>
          </div>

          {/* Bloco de Compromisso */}
          <div className="mt-8 p-5 rounded-xl bg-[#0A0A0A] border border-[#FFD100]/40 w-full flex items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">
                Nosso Princípio Inegociável
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#FFD100] uppercase font-heading tracking-tight mt-0.5">
                &ldquo;{siteContent.sobre.commitmentPhrase}&rdquo;
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#FFD100] text-[#0A0A0A] shrink-0 flex items-center justify-center font-black">
              <CheckCircle className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Missão, Visão e Valores (3 Cards) */}
      <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FFD100]/60 transition-colors">
          <div className="p-3 rounded-lg bg-[#1E1E1E] text-[#FFD100] w-fit mb-4 border border-[#333333]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black uppercase text-white font-heading">
            {siteContent.sobre.pilarMission.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {siteContent.sobre.pilarMission.description}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FFD100]/60 transition-colors">
          <div className="p-3 rounded-lg bg-[#1E1E1E] text-[#FFD100] w-fit mb-4 border border-[#333333]">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black uppercase text-white font-heading">
            {siteContent.sobre.pilarVision.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {siteContent.sobre.pilarVision.description}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FFD100]/60 transition-colors">
          <div className="p-3 rounded-lg bg-[#1E1E1E] text-[#FFD100] w-fit mb-4 border border-[#333333]">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black uppercase text-white font-heading">
            {siteContent.sobre.pilarValues.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {siteContent.sobre.pilarValues.description}
          </p>
        </div>
      </div>
    </Section>
  );
};
