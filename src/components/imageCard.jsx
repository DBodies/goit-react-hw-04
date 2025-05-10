
import styles from "./imageCard.module.css";

const ImageCard = ({ item, onClick }) => {
  const { urls, alt_description } = item;

  return (
    <div onClick={() => onClick(item)}>
      <img className={styles.image} src={urls.small} alt={alt_description} />
    </div>
  );
};



export default ImageCard;
