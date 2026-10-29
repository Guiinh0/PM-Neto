"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { IconHelper } from "../ui/IconHelper";
import { Badge } from "../ui/Badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <Section id="servicos" variant="black">
      <Heading
        badge="Nossas Soluções"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Serviços Especializados de <span className="text-[#FFD100]">Alto Padrão</span>
          </>
        }
        subtitle="Proteção sob medida para patrimônios de alta complexidade, operações terrestres, fluviais e marítimas no Litoral de São Paulo."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteContent.services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col justify-between rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFD100] transition-all duration-300 overflow-hidden hover:shadow-[0_10px_30px_rgba(255,209,0,0.15)] hover:-translate-y-1.5"
          >
            {/* Foto e Badge no topo */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.75] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

              {/* Badge de Categoria */}
              {service.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="yellow" className="text-[10px] py-0.5 px-2.5 shadow-md">
                    {service.badge}
                  </Badge>
                </div>
              )}

              {/* Ícone amarelo flutuante sobre a imagem */}
              <div className="absolute bottom-3 left-4 z-10 w-11 h-11 rounded-lg bg-[#0A0A0A] border-2 border-[#FFD100] flex items-center justify-center text-[#FFD100] shadow-lg group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A] transition-colors">
                <IconHelper name={service.icon} className="w-5 h-5" />
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black uppercase text-white group-hover:text-[#FFD100] transition-colors leading-snug font-heading">
                  {service.title}
                </h3>

                {service.quote && (
                  <p className="mt-2 text-xs text-[#FFD100] italic border-l-2 border-[#FFD100] pl-2 font-medium">
                    &ldquo;{service.quote}&rdquo;
                  </p>
                )}

                <p className="mt-3 text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Link Saiba Mais */}
              <div className="mt-5 pt-4 border-t border-[#222222] flex items-center justify-between">
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#FFD100] group-hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD100]"
                >
                  <span>Saiba Mais Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
