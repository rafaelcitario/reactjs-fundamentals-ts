import styles from "./Avatar.module.css";
interface AvatarProps{
  src: string,
  hasBorder: boolean,
}
export const Avatar = ({ src, hasBorder }: AvatarProps) => {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatar : styles.avatarHasNoBorder}
    />
  );
};
