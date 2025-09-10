import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-800 text-white p-4"> {/* Estilos com Tailwind */}
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Meu blog pessoal</h1>
                <nav className="flex gap-4">{/* `gap-4` adiciona espaço entre os links */}
                <Link href="/" className="hover:underline">Home</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
        </nav>
      </div>
    </header>    
    )
 }