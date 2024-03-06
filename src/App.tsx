import { Post } from "./components/Post";
import { Header } from "./components/Hearder";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: avatar, name, role
// content: paragraphs, links
// publishedAt: Date

const posts = [
  {
    id: 1,
    author: {
      name: "Jonn Snow",
      role: "Comandante da Guarda da Noite",
      avatarUrl: "https://static.glamurama.uol.com.br/2022/06/jon-snow.jpg",
    },
    content: {
      paragraphs: [
        "Em meio à escuridão do inverno, mantenham a chama da esperança acesa.",
        "Juntos, enfrentaremos qualquer desafio que o destino nos apresente.",
      ],
      links: ["#WinterIsComing #ForTheThrone"],
    },
    publishedAt: new Date("03-03-2024 14:40:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://static.glamurama.uol.com.br/2022/06/jon-snow.jpg",
      name: "Jonn Snow",
      role: "Comandante da Guarda da Noite",
    },
    content: {
      paragraphs: [
        "No coração do inverno, devemos manter a esperança ardente, mesmo quando as sombras se alongam.",
        "Juntos, enfrentaremos os ventos gelados e os perigos que o destino nos reserva.",
        "Quando a escuridão parecer intransponível, lembrem-se de que o sol sempre brilha além das muralhas do desespero. Cada alvorecer traz consigo a promessa de um novo dia e uma nova chance.",
        "O poder da união é como o aço valiriano, resistente e afiado. Nos laços que nos unem, encontramos a força para superar até os maiores inimigos.",
        "Que a canção de nossa determinação ecoe pelos recantos mais sombrios, iluminando nosso caminho com bravura e convicção. Pois, unidos, somos mais do que simples indivíduos. Somos a promessa de um futuro mais radiante.",
      ],
      links: ["#WinterIsComing #ForTheThrone"],
    },
    publishedAt: new Date("03-01-2024 13:56:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
