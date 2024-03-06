import { format, formatDistanceToNow} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comentary } from "./Comentary";
import styles from "../components/Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";


interface Author{
  name: string,
  role: string,
  avatarUrl: string,
}

interface Content{
  paragraphs: string[],
  links: string[],
}

interface postProps{
  author: Author,
  content: Content
  publishedAt: Date,
}


export const Post = ({author, publishedAt, content}: postProps) => {
  const [commentaryList, setCommentaryList] = useState<string[]>([]) ;
  const [commentaryContent, setCommentaryContent] = useState("");

  // Formating date and hours using date-fns
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLL 'às' HH:mm",
    { locale: ptBR }
  );

  // formating the difference of publish time use date-fns to
  const distancePublishedDatetoNow = formatDistanceToNow(
    publishedAt.toString(),
    { locale: ptBR, includeSeconds: true }
  )
    .replace("cerca de", "há")
    .concat("  atrás");

  function handleSubmitFormCommentary(event: FormEvent) {
    event.preventDefault();
    
    setCommentaryList([...commentaryList, commentaryContent]);
    setCommentaryContent("");
  }

  function handleChangeComentaryField(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentaryContent(event.target.value);
    event.target.setCustomValidity("");
  }

  function deleteComment(comment: string){
    const commentListWithoutDeletedOne = commentaryList.filter(itemToRemove => {
      return itemToRemove !== comment;
    })

    setCommentaryList(commentListWithoutDeletedOne);
  }

  function handleValidateCommentField(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event.target.setCustomValidity('Por favor insira sua menssagem antes de públicar.'))
  }

  const isDisableWhenIsEmpity = commentaryContent.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {distancePublishedDatetoNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.paragraphs?.map((paragraph) => {
          return <p key={paragraph}>{paragraph}</p>;
        })}
        {content.links?.map((links) => {
          return <p key={links}><a href="">{links}</a></p>;
        })}
      </div>

      <footer className={styles.comentaryForm}>
        <form onSubmit={handleSubmitFormCommentary}>
          <strong>Deixe seu feedback</strong>
          <textarea
            required
            onChange={handleChangeComentaryField}
            onInvalid={handleValidateCommentField}
            name="commentArea"
            value={commentaryContent}
            maxLength={3000}
            placeholder="O que você pensa sobre isso?"
          />
          <div className={styles.buttonContainer}>
            <button type="submit" disabled={isDisableWhenIsEmpity} >Publicar</button>
          </div>
        </form>
      </footer>

      <div className={styles.commentList}>
        {commentaryList.map((comment: string) => {
          return <Comentary key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
};
