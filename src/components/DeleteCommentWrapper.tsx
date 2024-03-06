import styles from './DeleteCommentWrapper.module.css';

export function DeleteCommentBox() {
  return (
    <div className={styles.deletWrapper}>
      <div className={styles.deleteBox}>
        <div className={styles.deleteAlert}>
          <strong>Excluir comentário</strong>
          <p>
            Você tem certeza que gostaria de excluir este comentário?
          </p>
        </div>

        <div className={styles.deletNavigation}>
          <button>cancelar</button>
          <button>Sim, excluir</button>
        </div>
      </div>
    </div>
  );
}