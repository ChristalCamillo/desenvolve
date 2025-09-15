import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-3xl">
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
