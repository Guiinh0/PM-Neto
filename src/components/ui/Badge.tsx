import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "outline" | "dark" | "black";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  className = "",
  icon,
}) => {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider select-none";

  const variants = {
    yellow: "bg-[#FFD100] text-[#0A0A0A]",
    outline: "bg-[#FFD100]/10 text-[#FFD100] border border-[#FFD100]/40",
    dark: "bg-[#1F1F1F] text-gray-300 border border-[#2E2E2E]",
    black: "bg-[#0A0A0A] text-[#FFD100] border border-[#FFD100]/30",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
