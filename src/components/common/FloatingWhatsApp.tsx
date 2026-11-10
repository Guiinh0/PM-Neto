"use client";

import React, { useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-8 z-40 hidden sm:block">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com PM Neto"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-[#161616] border border-white/[0.15] text-[#FFD100] hover:bg-[#FFD100] hover:text-[#0A0A0A] hover:border-[#FFD100] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100]"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
};
