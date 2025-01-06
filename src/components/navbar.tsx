import { links } from "@/data/ui/nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const baseClasses = cn("flex items-center gap-6", className);
  return (
    <nav>
      <ul className={baseClasses}>
        <NavbarLinks />
      </ul>
    </nav>
  );
}

function NavbarLinks() {
  return Object.entries(links).map(([key, value]) => {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    return (
      <li key={key}>
        <Link href={value}>{capitalizedKey}</Link>
      </li>
    );
  });
}