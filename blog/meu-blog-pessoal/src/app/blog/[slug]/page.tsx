import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

// Informamos ao Next.js quais páginas devem ser geradas no build.
// Esta função cria a os slugs dinâmicos.
// ESSA SOLUÇÃO É PARA NEXT 13.4.7, VERSÕES MAIS RECENTES NÃO PRECISAM DESSA FUNÇÃO
// CASO ESTEJA USANDO UMA VERSÃO MAIS RECENTE, COMENTE A FUNÇÃO ABAIXO
// export async function generateStaticParams() {
//   // Retornamos um array de objetos, onde cada objeto tem uma propriedade 'slug'
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;

  // Encontra o post correspondente ao slug
  const post = posts.find((p) => p.slug === slug);

  // Se o post não for encontrado, retorna uma página 404
  if (!post) {
    return notFound();
  }

  //Se encontra o post, exibe seu título e conteúdo
  return (
    <main>
      <div>
        <h1 className="text-foreground text-3xl font-bold mb-4">
          {post.title}
        </h1>
        <p className="text-muted-foreground">{post.content}</p>
        <LikeButton postSlug={post.slug} />
      </div>
    </main>
  );
}
