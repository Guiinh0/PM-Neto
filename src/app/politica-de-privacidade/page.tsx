import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | PM Neto Segurança",
  description: "Diretrizes de privacidade e proteção de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) - PM Neto Prestação de Serviços.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-[#FFD100] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#FFD100]" />
          <span className="text-[#FFD100] font-bold">Política de Privacidade</span>
        </nav>

        <div className="bg-[#121212] border border-[#242424] rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222222]">
            <div className="p-3 rounded-lg bg-[#1E1E1E] text-[#FFD100]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                Conformidade Legal (Lei 13.709/2018)
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white font-heading">
                Política de Privacidade
              </h1>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              A <strong>PM Neto – Prestação de Serviços (Pietro Maria Neto Vigilância e Segurança)</strong>, inscrita no CNPJ sob o nº <strong>{siteContent.company.cnpj}</strong>, tem como princípio inegociável a proteção, segurança e confidencialidade das informações dos seus usuários, clientes e parceiros comerciais.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              1. Coleta e Finalidade dos Dados
            </h2>
            <p>
              Os dados coletados em nossos formulários de contato e canais de WhatsApp (tais como nome, telefone, e-mail e empresa) destinam-se exclusivamente à identificação do solicitante para a elaboração de diagnósticos técnicos, propostas comerciais de segurança e atendimento operacional.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              2. Não Compartilhamento com Terceiros
            </h2>
            <p>
              A PM Neto não vende, aluga ou cede dados pessoais a terceiros sob nenhuma circunstância. Todas as informações recebidas são tratadas sob rigoroso sigilo operacional inerente aos serviços de segurança privada.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              3. Uso de Cookies e Tecnologias de Navegação
            </h2>
            <p>
              Utilizamos cookies estritamente necessários para viabilizar a navegação rápida e segura em nossa plataforma, além de cookies analíticos anônimos para entender os pontos de interesse dos visitantes e otimizar nosso conteúdo.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              4. Direitos do Titular de Dados
            </h2>
            <p>
              Conforme previsto no Artigo 18 da LGPD, o titular dos dados possui o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a revogação de seu consentimento, bastando enviar um e-mail para <strong>{siteContent.company.email}</strong>.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              5. Contato do Encarregado de Dados (DPO)
            </h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato através da nossa central:
            </p>
            <div className="p-4 rounded-lg bg-[#181818] border border-[#2B2B2B] text-xs sm:text-sm font-mono text-gray-300">
              <p><strong>Encarregado LGPD:</strong> Diretoria Operacional – PM Neto Segurança</p>
              <p><strong>E-mail:</strong> {siteContent.company.email}</p>
              <p><strong>Telefone:</strong> {siteContent.company.phone}</p>
              <p><strong>Endereço:</strong> {siteContent.company.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
