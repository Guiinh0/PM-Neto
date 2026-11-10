"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteContent } from "@/data/content";

export const Footer: React.FC = () => {
  const pathname = usePathname();

  // Na página inicial, o rodapé já está integrado ao Bloco 6 (Contato + Rodapé)
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-[#0A0A0A] text-[#8A8A8A] border-t border-white/[0.08] py-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light font-mono">
        <p>{siteContent.footer.copyright}</p>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-[#FFD100] transition-colors">
            Início
          </Link>
          <Link href="/politica-de-privacidade" className="hover:text-[#FFD100] transition-colors">
            Privacidade (LGPD)
          </Link>
          <Link href="/termos" className="hover:text-[#FFD100] transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
};
