"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Button } from "../ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-[12px] border-b border-white/[0.06] ${
          isScrolled ? "bg-[#0A0A0A]/90 py-3.5 shadow-lg" : "bg-[#0A0A0A]/55 py-5"
        }`}
      >
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: "1440px",
            paddingLeft: "clamp(24px, 5vw, 96px)",
            paddingRight: "clamp(24px, 5vw, 96px)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD100]"
              aria-label="Página Inicial PM Neto"
            >
              <div className="relative w-40 sm:w-48 h-9 sm:h-10">
                <Image
                  src="/logo.svg"
                  alt="PM Neto - Vigilância e Segurança"
                  fill
                  priority
                  loading="eager"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Navegação Principal">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden sm:flex items-center">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Falar no WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#8A8A8A] hover:text-[#F5F5F5] focus-visible:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between pt-28 pb-10 px-8 sm:hidden">
          <nav className="flex flex-col gap-6">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-[#F5F5F5] hover:text-[#FFD100] transition-colors py-2 border-b border-white/[0.06]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Falar no WhatsApp
            </Button>
            <p className="mt-4 text-center text-xs text-[#8A8A8A]">
              Atendimento no Litoral de SP • Plantão 24h
            </p>
          </div>
        </div>
      )}
    </>
  );
};
