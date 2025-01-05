import { links } from "@/data/ui/nav";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        <NavbarLinks />
      </ul>
    </nav>
  );
}

function NavbarLinks() {
  return Object.entries(links).map(([key, value]) => (
    <li>
      <Link href={value}>{key}</Link>
    </li>
  ));
}