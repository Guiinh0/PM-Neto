"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("regioes");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="duvidas"
      className="py-28 sm:py-40 relative bg-[#F2EFE8] text-[#111111] border-t border-[#111111]/15"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Título à esquerda + Box de Suporte Direto */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/60 block mb-3 font-mono">
                [ 04 // DÚVIDAS ]
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
                Respostas <span className="font-normal underline decoration-[#FFD100] decoration-2 underline-offset-8">Claras</span>
              </h2>
              <p className="mt-6 text-base text-[#111111]/70 max-w-sm font-light leading-relaxed">
                Diretrizes operacionais, agilidade de implantação e abrangência territorial no Litoral Paulista.
              </p>
            </div>

            <div className="mt-10 lg:mt-16 p-6 sm:p-7 rounded-2xl border border-[#111111]/15 bg-white/70 shadow-sm max-w-sm">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#111111]/60 block mb-2">
                Atendimento Técnico
              </span>
              <p className="text-sm text-[#111111] font-normal leading-relaxed mb-4">
                Precisa de um dimensionamento específico para condomínio, marina ou escolta?
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-medium text-[#111111] hover:text-[#000000] border-b border-[#FFD100] pb-1 transition-colors"
              >
                <span>Consultar plantão operacional</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Acordeão com Ícone em Círculo Amarelo e Transição Suave de Altura */}
          <div className="lg:col-span-7 divide-y divide-[#111111]/15">
            {siteContent.faq.map((item, idx) => {
              const isOpen = openId === item.id;
              const contentId = `faq-content-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;

              return (
                <div key={item.id} className="py-6 sm:py-7 first:pt-0 last:pb-0">
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full text-left flex items-center justify-between gap-6 py-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-[#111111]/45 select-none">
                        0{idx + 1}
                      </span>
                      <span className="text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#000000] transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Ícone de abrir/fechar em círculo amarelo vibrante */}
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FFD100] text-[#0A0A0A] shadow-[0_0_12px_rgba(255,209,0,0.5)] rotate-180"
                          : "bg-[#111111]/10 text-[#111111] group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-8 pr-4 sm:pr-12 text-base text-[#111111]/80 leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
