import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

export default function PostPage({ params }: { params: { slug: string } }) {
  //Recebe o 'slug' da URL através dos parâmetros
  const slug = params.slug;

  // Encontra o post correspondente ao slug
  const post = posts.find((post) => post.slug === params.slug);

  // Se o post não for encontrado, retorna uma página 404
  if (!post) {
    return notFound();
  }

  //Se encontra o post, exibe seu título e conteúdo
  return (
    <main>
      <div>
        <h1 className="text-blue-500 text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-200">{post.content}</p>
        <LikeButton postSlug={post.slug} />
      </div>
    </main>
  );
}
