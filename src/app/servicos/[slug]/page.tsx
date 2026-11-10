import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { IconHelper } from "@/components/ui/IconHelper";
import {
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteContent.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteContent.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço Não Encontrado | PM Neto Segurança",
    };
  }

  return {
    title: `${service.title} no Litoral de SP | PM Neto Segurança`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | PM Neto Vigilância e Segurança`,
      description: service.shortDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteContent.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = siteContent.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const customWhatsAppUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de solicitar um diagnóstico e proposta técnica para o serviço de ${service.title}.`
  )}`;

  // Schema.org Service & Breadcrumb JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "SecurityService",
      name: siteContent.company.legalName,
      telephone: siteContent.company.phone,
      areaServed: "Litoral de São Paulo",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://pmnetoserv.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: "https://pmnetoserv.com.br/#servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://pmnetoserv.com.br/servicos/${service.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen pt-24">
      {/* Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO EDITORIAL DO SERVIÇO (Fundo Black #0A0A0A) */}
      <section className="relative py-16 sm:py-24 border-b border-white/[0.08] overflow-hidden">
        {/* Grade de pontos tática sutil */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Breadcrumb Técnico */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-12"
          >
            <Link href="/" className="hover:text-[#FFD100] transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/25" />
            <Link href="/#servicos" className="hover:text-[#FFD100] transition-colors">
              Especialidades
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#FFD100]" />
            <span className="text-[#FFD100] truncate">{`${service.number} // ${service.title}`}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna Textual */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-5xl sm:text-6xl font-light text-stroke-dark select-none leading-none">
                  {service.number}
                </span>
                {service.badge && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/[0.12] text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFD100]">
                    {service.badge}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F5F5] leading-[1.06]">
                {service.title}
              </h1>

              {service.quote && (
                <blockquote className="mt-6 text-lg sm:text-xl text-[#FFD100]/90 font-light border-l-2 border-[#FFD100] pl-4 leading-relaxed">
                  &ldquo;{service.quote}&rdquo;
                </blockquote>
              )}

              <p className="mt-6 text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Button
                  href={customWhatsAppUrl}
                  isExternal
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Solicitar Proposta no WhatsApp
                </Button>
                <Button
                  href="/#contato"
                  variant="secondary"
                  size="lg"
                >
                  Agendar Vistoria Técnica
                </Button>
              </div>
            </div>

            {/* Moldura Visual Editorial */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/[0.12] bg-[#161616] group shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter grayscale-[35%] contrast-[1.08] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-85" />

                <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-[#0A0A0A]/85 border border-white/[0.15] backdrop-blur-md text-[#FFD100] flex items-center justify-center">
                  <IconHelper name={service.icon} className="w-5 h-5" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A0A0A0] pt-4 border-t border-white/[0.12]">
                  <span>Plantão 24h • Litoral SP</span>
                  <span className="text-[#FFD100]">Ativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS & ESCOPO TÉCNICO (Fundo Paper #F2EFE8) */}
      <section className="py-24 sm:py-32 bg-[#F2EFE8] text-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111]/15 pb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/60 block mb-3 font-mono">
                [ 01 // PADRÃO DE QUALIDADE ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111111]">
                Diretrizes &amp; <span className="font-normal underline decoration-[#FFD100] decoration-2 underline-offset-8">Entregas</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-light leading-relaxed">
              Cada posto de atendimento segue protocolos rigorosos de fiscalização, postura e pronta resposta.
            </p>
          </div>

          {/* Lista de Benefícios Numerada */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 pb-8 border-b border-[#111111]/15"
              >
                <span className="font-mono text-3xl sm:text-4xl font-light text-[#111111]/35 leading-none select-none">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-normal text-[#111111] leading-snug">
                    {benefit}
                  </h3>
                  <p className="mt-1.5 text-xs font-mono uppercase tracking-wider text-[#111111]/55">
                    Protocolo Padrão PM Neto
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Perfil de Atendimento + Rigor Operacional */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-white/65 border border-[#111111]/12 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#111111]/60 block mb-2">
                [ 02 // APLICAÇÕES ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight mb-6">
                Para quem é indicado
              </h3>
              <ul className="space-y-3.5">
                {service.targetAudience.map((target, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-base text-[#111111]/85 font-light pb-3 border-b border-[#111111]/[0.08] last:border-b-0 last:pb-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFD100] shrink-0" />
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#111111] text-[#F5F5F5] shadow-sm">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD100] block mb-2">
                [ 03 // RIGOR OPERACIONAL ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#F5F5F5] tracking-tight mb-6">
                Protocolos em campo
              </h3>
              <ul className="space-y-4">
                {service.operationalDetails.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-[#A0A0A0] font-light pb-4 border-b border-white/[0.08] last:border-b-0 last:pb-0"
                  >
                    <ShieldCheck className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAIXA DE CONVERSÃO AMARELA DA ESPECIALIDADE */}
      <section className="py-20 sm:py-28 bg-[#FFD100] text-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/70 block mb-3 font-mono font-bold">
              [ DIAGNÓSTICO PRESENCIAL • ATÉ 6H ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
              Dimensione <span className="font-semibold underline decoration-2 underline-offset-8">{service.title}</span> para sua estrutura.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#0A0A0A]/85 font-normal leading-relaxed">
              Realizamos vistoria técnica sem compromisso em Bertioga, Guarujá, Santos, Riviera de São Lourenço e todo o Litoral Paulista.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-[#FFD100] text-sm font-semibold tracking-wider uppercase rounded-xl shadow-xl hover:bg-[#1a1a1a] transition-all"
            >
              <span>Falar no WhatsApp Agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#0A0A0A]/30 text-[#0A0A0A] text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-[#0A0A0A]/10 transition-colors"
            >
              <span>Preencher Formulário Técnico</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUTRAS ESPECIALIDADES RELACIONADAS (Fundo Graphite #161616) */}
      <section className="py-24 sm:py-28 bg-[#161616] text-[#F5F5F5] border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] block mb-2 font-mono">
                [ 04 // PORTFÓLIO OPERACIONAL ]
              </span>
              <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F5]">
                Outras <span className="text-[#FFD100]">Especialidades</span>
              </h3>
            </div>
            <Link
              href="/#servicos"
              className="text-xs font-mono uppercase tracking-widest text-[#A0A0A0] hover:text-[#FFD100] flex items-center gap-1.5 transition-colors"
            >
              <span>Ver todas na página inicial</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/servicos/${rel.slug}`}
                className="group p-7 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#FFD100]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-4xl font-light text-stroke-dark group-hover:text-[#FFD100] transition-colors">
                      {rel.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8A8A] px-3 py-1 rounded-full border border-white/[0.08]">
                      {rel.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-normal text-[#F5F5F5] group-hover:text-[#FFD100] transition-colors mb-2.5">
                    {rel.title}
                  </h4>
                  <p className="text-sm text-[#8A8A8A] font-light leading-relaxed line-clamp-3">
                    {rel.shortDescription}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#A0A0A0] group-hover:text-[#FFD100]">
                  <span>Explorar</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
