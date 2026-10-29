"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ExternalLink, Lightbulb, ShieldAlert } from "lucide-react";
import { InstagramIcon } from "../ui/InstagramIcon";

export const Instagram: React.FC = () => {
  return (
    <Section id="conteudo" variant="dark">
      <Heading
        badge="Redes Sociais & Conteúdo"
        badgeIcon={<InstagramIcon className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Acompanhe Nossa <span className="text-[#FFD100]">Rotina e Conteúdo</span>
          </>
        }
        subtitle="Dicas táticas de prevenção, bastidores da equipe de vigilância e informações em tempo real no nosso Instagram oficial."
      />

      {/* Grid de 6 Cards Estilo Instagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteContent.instagram.posts.map((post) => (
          <a
            key={post.id}
            href={siteContent.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden bg-[#161616] border border-[#262626] hover:border-[#FFD100] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,209,0,0.15)]"
          >
            {/* Foto com overlay */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.7] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent" />

              {/* Tag do Post */}
              <div className="absolute top-3 left-3 z-10">
                <Badge variant="yellow" className="text-[10px] py-0.5 px-2">
                  {post.tag}
                </Badge>
              </div>

              {/* Ícone Instagram no canto superior direito */}
              <div className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#0A0A0A]/80 text-[#FFD100] group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-4 h-4" />
              </div>
            </div>

            {/* Descrição e Legenda */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black uppercase text-white font-heading group-hover:text-[#FFD100] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between text-xs text-[#FFD100] font-bold uppercase tracking-wider">
                <span>Ver no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Botão de Seguir no Instagram */}
      <div className="mt-12 text-center">
        <Button
          href={siteContent.instagram.url}
          isExternal
          variant="primary"
          size="lg"
          icon={<InstagramIcon className="w-5 h-5" />}
          iconPosition="left"
          className="font-black"
        >
          {siteContent.instagram.buttonLabel}
        </Button>
      </div>

      {/* Dicas Rápidas de Segurança (3 Cards) */}
      <div className="mt-16 pt-12 border-t border-[#222222]">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD100] flex items-center justify-center gap-1.5">
            <Lightbulb className="w-4 h-4" /> Dicas de Prevenção PM Neto
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mt-1">
            Orientações Táticas Rápidas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.instagram.tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0F0F0F] border border-[#222222] hover:border-[#FFD100]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFD100]">
                <ShieldAlert className="w-4 h-4" />
                <h4 className="text-sm font-black uppercase tracking-wider font-heading text-white">
                  {tip.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
