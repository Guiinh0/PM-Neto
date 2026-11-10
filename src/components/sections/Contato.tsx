"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteContent } from "@/data/content";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Por favor, informe seu nome"),
  telefone: z.string().min(10, "Informe um telefone ou WhatsApp válido com DDD"),
  servico: z.string().min(1, "Selecione a especialidade desejada"),
  mensagem: z.string().min(5, "Descreva brevemente sua necessidade"),
});

type FormData = z.infer<typeof formSchema>;

function formatPhoneBR(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const Contato: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<FormData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      servico: "Segurança Patrimonial e Residencial",
      mensagem: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setLastSubmitted(data);
        setSubmitSuccess(true);
        reset();
      } else {
        setErrorMessage(resData.message || "Falha ao enviar mensagem. Entre em contato pelo WhatsApp.");
      }
    } catch {
      setErrorMessage("Não foi possível conectar. Por favor, utilize o botão de WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  const customWhatsAppSuccessUrl = lastSubmitted
    ? `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
        `Olá! Me chamo ${lastSubmitted.nome}. Solicitei diagnóstico pelo site para *${lastSubmitted.servico}*.\nDetalhes: ${lastSubmitted.mensagem}`
      )}`
    : whatsappUrl;

  return (
    <div id="contato" className="relative">
      {/* Bloco de Contato: Fundo Amarelo Sólido da Marca */}
      <section className="py-28 sm:py-40 bg-[#FFD100] text-[#0A0A0A] relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Lado Esquerdo: Título Gigante e CTA WhatsApp */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/70 block mb-4 font-mono font-bold">
                [ 05 // ATENDIMENTO IMEDIATO ]
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#0A0A0A] leading-[1.05]">
                Vamos proteger o que você <span className="font-semibold underline decoration-2 underline-offset-8">construiu.</span>
              </h2>
              <p className="mt-8 text-lg sm:text-xl text-[#0A0A0A]/85 max-w-xl font-normal leading-relaxed">
                Supervisão de operações dedicada 24h. Solicite um diagnóstico técnico e orçamento sob medida para o seu condomínio, empresa ou embarcação no Litoral.
              </p>

              {/* Botão Primário: Preto com Texto Amarelo */}
              <div className="mt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-[#FFD100] text-base font-semibold tracking-wide uppercase rounded-xl shadow-2xl hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0A0A0A]"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowUpRight className="w-5 h-5 text-[#FFD100]" />
                </a>
              </div>
            </div>

            {/* Lado Direito: Formulário com Campos de Fundo Preto */}
            <div className="lg:col-span-5 pt-4 lg:pt-0">
              <div className="bg-[#0A0A0A] p-8 sm:p-10 rounded-2xl shadow-2xl text-white border border-white/[0.08]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FFD100] block mb-2 font-mono font-medium">
                  Mensagem Direta
                </span>
                <h3 className="text-2xl font-light text-[#F5F5F5] mb-6">
                  Solicite uma visita técnica
                </h3>

                {submitSuccess ? (
                  <div className="py-6 text-left">
                    <div className="flex items-center gap-2 text-[#FFD100] mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium text-[#F5F5F5]">Solicitação registrada</span>
                    </div>
                    <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6 font-light">
                      Nossa diretoria de operações recebeu seus dados. Se desejar atendimento imediato com prioridade, clique abaixo para abrir a conversa já preenchida no WhatsApp:
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={customWhatsAppSuccessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-[#FFD100] text-[#0A0A0A] font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#E6BC00] transition-all flex items-center justify-center gap-2"
                      >
                        <span>Adiantar no WhatsApp Agora</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitSuccess(false)}
                        className="text-xs text-[#8A8A8A] underline hover:text-white transition-colors pt-1 cursor-pointer"
                      >
                        Enviar outra solicitação
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 text-xs text-red-300 bg-red-950/60 border border-red-800 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="nome" className="sr-only">
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        {...register("nome")}
                        placeholder="Nome completo *"
                        className="w-full px-4 py-3 bg-[#161616] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-[#8A8A8A] rounded-xl focus:outline-none focus:border-[#FFD100] transition-colors"
                      />
                      {errors.nome && (
                        <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telefone" className="sr-only">
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        inputMode="numeric"
                        {...register("telefone", {
                          onChange: (e) => {
                            const formatted = formatPhoneBR(e.target.value);
                            setValue("telefone", formatted, { shouldValidate: false });
                          },
                        })}
                        placeholder="WhatsApp / Telefone com DDD *"
                        className="w-full px-4 py-3 bg-[#161616] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-[#8A8A8A] rounded-xl focus:outline-none focus:border-[#FFD100] transition-colors"
                      />
                      {errors.telefone && (
                        <p className="mt-1 text-xs text-red-400">{errors.telefone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="servico" className="sr-only">
                        Especialidade desejada
                      </label>
                      <select
                        id="servico"
                        {...register("servico")}
                        className="w-full px-4 py-3 bg-[#161616] border border-white/[0.12] text-sm text-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#FFD100] transition-colors"
                      >
                        {siteContent.services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#161616] text-[#F5F5F5]">
                            {s.title}
                          </option>
                        ))}
                        <option value="Diagnóstico Completo / Outros" className="bg-[#161616] text-[#F5F5F5]">
                          Diagnóstico Completo / Outros
                        </option>
                      </select>
                      {errors.servico && (
                        <p className="mt-1 text-xs text-red-400">{errors.servico.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="sr-only">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        rows={3}
                        {...register("mensagem")}
                        placeholder="Detalhes (cidade, condomínio, marina ou empresa) *"
                        className="w-full px-4 py-3 bg-[#161616] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-[#8A8A8A] rounded-xl focus:outline-none focus:border-[#FFD100] transition-colors resize-none"
                      />
                      {errors.mensagem && (
                        <p className="mt-1 text-xs text-red-400">{errors.mensagem.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-[#FFD100] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-[#E6BC00] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <span>Enviar Pedido de Diagnóstico</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Preto Logo Abaixo da Seção de Contato */}
      <footer className="bg-[#0A0A0A] text-[#8A8A8A] py-16 border-t border-white/[0.08] relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 text-sm">
            <div className="md:col-span-5">
              <div className="relative w-40 h-9 mb-4">
                <Image
                  src="/logo.svg"
                  alt="PM Neto"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs text-[#8A8A8A] font-light leading-relaxed max-w-sm">
                Vigilância privada, portaria, monitoramento 24h e segurança marítima. {siteContent.company.cityRegion}.
              </p>
            </div>

            <div className="md:col-span-4 space-y-1 text-xs font-light">
              <span className="text-[11px] uppercase tracking-wider text-white/75 block mb-1 font-mono font-medium">
                Atendimento Oficial
              </span>
              <p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5F5] hover:text-[#FFD100] transition-colors py-1.5 inline-block"
                >
                  {siteContent.company.phone} (WhatsApp)
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteContent.company.email}`}
                  className="text-[#F5F5F5] hover:text-[#FFD100] transition-colors py-1.5 inline-block"
                >
                  {siteContent.company.email}
                </a>
              </p>
              <p className="text-[#A0A0A0] py-1">{siteContent.company.operatingHours}</p>
            </div>

            <div className="md:col-span-3 space-y-1 text-xs font-light">
              <span className="text-[11px] uppercase tracking-wider text-white/75 block mb-1 font-mono font-medium">
                Institucional
              </span>
              <p>
                <a
                  href={siteContent.company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5F5] hover:text-[#FFD100] transition-colors py-1.5 inline-block"
                >
                  Instagram {siteContent.company.instagram}
                </a>
              </p>
              <p>
                <Link
                  href="/politica-de-privacidade"
                  className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors py-1.5 inline-block"
                >
                  Política de Privacidade (LGPD)
                </Link>
              </p>
              <p>
                <Link
                  href="/termos"
                  className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors py-1.5 inline-block"
                >
                  Termos de Uso
                </Link>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A0A0A0] font-light font-mono">
            <span>{siteContent.footer.copyright}</span>
            <span>{siteContent.footer.cnpjNotice} • {siteContent.company.address}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
