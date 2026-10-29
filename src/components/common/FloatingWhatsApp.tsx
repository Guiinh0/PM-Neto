"use client";

import React, { useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import { MessageSquare, ShieldCheck } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 1500);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip convidativo */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121212] text-white border border-[#FFD100]/40 px-3.5 py-2 rounded-lg shadow-2xl text-xs font-semibold animate-bounce">
          <ShieldCheck className="w-4 h-4 text-[#FFD100]" />
          <span>Plantão 24h: Fale conosco no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 text-sm font-bold"
            aria-label="Fechar dica"
          >
            ×
          </button>
        </div>
      )}

      {/* Botão Flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com PM Neto"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FFD100] text-[#0A0A0A] shadow-[0_6px_25px_rgba(255,209,0,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD100]"
      >
        {/* Anel pulsante */}
        <span className="absolute inset-0 rounded-full bg-[#FFD100] animate-ping opacity-25" />

        <MessageSquare className="w-7 h-7 fill-current relative z-10" />

        {/* Selo online verde */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0A0A0A] rounded-full z-20" />
      </a>
    </div>
  );
};
