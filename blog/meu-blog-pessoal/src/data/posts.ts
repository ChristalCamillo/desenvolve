// Isso define a "forma" que um objeto de post deve ter. É uma boa prática do TypeScript!
export type Post = {
  id: string;
  title: string;
  slug: string; // `slug` é uma versão do título para ser usada na URL
  content: string;
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'O que são Server Components?',
    slug: 'o-que-sao-server-components',
    content: 'Server Components são uma nova arquitetura do React que permite renderizar componentes no servidor...',
  },
  {
    id: '2',
    title: 'Entendendo Roteamento no App Router',
    slug: 'entendendo-roteamento-app-router',
    content: 'O App Router do Next.js usa um sistema de roteamento baseado em arquivos e pastas...',
  },
  {
    id: '3',
    title: 'Como Estilizar com Tailwind CSS',
    slug: 'como-estilizar-com-tailwind-css',
    content: 'Tailwind CSS é um framework utility-first que permite construir designs customizados rapidamente...',
  },
];