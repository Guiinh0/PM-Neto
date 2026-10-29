import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { MobileCTABar } from "@/components/common/MobileCTABar";
import { CookieConsent } from "@/components/common/CookieConsent";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pmnetoserv.com.br"),
  title: "PM Neto Segurança | Vigilância, Escolta e Monitoramento no Litoral de SP",
  description:
    "Pietro Maria Neto Vigilância e Segurança. Segurança patrimonial armada e desarmada, escolta rodoviária e marítima, monitoramento 24h, portaria e conservação no Litoral de São Paulo.",
  keywords: [
    "segurança privada litoral sp",
    "vigilância patrimonial",
    "escolta armada",
    "segurança marítima",
    "portaria",
    "monitoramento",
    "transporte de valores",
    "Pietro Maria Neto",
    "PM Neto",
    "Santos",
    "Guarujá",
    "Praia Grande",
    "São Vicente",
    "Bertioga",
    "Riviera de São Lourenço",
    "São Sebastião",
    "Litoral Paulista",
  ],
  authors: [{ name: "Pietro Maria Neto Segurança e Vigilância LTDA" }],
  creator: "PM Neto - Segurança e Vigilância",
  publisher: "Pietro Maria Neto Segurança e Vigilância LTDA",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pmnetoserv.com.br",
    title: "PM Neto Segurança | Vigilância, Escolta e Monitoramento no Litoral de SP",
    description: "Segurança é necessidade, não luxo. Soluções completas de segurança privada e marítima no Litoral de São Paulo.",
    siteName: "PM Neto – Prestação de Serviços",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "PM Neto Vigilância e Segurança no Litoral de SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Neto Segurança | Vigilância, Escolta e Monitoramento no Litoral de SP",
    description: "Segurança é necessidade, não luxo. Soluções completas de segurança privada e marítima no Litoral de São Paulo.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileCTABar />
        <CookieConsent />
      </body>
    </html>
  );
}
