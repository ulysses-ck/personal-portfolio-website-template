import { cn } from "@/lib/utils";

export default function Tag({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("bg-gray-200 text-body3-all-medium px-5 py-1 rounded-xl text-gray-600 dark:bg-gray-dark-200 dark:text-gray-dark-600", className)}>{children}</div>;
}

