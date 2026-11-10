"use client";

import React from "react";

export const MarqueeStrip: React.FC = () => {
  const words = [
    "VIGILÂNCIA",
    "PORTARIA",
    "MONITORAMENTO",
    "ESCOLTA ARMADA",
    "SEGURANÇA MARÍTIMA",
    "CONTROLE DE ACESSO",
  ];

  const renderGroup = (prefix: string) => (
    <div key={prefix} className="flex items-center shrink-0 gap-8 whitespace-nowrap px-4">
      {words.map((word, idx) => (
        <span key={`${prefix}-${idx}`} className="flex items-center gap-8">
          <span className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-white/70 hover:text-[#FFD100] transition-colors cursor-default select-none">
            {word}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100] shadow-[0_0_8px_#FFD100] shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="w-full h-16 sm:h-20 bg-[#0A0A0A] border-y border-white/[0.08] overflow-hidden flex items-center relative z-20"
    >
      <div className="animate-marquee-scroll flex items-center shrink-0">
        {renderGroup("g1")}
        {renderGroup("g2")}
        {renderGroup("g3")}
        {renderGroup("g4")}
      </div>
    </div>
  );
};
