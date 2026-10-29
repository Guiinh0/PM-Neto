import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "black";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  diagonal?: boolean;
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
  diagonal = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD100] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 rounded-md",
    md: "text-sm px-5 py-3 gap-2 rounded-md",
    lg: "text-base px-7 py-4 gap-2.5 rounded-lg font-extrabold tracking-wider",
  };

  const variantStyles = {
    primary:
      "bg-[#FFD100] text-[#0A0A0A] hover:bg-[#E6BC00] hover:shadow-[0_4px_20px_rgba(255,209,0,0.35)] hover:-translate-y-0.5 border border-[#FFD100]",
    secondary:
      "bg-transparent text-[#FFD100] border-2 border-[#FFD100] hover:bg-[#FFD100] hover:text-[#0A0A0A] hover:shadow-[0_4px_20px_rgba(255,209,0,0.25)] hover:-translate-y-0.5",
    dark:
      "bg-[#1A1A1A] text-white border border-[#2E2E2E] hover:border-[#FFD100] hover:text-[#FFD100] hover:bg-[#222222]",
    black:
      "bg-[#0A0A0A] text-[#FFD100] border-2 border-[#0A0A0A] hover:bg-[#1A1A1A] hover:border-[#FFD100] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const diagonalStyle = diagonal ? "diagonal-cut-accent" : "";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${diagonalStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:") || href.startsWith("mailto:")) {
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
