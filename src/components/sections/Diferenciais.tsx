"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { IconHelper } from "../ui/IconHelper";
import { Badge } from "../ui/Badge";
import { Shield, CheckCircle } from "lucide-react";

export const Diferenciais: React.FC = () => {
  return (
    <Section id="diferenciais" variant="dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Coluna Esquerda: Texto e Lista de Diferenciais */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <Badge variant="outline" icon={<Shield className="w-3.5 h-3.5 text-[#FFD100]" />}>
            Por Que a PM Neto
          </Badge>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.08] font-heading">
            Presença que inibe.{" "}
            <span className="text-[#FFD100] block sm:inline">Estratégia que protege.</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Não entregamos soluções prontas de prateleira. Desenvolvemos uma blindagem inteligente para cada cliente, assegurando que o que levou anos para você construir permaneça inviolável.
          </p>

          {/* Grid de 6 Diferenciais com Ícones */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {siteContent.diferenciais.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-[#181818] border border-[#282828] hover:border-[#FFD100]/50 transition-colors flex items-start gap-3.5"
              >
                <div className="p-2 rounded-md bg-[#222222] border border-[#333333] text-[#FFD100] shrink-0 mt-0.5">
                  <IconHelper name={item.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Imagem com Selo Circular Sobreposto */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#2A2A2A] shadow-2xl">
            <div className="relative h-[420px] sm:h-[480px] w-full">
              <Image
                src="/images/servico-maritimo.jpg"
                alt="Operação Tática PM Neto no Litoral Paulista"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter brightness-[0.8] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </div>

            {/* Faixa diagonal amarela no canto da foto */}
            <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
              <div className="absolute transform rotate-45 bg-[#FFD100] text-[#0A0A0A] font-black text-[10px] py-1 right-[-35px] top-[32px] w-[140px] text-center shadow-lg uppercase tracking-wider">
                Rigor Máximo
              </div>
            </div>

            {/* Selo Circular Preto e Amarelo Sobreposto */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-[#0A0A0A]/95 border-2 border-[#FFD100] p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-md max-w-xs">
              <div className="w-12 h-12 rounded-full bg-[#FFD100] text-[#0A0A0A] flex items-center justify-center shrink-0 font-black text-xl shadow-inner">
                <Shield className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-[#FFD100]">
                  Garantia Operacional
                </span>
                <span className="text-[11px] text-gray-300 font-medium leading-tight mt-0.5">
                  Supervisão tática diuturna e prontidão imediata no Litoral de SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
