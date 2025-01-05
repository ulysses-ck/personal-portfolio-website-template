"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";

interface LinkBaseProps {
  href: string;
  children: React.ReactNode;
  variant?: "menu" | "normal";
  className?: string;
}

export default function LinkBase({ 
  href, 
  children, 
  variant = "normal",
  className 
}: LinkBaseProps) {
  const { theme } = useTheme();
  const baseStyles = "transition-colors duration-200";
  
  const variantClasses = {
    menu: {
      light: "text-body2-all-medium text-gray-600 hover:text-gray-900 active:text-gray-600",
      dark: "text-body2-all-medium text-gray-dark-600 hover:text-gray-dark-900 active:text-gray-dark-600"
    },
    normal: {
      light: "text-body2-all-normal underline text-gray-600 hover:text-gray-900 active:text-gray-600",
      dark: "text-body2-all-normal underline text-gray-dark-600 hover:text-gray-dark-900 active:text-gray-dark-600"
    }
  };

  return (
    <Link
      href={href} 
      className={cn(
        baseStyles,
        variantClasses[variant][theme === "light" ? "light" : "dark"],
        className
      )}
    >
      {children}
    </Link>
  );
}

