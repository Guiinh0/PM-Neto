import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | PM Neto Segurança",
  description: "Diretrizes de privacidade e proteção de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) - PM Neto Prestação de Serviços.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-12"
        >
          <Link href="/" className="hover:text-[#FFD100] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#FFD100]" />
          <span className="text-[#FFD100]">Política de Privacidade</span>
        </nav>

        <div className="mb-12 pb-8 border-b border-white/[0.08]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FFD100] block mb-3 font-mono">
            [ CONFORMIDADE LEGAL • LEI 13.709/2018 ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#F5F5F5]">
            Política de <span className="underline decoration-[#FFD100] decoration-2 underline-offset-8">Privacidade</span>
          </h1>
        </div>

        <div className="bg-[#161616] border border-white/[0.08] rounded-2xl p-8 sm:p-12 space-y-8 text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed shadow-xl">
          <p className="text-[#F5F5F5]">
            A <strong className="font-medium">PM Neto – Prestação de Serviços (Pietro Maria Neto Vigilância e Segurança)</strong>, inscrita no CNPJ sob o nº <strong className="font-medium text-[#FFD100]">{siteContent.company.cnpj}</strong>, tem como princípio inegociável a proteção, segurança e confidencialidade das informações dos seus usuários, clientes e parceiros comerciais.
          </p>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">01 // FINALIDADE</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Coleta e Finalidade dos Dados
            </h2>
            <p>
              Os dados coletados em nossos formulários de contato e canais de WhatsApp (tais como nome, telefone, e-mail e empresa) destinam-se exclusivamente à identificação do solicitante para a elaboração de diagnósticos técnicos, propostas comerciais de segurança e atendimento operacional.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">02 // SIGILO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Não Compartilhamento com Terceiros
            </h2>
            <p>
              A PM Neto não vende, aluga ou cede dados pessoais a terceiros sob nenhuma circunstância. Todas as informações recebidas são tratadas sob rigoroso sigilo operacional inerente aos serviços de segurança privada.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">03 // NAVEGAÇÃO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Uso de Cookies e Tecnologias de Navegação
            </h2>
            <p>
              Utilizamos cookies estritamente necessários para viabilizar a navegação rápida e segura em nossa plataforma, além de cookies analíticos anônimos para entender os pontos de interesse dos visitantes e otimizar nosso conteúdo.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">04 // DIREITOS LGPD</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Direitos do Titular de Dados
            </h2>
            <p>
              Conforme previsto no Artigo 18 da LGPD, o titular dos dados possui o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a revogação de seu consentimento, bastando enviar um e-mail para <strong className="font-normal text-[#F5F5F5]">{siteContent.company.email}</strong>.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">05 // DPO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Contato do Encarregado de Dados (DPO)
            </h2>
            <p className="mb-4">
              Para esclarecer dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato através da nossa central:
            </p>
            <div className="p-5 rounded-xl bg-[#0A0A0A] border border-white/[0.08] text-xs sm:text-sm font-mono text-[#A0A0A0] space-y-1.5">
              <p><span className="text-[#F5F5F5]">Encarregado LGPD:</span> Diretoria Operacional – PM Neto Segurança</p>
              <p><span className="text-[#F5F5F5]">E-mail:</span> {siteContent.company.email}</p>
              <p><span className="text-[#F5F5F5]">Telefone:</span> {siteContent.company.phone}</p>
              <p><span className="text-[#F5F5F5]">Endereço:</span> {siteContent.company.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
