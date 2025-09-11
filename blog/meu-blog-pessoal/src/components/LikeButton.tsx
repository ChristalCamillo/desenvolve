// Isso diz ao Next.js: "Este componente é interativo e precisa rodar no navegador."
"use client";

// O useState é um "Hook" que permite ao nosso componente ter "memória" (estado).
import { useState, useEffect } from "react";

// Precisamos saber para QUAL post é o like. Vamos receber o 'slug' do post.
type Props = {
  postSlug: string;
};

export default function LikeButton({ postSlug }: Props) {
  // A chave única para este post no localStorage
  const storageKey = `likes_${postSlug}`;

  // Criação de um estado para guardar o número de curtidas.
  // `likes` é o valor atual, `setLikes` é a função para atualizar esse valor.
  // Começa com 0.
  const [likes, setLikes] = useState(0);

  // Use o useEffect para LER do localStorage APENAS no cliente.
  // Este efeito roda uma única vez, assim que o componente é "montado" no navegador.
  useEffect(() => {
    const savedLikes = localStorage.getItem(storageKey);
    // Se encontrarmos um valor salvo, atualizamos o estado.
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
  }, [storageKey]); // A dependência garante que o efeito rode se o slug mudar.

  // Função chamada quando o botão é clicado.

  // A função de clique agora faz as duas coisas:
  // - Atualiza o estado para a UI reagir.
  // - Salva o novo valor no localStorage para persistir.
  function handleLike() {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, JSON.stringify(newLikes));
  }

  //O botão usa o evento 'onClick' para chamar nossa função.
  return (
    <button
      onClick={handleLike}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      ❤️ Like {likes}
    </button>
  );
}
