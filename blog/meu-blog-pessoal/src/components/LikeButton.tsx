// Isso diz ao Next.js: "Este componente é interativo e precisa rodar no navegador."
"use client";

// O useState é um "Hook" que permite ao nosso componente ter "memória" (estado).
import { useState } from "react";

export default function LikeButton() {
  // Criação de um estado para guardar o número de curtidas.
  // `likes` é o valor atual, `setLikes` é a função para atualizar esse valor.
  // Começa com 0.
  const [likes, setLiked] = useState(0);

  function handleLike() {
    // Quando o botão é clicado, atualizamos o estado, adicionando 1 ao valor anterior.
    setLiked(likes + 1);
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
