import styles from "./Avatar.module.css";
export const Avatar = ({ src, hasBorder }) => {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatar : styles.avatarHasNoBorder}
    />
  );
};
