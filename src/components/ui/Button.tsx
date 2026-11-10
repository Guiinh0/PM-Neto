import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer select-none rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100] active:translate-y-[1px] disabled:opacity-40 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-2 h-9",
    md: "text-sm px-6 py-3 gap-2.5 h-11",
    lg: "text-sm sm:text-base px-8 py-3.5 gap-3 h-12 font-medium tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-[#FFD100] text-[#0A0A0A] hover:bg-[#E6BC00] border border-[#FFD100] hover:-translate-y-[1px]",
    secondary:
      "bg-transparent text-[#F5F5F5] border border-white/20 hover:border-white/50 hover:bg-white/[0.04]",
    outline:
      "bg-transparent text-[#FFD100] border border-[#FFD100]/40 hover:border-[#FFD100] hover:bg-[#FFD100]/5",
    dark:
      "bg-[#141414] text-[#F5F5F5] border border-white/10 hover:border-white/25 hover:bg-[#1A1A1A]",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isOut =
      isExternal ||
      href.startsWith("http") ||
      href.startsWith("https://wa.me") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isOut) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
