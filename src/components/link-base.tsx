import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const baseStyles = "transition-colors duration-200";
  
  const variantClasses = {
    menu: "text-body2-all-medium text-gray-600 hover:text-gray-900 active:text-gray-600 dark:text-body2-all-medium dark:text-gray-dark-600 dark:hover:text-gray-dark-900 dark:active:text-gray-dark-600",
    normal: "text-body2-all-normal underline text-gray-600 hover:text-gray-900 active:text-gray-600 dark:text-body2-all-normal dark:underline dark:text-gray-dark-600 dark:hover:text-gray-dark-900 dark:active:text-gray-dark-600"
  };

  return (
    <Link
      href={href} 
      className={cn(
        baseStyles,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

