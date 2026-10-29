"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { MessageSquare, PhoneCall } from "lucide-react";

export const MobileCTABar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Ações rápidas mobile"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-md border-t border-[#262626] p-3 md:hidden flex items-center gap-3 shadow-[0_-4px_25px_rgba(0,0,0,0.8)]"
    >
      <a
        href={`tel:${siteContent.company.whatsappNumber}`}
        className="flex items-center justify-center p-3 rounded-md bg-[#1C1C1C] text-gray-200 border border-[#2E2E2E] active:scale-95 transition-transform"
        aria-label="Ligar para a central de atendimento"
      >
        <PhoneCall className="w-5 h-5 text-[#FFD100]" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#FFD100] text-[#0A0A0A] font-black text-sm uppercase tracking-wider shadow-[0_2px_15px_rgba(255,209,0,0.35)] active:scale-[0.98] transition-all"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>Solicitar Orçamento</span>
      </a>
    </aside>
  );
};
