"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { Phone, Mail, MapPin, Clock, ArrowUp, Shield } from "lucide-react";
import { InstagramIcon as Instagram } from "../ui/InstagramIcon";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#070707] text-gray-300 border-t border-[#1C1C1C] relative pt-16 pb-28 md:pb-16 overflow-hidden">
      {/* Faixa decorativa superior amarela */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD100] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-[#1A1A1A]">
          {/* Coluna 1: Logo & Sobre */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block" aria-label="Página Inicial PM Neto">
              <div className="relative w-52 h-12">
                <Image
                  src="/logo.svg"
                  alt="PM Neto Prestação de Serviços"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteContent.footer.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#161616] border border-[#2A2A2A] text-xs text-[#FFD100] font-bold">
                <Shield className="w-3.5 h-3.5" />
                <span>Atuação em todo o Litoral de SP</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider text-base mb-5 border-l-2 border-[#FFD100] pl-3">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD100] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD100] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Nossos Serviços */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider text-base mb-5 border-l-2 border-[#FFD100] pl-3">
              Serviços Oficiais
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteContent.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="text-gray-400 hover:text-[#FFD100] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD100] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato & Redes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-black uppercase tracking-wider text-base mb-1 border-l-2 border-[#FFD100] pl-3">
              Central de Atendimento
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Telefone / WhatsApp</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFD100] font-semibold"
                  >
                    {siteContent.company.whatsappFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">E-mail Comercial</span>
                  <a
                    href={`mailto:${siteContent.company.email}`}
                    className="text-white hover:text-[#FFD100] text-xs sm:text-sm break-all"
                  >
                    {siteContent.company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Instagram Oficial</span>
                  <a
                    href={siteContent.company.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD100] hover:underline font-semibold"
                  >
                    {siteContent.company.instagram}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400">
                  <span className="block text-gray-500 uppercase">Base de Operações</span>
                  <span>{siteContent.company.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400">
                  <span className="block text-gray-500 uppercase">Plantão</span>
                  <span>{siteContent.company.operatingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior de Copyright e Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
            <span>{siteContent.footer.copyright}</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-gray-400">{siteContent.footer.cnpjNotice}</span>
          </div>

          <div className="flex items-center gap-6">
            {siteContent.footer.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-[#FFD100] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#161616] hover:bg-[#FFD100] text-gray-400 hover:text-[#0A0A0A] border border-[#2E2E2E] transition-all"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
