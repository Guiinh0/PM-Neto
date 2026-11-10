"use client";

import React, { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Button } from "../ui/Button";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

// Carregamento dinâmico da Cena 3D do Escudo da Marca
const ShieldScene = dynamic(
  () => import("./ShieldScene").then((mod) => mod.ShieldScene),
  {
    ssr: false,
    loading: () => null,
  }
);

export const Hero: React.FC = () => {
  const [is3DReady, setIs3DReady] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [isStaticFallback, setIsStaticFallback] = useState(false);
  const [countYears, setCountYears] = useState(0);
  const [countHours, setCountHours] = useState(0);

  // Verificação de URL para level=static
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("level") === "static") {
        requestAnimationFrame(() => setIsStaticFallback(true));
      }
    }
  }, []);

  // Contador sutil para as métricas
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 40;
    const totalSteps = duration / stepTime;

    const timer = setInterval(() => {
      start++;
      const progress = start / totalSteps;
      setCountYears(Math.min(Math.round(progress * 2), 2));
      setCountHours(Math.min(Math.round(progress * 6), 6));

      if (start >= totalSteps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Quando o primeiro frame 3D é renderizado, faz crossfade do SVG poster e desmonta do DOM
  const handleSceneReady = useCallback(() => {
    setIs3DReady(true);
    setTimeout(() => {
      setShowPoster(false);
    }, 650);
  }, []);

  // Fallback estático (sem WebGL, saveData, prefers-reduced-motion ou ?level=static)
  const handleSceneFallback = useCallback(() => {
    setIsStaticFallback(true);
    setShowPoster(true);
  }, []);

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* 1. Grade de Pontos Tática no Fundo (Opacidade 0.05 com fade nas bordas) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at 65% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 65% 50%, black 30%, transparent 80%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* 2. Brilho Radial Amarelo atrás do Escudo (em CSS) */}
      <div
        className="absolute pointer-events-none rounded-full blur-[110px] transition-opacity duration-1000 top-[185px] md:top-1/2 left-1/2 md:left-[72%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "clamp(280px, 42vw, 680px)",
          height: "clamp(280px, 42vw, 680px)",
          background:
            "radial-gradient(circle, rgba(255, 209, 0, 0.14) 0%, rgba(255, 209, 0, 0.04) 50%, transparent 75%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* 3. Escudo Estático em SVG (Poster de carregamento com crossfade de 600ms e desmontagem) */}
      {showPoster && (
        <div
          className="absolute inset-0 pointer-events-none flex transition-opacity duration-600 justify-center md:justify-end items-start md:items-center pt-[90px] md:pt-0"
          style={{
            zIndex: 2,
            opacity: is3DReady && !isStaticFallback ? 0 : 1,
            paddingRight: "clamp(0px, 10vw, 160px)",
          }}
          aria-hidden="true"
        >
          <div className="relative w-[185px] h-[185px] sm:w-[240px] sm:h-[240px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px]">
            <Image
              src="/brand/logo-shield.svg"
              alt="Escudo PM Neto"
              fill
              priority
              className="object-contain drop-shadow-[0_0_35px_rgba(255,209,0,0.18)]"
            />
            {/* Efeito de pulso suave na fechadura no modo estático */}
            <div
              className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FFD100]/25 blur-sm animate-pulse pointer-events-none"
            />
          </div>
        </div>
      )}

      {/* 4. Cena 3D: Escudo da Marca PM Neto (Full-Bleed, posicionado à direita) */}
      {!isStaticFallback && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 3 }}
          aria-hidden="true"
        >
          <ShieldScene
            onReady={handleSceneReady}
            onFallback={handleSceneFallback}
          />
        </div>
      )}

      {/* 5. Conteúdo Textual do Hero (Container Max-Width 1440px) */}
      <div
        className="relative w-full mx-auto my-auto pt-[295px] pb-12 sm:pt-[280px] md:pt-28 md:pb-14"
        style={{
          zIndex: 5,
          maxWidth: "1440px",
          paddingLeft: "clamp(24px, 5vw, 96px)",
          paddingRight: "clamp(24px, 5vw, 96px)",
        }}
      >
        <div className="max-w-2xl">
          {/* Micro-indicador de Monitoramento Ativo */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#161616]/90 border border-white/[0.12] backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD100] shadow-[0_0_10px_#FFD100] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5F5F5] uppercase font-medium">
              Monitoramento Ativo • Litoral de SP
            </span>
          </div>

          {/* H1 Principal com destaque no Amarelo */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-light text-[#F5F5F5] leading-[1.04] tracking-[-0.03em]">
            <span>{siteContent.hero.titlePrimary}</span>
            <span className="block text-[#FFD100] mt-1 font-normal">
              {siteContent.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtítulo Conciso */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#A0A0A0] font-light leading-relaxed max-w-xl">
            {siteContent.hero.subtitle}
          </p>

          {/* Botão Primário WhatsApp */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-5 h-5" />}
              iconPosition="right"
            >
              {siteContent.hero.ctaPrimary}
            </Button>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">
              <ShieldCheck className="w-4 h-4 text-[#FFD100]" />
              <span>Plantão 24h & Escolta</span>
            </div>
          </div>

          {/* Métricas Elegantes e Compactas */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/[0.08] flex items-center gap-8 sm:gap-14">
            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl sm:text-4xl font-light text-[#F5F5F5] font-mono tracking-tight">
                {countYears}+
              </span>
              <div className="text-xs text-[#8A8A8A] font-light leading-tight">
                <span className="block text-[#F5F5F5] font-medium">anos</span>
                <span>no Litoral</span>
              </div>
            </div>

            <div className="w-[1px] h-8 bg-white/[0.1]" />

            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl sm:text-4xl font-light text-[#FFD100] font-mono tracking-tight">
                {countHours}h
              </span>
              <div className="text-xs text-[#8A8A8A] font-light leading-tight">
                <span className="block text-[#F5F5F5] font-medium">resposta</span>
                <span>diagnóstico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
