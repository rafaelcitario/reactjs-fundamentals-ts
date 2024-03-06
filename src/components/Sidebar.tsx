import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://cdn.pensador.com/img/authors/ty/ri/tyrion-lannister-2-l.jpg"
        />
        <strong>Tyrion Lannister</strong>
        <span>Mão do Rei</span>
      </div>
      <footer>
        <button>
          <a href="#">
            <PencilSimpleLine size={20} weight="bold" />
            Edite seu perfil
          </a>
        </button>
      </footer>
    </aside>
  );
};
