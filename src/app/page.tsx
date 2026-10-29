import React from "react";
import { siteContent } from "@/data/content";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { YellowBanner } from "@/components/sections/YellowBanner";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Segmentos } from "@/components/sections/Segmentos";
import { Sobre } from "@/components/sections/Sobre";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { Contato } from "@/components/sections/Contato";

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: siteContent.company.legalName,
    alternateName: siteContent.company.tradeName,
    url: "https://pmnetoserv.com.br",
    logo: "https://pmnetoserv.com.br/logo.svg",
    image: "https://pmnetoserv.com.br/images/hero.jpg",
    description: siteContent.hero.subtitle,
    telephone: siteContent.company.phone,
    email: siteContent.company.email,
    areaServed: siteContent.company.coverage.map((city) => ({
      "@type": "AdministrativeArea",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.company.addressDetails.street,
      addressLocality: siteContent.company.addressDetails.city,
      addressRegion: siteContent.company.addressDetails.state,
      postalCode: siteContent.company.addressDetails.zip,
      addressCountry: "BR",
    },
    priceRange: "$$",
    sameAs: [siteContent.company.instagramUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <>
      {/* Schema.org LocalBusiness / SecurityService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Faixa de Números / Confiança */}
      <Metrics />

      {/* 3. Serviços Oficiais (8 cards) */}
      <Services />

      {/* 4. Faixa Amarela de Impacto */}
      <YellowBanner />

      {/* 5. Diferenciais */}
      <Diferenciais />

      {/* 6. Como Funciona (Linha do Tempo em 4 Passos) */}
      <ComoFunciona />

      {/* 7. Segmentos Atendidos */}
      <Segmentos />

      {/* 8. Sobre Pietro Maria Neto & Valores */}
      <Sobre />

      {/* 9. Depoimentos / Prova Social */}
      <Depoimentos />

      {/* 10. Conteúdo Instagram & Dicas */}
      <Instagram />

      {/* 11. Perguntas Frequentes (FAQ com Schema) */}
      <Faq />

      {/* 12. Contato & Orçamento Final */}
      <Contato />
    </>
  );
}
