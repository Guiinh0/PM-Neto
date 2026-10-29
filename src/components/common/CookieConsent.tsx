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
      aria-live="polite"
      className="fixed bottom-16 md:bottom-6 left-4 sm:left-6 max-w-md z-50 bg-[#141414] border border-[#2E2E2E] rounded-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.85)] animate-fadeIn"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
        <div className="flex-1 text-xs text-gray-300 leading-relaxed">
          <p className="font-bold text-white mb-1 uppercase tracking-wider text-xs">
            Privacidade &amp; Proteção de Dados (LGPD)
          </p>
          <p>
            Utilizamos cookies para assegurar o funcionamento seguro do site, otimizar sua experiência e analisar nosso tráfego conforme a nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-[#FFD100] underline hover:text-[#E6BC00]"
            >
              Política de Privacidade
            </Link>.
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            <button
              onClick={acceptAll}
              className="px-3.5 py-1.5 rounded bg-[#FFD100] text-[#0A0A0A] font-bold text-xs uppercase hover:bg-[#E6BC00] transition-colors"
            >
              Aceitar Todos
            </button>
            <button
              onClick={acceptEssential}
              className="px-3 py-1.5 rounded bg-[#222222] text-gray-300 font-semibold text-xs uppercase hover:bg-[#2A2A2A] transition-colors"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
