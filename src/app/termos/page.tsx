import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | PM Neto Segurança",
  description: "Termos e condições gerais de uso do site institucional da PM Neto – Prestação de Serviços.",
};

export default function TermosPage() {
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
          <span className="text-[#FFD100] font-bold">Termos de Uso</span>
        </nav>

        <div className="bg-[#121212] border border-[#242424] rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222222]">
            <div className="p-3 rounded-lg bg-[#1E1E1E] text-[#FFD100]">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FFD100] font-bold">
                Condições Gerais
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white font-heading">
                Termos de Uso do Site
              </h1>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Ao acessar o site da <strong>PM Neto - Segurança e Vigilância (Pietro Maria Neto Segurança e Vigilância LTDA)</strong>, inscrita no CNPJ sob o nº <strong>56.161.248/0001-99</strong>, o usuário concorda em cumprir e respeitar os termos e condições aqui estabelecidos.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              1. Finalidade Institucional
            </h2>
            <p>
              Este website destina-se a fornecer informações institucionais sobre as atividades, áreas de cobertura e soluções operacionais da PM Neto no Litoral de São Paulo, além de servir como canal direto de contato e solicitação de orçamentos técnicos.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              2. Propriedade Intelectual
            </h2>
            <p>
              Todos os textos, logomarcas, ícones, códigos, imagens e materiais visuais exibidos neste site são de titularidade da PM Neto ou devidamente licenciados, sendo protegidos pela legislação de direitos autorais e propriedade industrial. É vedada qualquer reprodução sem autorização prévia por escrito.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              3. Propostas Comerciais e Vistorias
            </h2>
            <p>
              As descrições e valores de serviços são sempre formalizados mediante vistoria técnica e contrato específico de prestação de serviços de segurança privada, não gerando este site vínculo contratual automático.
            </p>

            <h2 className="text-xl font-bold uppercase text-white font-heading pt-4 border-t border-[#222222]">
              4. Foro e Legislação Aplicável
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
