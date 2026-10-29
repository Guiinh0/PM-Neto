"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { ChevronDown, HelpCircle } from "lucide-react";

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("regioes-atendidas");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Schema.org FAQPage JSON-LD
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
    <Section id="faq" variant="black">
      {/* Schema.org FAQPage injetado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Heading
        badge="Dúvidas Frequentes"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Perguntas &amp; <span className="text-[#FFD100]">Respostas Claras</span>
          </>
        }
        subtitle="Entenda como operamos, os prazos de implantação e os padrões de segurança que aplicamos aos nossos postos de vigilância."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {siteContent.faq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#141414] border-[#FFD100]/60 shadow-[0_4px_20px_rgba(255,209,0,0.1)]"
                  : "bg-[#101010] border-[#222222] hover:border-[#333333]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100]"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-white uppercase font-heading tracking-wide">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-md bg-[#1C1C1C] text-[#FFD100] transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-[#FFD100] text-[#0A0A0A]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-[#1F1F1F]">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
