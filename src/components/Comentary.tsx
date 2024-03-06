import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Comentary.module.css";
import { useState } from "react";

interface ComentaryProps{
  content: string,
  onDeleteComment: (content: string) => void,
}


export const Comentary = ({ content, onDeleteComment }: ComentaryProps) => {
  const [clapInterator, setClapInterator] = useState(0);

  function handleDeleteComment() {
    return onDeleteComment(content);
  }



  const publishedDateFormatted = format(
    new Date().toString(),
    "dd 'de' LLL 'às' HH:mm",
    { locale: ptBR }
  );

  const publishedDistanceToNow = formatDistanceToNow(new Date().toString(), {
    locale: ptBR,
    includeSeconds: true,
  })
    .replace("menos de", "há")
    .replace("cerca de", "há")
    .concat("  atrás");


  function handleClapComentary() {
    /*
    * whenever you need to change the state of something
    * and to make these changes you depend on the previous value of that something
    * it is recommended to use this closure (callback)
    *
    * A closure is a callback
    * is a function called within another function.
     */
    setClapInterator((state) => {
      return state + 1;
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar 
      hasBorder={false}
      src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_57275281.jpg?quality=90&strip=all&zoom=1&resize=180%2C170" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cersei Lannister</strong>
              <time
                title={publishedDateFormatted}
                dateTime={new Date().toISOString()}
              >
                {publishedDistanceToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClapComentary} title="Curtir comentário">
            <ThumbsUp weight="bold" />
            Aplaudir
          </button>
          <span className={styles.likeNumber}>{clapInterator}</span>
        </footer>
      </div>
    </div>
  );
};
