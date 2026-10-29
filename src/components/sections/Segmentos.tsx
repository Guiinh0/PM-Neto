"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { IconHelper } from "../ui/IconHelper";
import { Building2 } from "lucide-react";

export const Segmentos: React.FC = () => {
  return (
    <Section id="segmentos" variant="surface">
      <Heading
        badge="Áreas de Atuação"
        badgeIcon={<Building2 className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Soluções para <span className="text-[#FFD100]">Diferentes Segmentos</span>
          </>
        }
        subtitle="Da segurança perimétrica pesada de terminais de contêineres à vigilância reservada de condomínios fechados e residências."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteContent.segmentos.map((segment) => (
          <div
            key={segment.id}
            className="p-5 rounded-xl bg-[#121212] border border-[#262626] hover:border-[#FFD100]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1E1E1E] text-[#FFD100] border border-[#2E2E2E] flex items-center justify-center mb-4 group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A] transition-colors">
                <IconHelper name={segment.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black uppercase text-white font-heading group-hover:text-[#FFD100] transition-colors">
                {segment.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {segment.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1C1C1C] flex items-center text-[11px] font-bold uppercase tracking-wider text-[#FFD100]/70 group-hover:text-[#FFD100] transition-colors">
              <span>Protocolo Sob Medida</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
