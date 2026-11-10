"use client";

import React from "react";
import { siteContent } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export const MobileCTABar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Ação rápida WhatsApp"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/[0.08] p-3 sm:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[4px] bg-[#FFD100] text-[#0A0A0A] font-medium text-sm transition-all"
      >
        <span>Falar no WhatsApp</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </aside>
  );
};
