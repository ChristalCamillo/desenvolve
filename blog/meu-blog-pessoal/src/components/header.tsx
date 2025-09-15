import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="py-4 mb-8 border-b">
      <div className="container flex justify-between p-3 max-w-3xl">
        <h1 className="font-bold text-xl">
          <Link href="/">Meu Blog Pessoal</Link>
        </h1>
        <div className="flex items-center gap-4">
          {" "}
          {/* Container para nav e switcher */}
          <nav className="flex gap-4">
            {" "}
            {/* Navegação */}
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
