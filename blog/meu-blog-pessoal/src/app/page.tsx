import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>Bem-vindo ao meu blog pessoal!</h1>
            <p>Este é um espaço onde compartilho meus pensamentos, experiências e aprendizados sobre tecnologia, programação e desenvolvimento web.</p>
            <p>Fique à vontade para explorar os artigos e deixar seus comentários. Espero que você encontre algo interessante aqui!</p>
            <Link href="/sobre">Sobre mim</Link>
        </main>
    )
}