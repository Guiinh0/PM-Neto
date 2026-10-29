import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  variant?: "black" | "dark" | "surface" | "yellow";
  className?: string;
  containerClassName?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  variant = "black",
  className = "",
  containerClassName = "",
  noPadding = false,
}) => {
  const bgStyles = {
    black: "bg-[#0A0A0A] text-white",
    dark: "bg-[#121212] text-white border-y border-[#1E1E1E]",
    surface: "bg-[#181818] text-white border-y border-[#262626]",
    yellow: "bg-[#FFD100] text-[#0A0A0A]",
  };

  const paddingStyle = noPadding ? "" : "py-16 sm:py-20 md:py-28";

  return (
    <section id={id} className={`relative overflow-hidden ${bgStyles[variant]} ${paddingStyle} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
