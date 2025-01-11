import { cn } from "@/lib/utils";

interface ICardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className }: Readonly<ICardProps>) {
    return <div className={cn("bg-gray p-8 rounded-xl shadow-md", className)}>{children}</div>;
}
