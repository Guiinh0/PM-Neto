"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { Counter } from "../ui/Counter";
import { ShieldCheck, Award, Users, Clock } from "lucide-react";

export const Metrics: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    anos: <Award className="w-6 h-6 text-[#FFD100]" />,
    postos: <ShieldCheck className="w-6 h-6 text-[#FFD100]" />,
    profissionais: <Users className="w-6 h-6 text-[#FFD100]" />,
    atendimento: <Clock className="w-6 h-6 text-[#FFD100]" />,
  };

  return (
    <section id="metricas" className="bg-[#0F0F0F] border-y border-[#222222] py-12 sm:py-16 relative">
      {/* Detalhe de linha de segurança amarela no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFD100]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteContent.metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#FFD100]/50 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div className="mb-3 p-2.5 rounded-lg bg-[#222222] border border-[#333333] group-hover:bg-[#FFD100]/10 transition-colors">
                {iconMap[metric.id]}
              </div>

              {/* Número animado */}
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight flex items-baseline gap-1">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>

              {/* Rótulo */}
              <span className="mt-2 text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                {metric.label}
              </span>

              {/* Subtítulo */}
              <span className="mt-1 text-xs text-gray-400 text-center sm:text-left leading-normal">
                {metric.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
