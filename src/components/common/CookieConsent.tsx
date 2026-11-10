"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pmneto_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("pmneto_cookie_consent", "all");
    setShow(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("pmneto_cookie_consent", "essential");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies e privacidade LGPD"
      aria-live="polite"
      className="fixed bottom-16 md:bottom-6 left-4 sm:left-6 max-w-md z-50 bg-[#161616]/95 backdrop-blur-md border border-white/[0.12] rounded-[4px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
        <div className="flex-1 text-xs text-[#A0A0A0] font-light leading-relaxed">
          <p className="font-mono font-medium text-[#F5F5F5] mb-1.5 uppercase tracking-wider text-[11px]">
            Privacidade &amp; Proteção de Dados (LGPD)
          </p>
          <p>
            Utilizamos cookies para assegurar o funcionamento seguro do site e otimizar sua experiência conforme nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-[#FFD100] underline hover:text-[#E6BC00]"
            >
              Política de Privacidade
            </Link>.
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            <button
              type="button"
              onClick={acceptAll}
              className="px-3.5 py-2 rounded-[3px] bg-[#FFD100] text-[#0A0A0A] font-medium font-mono text-[11px] uppercase tracking-wider hover:bg-[#E6BC00] transition-colors cursor-pointer"
            >
              Aceitar Todos
            </button>
            <button
              type="button"
              onClick={acceptEssential}
              className="px-3.5 py-2 rounded-[3px] bg-[#0A0A0A] border border-white/[0.12] text-[#A0A0A0] font-mono text-[11px] uppercase tracking-wider hover:text-[#F5F5F5] hover:border-white/25 transition-colors cursor-pointer"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
