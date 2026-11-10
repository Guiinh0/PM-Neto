import React from "react";
import { siteContent } from "@/data/content";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/common/MarqueeStrip";
import { Services } from "@/components/sections/Services";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { Contato } from "@/components/sections/Contato";
import { CursorEffects } from "@/components/common/CursorEffects";

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

      {/* Cursor spotlight sutil e anel de foco */}
      <CursorEffects />

      {/* 1. HERO (com Cena 3D / Mapa Tático do Litoral) */}
      <Hero />

      {/* Faixa Marquee de transição com contorno */}
      <MarqueeStrip />

      {/* 2. SERVIÇOS (Fundo Paper #F2EFE8, números 120px+ em contorno e hover dinâmico) */}
      <Services />

      {/* 3. COMO FUNCIONA (Fundo Graphite #161616, linha de progresso do scroll e números 80px amarelos) */}
      <ComoFunciona />

      {/* 4. PROVA SOCIAL (Fundo Black #0A0A0A, foto de Pietro Maria Neto em P&B e aspas gigantes) */}
      <Depoimentos />

      {/* 5. FAQ (Fundo Paper #F2EFE8, acordeão com botão amarelo circular) */}
      <Faq />

      {/* 6. CONTATO + RODAPÉ INTEGRADO (Fundo Amarelo Sólido da marca e rodapé preto) */}
      <Contato />
    </>
  );
}
