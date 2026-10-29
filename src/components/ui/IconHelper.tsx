import React from "react";
import * as LucideIcons from "lucide-react";

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Shield;
  return <IconComponent className={className} size={size} />;
};
