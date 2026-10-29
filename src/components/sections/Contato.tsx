"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { InstagramIcon as Instagram } from "../ui/InstagramIcon";

const formSchema = z.object({
  nome: z.string().min(2, "Por favor, informe seu nome completo"),
  empresa: z.string().optional(),
  telefone: z.string().min(9, "Informe um telefone/WhatsApp válido com DDD"),
  email: z.string().email("Informe um endereço de e-mail válido"),
  servico: z.string().min(1, "Selecione o serviço de interesse"),
  mensagem: z.string().min(10, "Escreva brevemente sobre a sua necessidade"),
  lgpdConsent: z.boolean().refine((val) => val === true, "Você precisa concordar com os termos de privacidade"),
});

type FormData = z.infer<typeof formSchema>;

export const Contato: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      telefone: "",
      email: "",
      servico: "",
      mensagem: "",
      lgpdConsent: false,
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
        setSubmitSuccess(true);
        reset();
      } else {
        setErrorMessage(resData.message || "Ocorreu uma falha ao enviar. Tente pelo WhatsApp.");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      setErrorMessage("Não foi possível conectar ao servidor. Por favor, utilize o botão de WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteContent.company.whatsappNumber}?text=${encodeURIComponent(
    siteContent.company.whatsappDefaultMessage
  )}`;

  return (
    <Section id="contato" variant="black" className="relative">
      {/* Faixa amarela decorativa angular no fundo */}
      <div className="absolute top-0 right-0 w-72 h-1.5 bg-[#FFD100] shadow-[0_0_20px_#FFD100]" />

      <Heading
        badge="Plantão & Orçamentos"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#FFD100]" />}
        title={
          <>
            Vamos proteger o que <span className="text-[#FFD100]">você construiu?</span>
          </>
        }
        subtitle="Fale agora mesmo com nossa equipe de operações. Solicite uma visita técnica sem compromisso no Litoral de SP."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Formulário de Contato com Validação */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="mb-6 pb-4 border-b border-[#222222] flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                Solicite uma Proposta Técnica
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Preencha os campos abaixo para um dimensionamento preciso.
              </p>
            </div>
            <Badge variant="yellow" className="text-[10px]">
              Resposta Rápida
            </Badge>
          </div>

          {submitSuccess ? (
            <div className="py-12 px-4 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FFD100] text-[#0A0A0A] flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black uppercase text-white font-heading">
                Solicitação Recebida com Sucesso!
              </h4>
              <p className="mt-3 text-sm text-gray-300 max-w-md">
                Nossa diretoria de operações já recebeu seus dados e retornará o contato com a proposta ou para agendar a visita técnica.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setSubmitSuccess(false)}
                  variant="dark"
                  size="sm"
                >
                  Enviar Nova Mensagem
                </Button>
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Falar no WhatsApp Imediatamente
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    {...register("nome")}
                    placeholder="Seu nome ou responsável"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Empresa / Condomínio
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    {...register("empresa")}
                    placeholder="Nome da empresa ou residencial"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    {...register("telefone")}
                    placeholder="(13) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-xs text-red-400">{errors.telefone.message}</p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    E-mail Corporativo *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="exemplo@empresa.com.br"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Tipo de Serviço */}
              <div>
                <label htmlFor="servico" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Tipo de Serviço Desejado *
                </label>
                <select
                  id="servico"
                  {...register("servico")}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors"
                >
                  <option value="">Selecione o serviço...</option>
                  {siteContent.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiplos Servicos / Pacote Completo">
                    Múltiplos Serviços / Pacote Completo Integrado
                  </option>
                </select>
                {errors.servico && (
                  <p className="mt-1 text-xs text-red-400">{errors.servico.message}</p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Detalhes da Necessidade / Cidade no Litoral *
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  {...register("mensagem")}
                  placeholder="Informe a localização do posto, número estimado de porteiros/vigilantes ou necessidades específicas..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-white text-sm focus:border-[#FFD100] focus:ring-1 focus:ring-[#FFD100] focus:outline-none transition-colors resize-none"
                />
                {errors.mensagem && (
                  <p className="mt-1 text-xs text-red-400">{errors.mensagem.message}</p>
                )}
              </div>

              {/* Checkbox LGPD */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("lgpdConsent")}
                    className="mt-1 w-4 h-4 rounded bg-[#0D0D0D] border-[#333333] text-[#FFD100] focus:ring-[#FFD100] accent-[#FFD100]"
                  />
                  <span className="text-xs text-gray-400 leading-normal">
                    Concordo com o tratamento dos meus dados exclusivamente para o envio do orçamento, de acordo com a{" "}
                    <Link href="/politica-de-privacidade" className="text-[#FFD100] underline hover:text-white">
                      Política de Privacidade e LGPD
                    </Link>.
                  </span>
                </label>
                {errors.lgpdConsent && (
                  <p className="mt-1 text-xs text-red-400">{errors.lgpdConsent.message}</p>
                )}
              </div>

              {/* Botão de Envio */}
              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )
                  }
                  iconPosition="right"
                >
                  {isSubmitting ? "Enviando Solicitação..." : "Enviar Pedido de Orçamento"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Informações de Contato Direto & WhatsApp Rápido */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card Amarelo de WhatsApp Direto */}
          <div className="rounded-2xl bg-[#FFD100] text-[#0A0A0A] p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-widest bg-[#0A0A0A] text-[#FFD100] px-3 py-1 rounded-full inline-block mb-3">
                Atendimento Imediato
              </span>
              <h4 className="text-2xl sm:text-3xl font-black uppercase font-heading leading-tight">
                Prefere falar agora pelo WhatsApp?
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-[#0A0A0A]/85">
                Clique no botão abaixo para iniciar uma conversa direta com nossa central operacional.
              </p>
            </div>

            <div className="mt-6 relative z-10">
              <Button
                href={whatsappUrl}
                isExternal
                variant="black"
                size="md"
                fullWidth
                icon={<MessageSquare className="w-5 h-5 fill-current" />}
                iconPosition="left"
                className="font-black"
              >
                Conversar com Especialista
              </Button>
            </div>
          </div>

          {/* Dados Institucionais com Ícones */}
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 sm:p-8 space-y-5">
            <h4 className="text-lg font-black uppercase text-white font-heading border-b border-[#222222] pb-3">
              Canais Diretos da Empresa
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1E1E1E] text-[#FFD100] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block font-bold">
                    Central Telefônica
                  </span>
                  <span className="text-white font-bold">{siteContent.company.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1E1E1E] text-[#FFD100] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block font-bold">
                    E-mail Comercial
                  </span>
                  <span className="text-white font-bold break-all">{siteContent.company.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1E1E1E] text-[#FFD100] shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block font-bold">
                    Instagram Oficial
                  </span>
                  <a
                    href={siteContent.company.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD100] hover:underline font-bold"
                  >
                    {siteContent.company.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1E1E1E] text-[#FFD100] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block font-bold">
                    Região de Atuação
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed block">
                    {siteContent.company.cityRegion}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#1E1E1E] text-[#FFD100] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block font-bold">
                    Plantão e Prontidão
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed block">
                    {siteContent.company.operatingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
