import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteContent, ServiceItem } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconHelper } from "@/components/ui/IconHelper";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  ClipboardList,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
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
    `Olá! Gostaria de solicitar um orçamento específico para o serviço de ${service.title}.`
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
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-24">
      {/* Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb de Navegação */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400"
        >
          <Link href="/" className="hover:text-[#FFD100] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#servicos" className="hover:text-[#FFD100] transition-colors">
            Serviços
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#FFD100]" />
          <span className="text-[#FFD100] font-bold truncate">{service.title}</span>
        </nav>
      </div>

      {/* Banner Principal do Serviço */}
      <section className="relative overflow-hidden mb-16 border-y border-[#222222] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações Textuais */}
            <div className="lg:col-span-7">
              {service.badge && (
                <div className="mb-4">
                  <Badge variant="yellow">{service.badge}</Badge>
                </div>
              )}

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-heading leading-tight">
                {service.title}
              </h1>

              {service.quote && (
                <p className="mt-4 text-base sm:text-xl text-[#FFD100] italic font-semibold border-l-4 border-[#FFD100] pl-3">
                  &ldquo;{service.quote}&rdquo;
                </p>
              )}

              <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href={customWhatsAppUrl}
                  isExternal
                  variant="primary"
                  size="lg"
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  iconPosition="left"
                  className="font-black"
                >
                  Solicitar Cotação no WhatsApp
                </Button>
                <Button
                  href="/#contato"
                  variant="secondary"
                  size="lg"
                >
                  Preencher Formulário
                </Button>
              </div>
            </div>

            {/* Imagem em Destaque com Moldura Tática */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-[#2A2A2A] shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.8] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 right-4 p-3 rounded-lg bg-[#0A0A0A]/90 border border-[#FFD100] text-[#FFD100]">
                  <IconHelper name={service.icon} className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Detalhado em 3 Blocos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Bloco 1: Benefícios e Vantagens */}
        <section className="bg-[#121212] border border-[#242424] rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222222]">
            <div className="p-2.5 rounded-lg bg-[#1F1F1F] text-[#FFD100]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                Diferenciais Exclusivos
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading">
                Benefícios &amp; Padrões de Qualidade
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#181818] border border-[#2B2B2B]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200 leading-normal font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 2: Para Quem é Indicado */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-[#121212] border border-[#242424] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#222222]">
              <div className="p-2.5 rounded-lg bg-[#1F1F1F] text-[#FFD100]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                  Perfil de Atendimento
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                  Para Quem Este Serviço é Indicado
                </h3>
              </div>
            </div>

            <ul className="space-y-3">
              {service.targetAudience.map((target, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-lg bg-[#181818]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFD100]" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco 3: Rigor Operacional */}
          <div className="lg:col-span-6 bg-[#121212] border border-[#242424] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#222222]">
              <div className="p-2.5 rounded-lg bg-[#1F1F1F] text-[#FFD100]">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                  Diretrizes de Campo
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                  Rigor Operacional &amp; Protocolos
                </h3>
              </div>
            </div>

            <ul className="space-y-3">
              {service.operationalDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-lg bg-[#181818]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFD100]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Card CTA Fundo Amarelo para este Serviço */}
        <section className="rounded-2xl bg-[#FFD100] text-[#0A0A0A] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A0A0A] text-[#FFD100] text-xs font-black uppercase tracking-wider mb-4">
            <ShieldAlert className="w-4 h-4 fill-current" />
            <span>Consultoria e Visita Técnica no Litoral de SP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading max-w-3xl leading-tight">
            Interessado em {service.title}?
          </h2>

          <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A0A0A]/85 max-w-2xl">
            Realizamos uma vistoria técnica no seu posto ou operação para apresentar o dimensionamento exato e a proposta comercial.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              href={customWhatsAppUrl}
              isExternal
              variant="black"
              size="lg"
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              iconPosition="left"
              className="font-black"
            >
              Falar no WhatsApp com o Plantão
            </Button>
            <Button
              href="/#contato"
              variant="dark"
              size="lg"
            >
              Enviar pelo Formulário
            </Button>
          </div>
        </section>

        {/* Outros Serviços Relacionados */}
        <section className="pt-10 border-t border-[#222222]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                Soluções Complementares
              </span>
              <h3 className="text-2xl font-black uppercase text-white font-heading">
                Outros Serviços da PM Neto
              </h3>
            </div>
            <Link
              href="/#servicos"
              className="text-xs font-bold uppercase tracking-wider text-[#FFD100] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Ver Todos os Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/servicos/${rel.slug}`}
                className="group rounded-xl bg-[#121212] border border-[#242424] hover:border-[#FFD100] p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1E1E1E] text-[#FFD100] border border-[#2E2E2E] flex items-center justify-center mb-4 group-hover:bg-[#FFD100] group-hover:text-[#0A0A0A] transition-colors">
                    <IconHelper name={rel.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-black uppercase text-white font-heading group-hover:text-[#FFD100] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1C1C1C] flex items-center text-xs font-bold uppercase tracking-wider text-[#FFD100]">
                  <span>Saiba Mais →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
