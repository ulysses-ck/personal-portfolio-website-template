import { cn } from "@/lib/utils";

export default function ButtonGeneric({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const baseLightClasses = "rounded-xl py-2 px-4 bg-gray-900 text-gray-50 hover:bg-gray-700 hover:text-gray-50 active:bg-gray-800 active:text-gray-50";
  const baseDarkClasses = "dark:bg-gray-dark-900 dark:text-gray-dark-50 dark:hover:bg-gray-dark-700 dark:hover:text-gray-dark-50 dark:active:bg-gray-dark-800 dark:active:text-gray-dark-50";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseLightClasses, baseDarkClasses, className)}
    >
      {children}
    </button>
  );
}
