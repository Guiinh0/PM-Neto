import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | PM Neto Segurança",
  description: "Termos e condições gerais de uso do site institucional da PM Neto – Prestação de Serviços.",
};

export default function TermosPage() {
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
          <span className="text-[#FFD100]">Termos de Uso</span>
        </nav>

        <div className="mb-12 pb-8 border-b border-white/[0.08]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FFD100] block mb-3 font-mono">
            [ CONDIÇÕES GERAIS • DIRETRIZES INSTITUCIONAIS ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#F5F5F5]">
            Termos de <span className="underline decoration-[#FFD100] decoration-2 underline-offset-8">Uso</span>
          </h1>
        </div>

        <div className="bg-[#161616] border border-white/[0.08] rounded-[4px] p-8 sm:p-12 space-y-8 text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed">
          <p className="text-[#F5F5F5]">
            Ao acessar o site da <strong className="font-medium">PM Neto - Segurança e Vigilância ({siteContent.company.legalName})</strong>, inscrita no CNPJ sob o nº <strong className="font-medium text-[#FFD100]">{siteContent.company.cnpj}</strong>, o usuário concorda em cumprir e respeitar os termos e condições aqui estabelecidos.
          </p>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">01 // OBJETO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Finalidade Institucional
            </h2>
            <p>
              Este website destina-se a fornecer informações institucionais sobre as atividades, áreas de cobertura e soluções operacionais da PM Neto no Litoral de São Paulo, além de servir como canal direto de contato e solicitação de diagnósticos técnicos.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">02 // DIREITOS AUTORAIS</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Propriedade Intelectual
            </h2>
            <p>
              Todos os textos, logomarcas, ícones, códigos, representações tridimensionais, imagens e materiais visuais exibidos neste site são de titularidade da PM Neto ou devidamente licenciados, sendo protegidos pela legislação de direitos autorais e propriedade industrial. É vedada qualquer reprodução sem autorização prévia por escrito.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">03 // CONTRATAÇÃO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Propostas Comerciais e Vistorias
            </h2>
            <p>
              As descrições e valores de serviços são sempre formalizados mediante vistoria técnica presencial e contrato específico de prestação de serviços de segurança privada, não gerando este site vínculo contratual automático.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#FFD100] block mb-1">04 // JURISDIÇÃO</span>
            <h2 className="text-xl font-normal text-[#F5F5F5] mb-3">
              Foro e Legislação Aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de Bertioga / Estado de São Paulo para dirimir quaisquer controvérsias decorrentes deste instrumento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
