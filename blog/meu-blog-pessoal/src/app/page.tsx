import Link from "next/link";
import { posts } from "../data/posts";

export default function HomePage() {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <ul className="space-y-2">
          {/* `space-y-2` adiciona espaço vertical entre os itens da lista */}
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className=" text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
