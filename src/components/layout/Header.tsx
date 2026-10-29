"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Button } from "../ui/Button";
import { Menu, X, Phone, MessageSquare, Shield } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-[#222222]"
            : "bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100] rounded-md"
              aria-label="Página Inicial PM Neto"
            >
              <div className="relative w-44 sm:w-56 h-11 sm:h-12 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/logo.svg"
                  alt="PM Neto Prestação de Serviços - Pietro Maria Neto Vigilância e Segurança"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-[#FFD100] transition-colors nav-link-hover py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden sm:flex items-center gap-4">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="sm"
                icon={<MessageSquare className="w-4 h-4 fill-current" />}
                iconPosition="left"
                className="font-black"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#0A0A0A] bg-[#FFD100] rounded-md font-bold"
                aria-label="WhatsApp PM Neto"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-md text-gray-200 hover:text-[#FFD100] bg-[#161616] border border-[#2E2E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100]"
                aria-expanded={mobileMenuOpen}
                aria-label="Abrir Menu de Navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Tela Cheia) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto sm:hidden animate-fadeIn">
          {/* Header interno do menu com logo */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" /> Menu Principal
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Fechar Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tight text-white hover:text-[#FFD100] py-2 border-b border-[#181818] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#FFD100] text-sm font-normal">→</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Rodapé do Menu Mobile */}
          <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col gap-4">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              iconPosition="left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Falar no WhatsApp
            </Button>
            <div className="text-center text-xs text-gray-400 mt-2">
              <p className="font-semibold text-gray-300">Central de Operações Litoral de SP</p>
              <p className="mt-1">{siteContent.company.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
