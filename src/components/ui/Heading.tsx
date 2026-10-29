import React from "react";
import { Badge } from "./Badge";

interface HeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean; // When placed on full yellow background
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className = "",
}) => {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge
            variant={inverted ? "black" : "outline"}
            icon={badgeIcon}
          >
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.08] ${
          inverted ? "text-[#0A0A0A]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? "text-[#1F1F1F]/90 font-medium" : "text-[#B8B8B8]"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Linha de detalhe amarela se alinhado ao centro */}
      <div
        className={`h-1 rounded-full mt-5 ${
          inverted ? "w-16 bg-[#0A0A0A]" : "w-16 bg-[#FFD100]"
        }`}
      />
    </div>
  );
};
