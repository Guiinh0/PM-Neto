"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-28 sm:py-40 relative bg-[#F2EFE8] text-[#111111] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Cabeçalho da Seção com Título e Palavra em Contorno */}
        <div className="mb-20 sm:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111]/15 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/60 block mb-3 font-mono">
              [ 01 // ESPECIALIDADES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              Serviços de <span className="font-normal underline decoration-[#FFD100] decoration-2 underline-offset-8">Excelência</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-light leading-relaxed">
            Estruturas operacionais concebidas para mitigar riscos patrimoniais, náuticos e corporativos com rigor diuturno.
          </p>
        </div>

        {/* Grade 2x2 com Numeração Gigante (120px+) em contorno e Navegação Direta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 md:gap-x-20">
          {siteContent.services.map((service) => (
            <Link
              key={service.number}
              href={`/servicos/${service.slug}`}
              className="service-line-hover flex flex-col justify-between pb-9 border-b border-[#111111]/15 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <div>
                {/* Número Gigante em Contorno (120px+) + Badge */}
                <div className="flex items-baseline justify-between mb-5">
                  <span
                    aria-hidden="true"
                    className="font-mono text-7xl sm:text-8xl md:text-9xl font-light text-stroke-paper group-hover:text-[#FFD100] transition-colors duration-400 select-none leading-none"
                  >
                    {service.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border border-[#111111]/15 text-[#111111]/70 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-[#FFD100] transition-all duration-300">
                    {service.badge || "Atendimento Litoral"}
                  </span>
                </div>

                {/* Título com deslizamento de 8px no hover */}
                <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight mb-3 transition-transform duration-300 group-hover:translate-x-2">
                  {service.title}
                </h3>

                <p className="text-base text-[#111111]/75 leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                {/* Destaques Operacionais */}
                <ul className="space-y-2 mb-7">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]/65 font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/40 group-hover:bg-[#FFD100] transition-colors shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barra de Ação Editorial */}
              <div className="pt-4 border-t border-[#111111]/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-[#111111]/70 group-hover:text-[#111111] transition-colors">
                <span>Especificações técnicas</span>
                <span className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:bg-[#FFD100] group-hover:border-[#FFD100] group-hover:text-[#0A0A0A] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
