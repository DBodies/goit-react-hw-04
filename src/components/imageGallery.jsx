import ImgCards from "./imageCard";
import styles from './imageGallery.module.css'

const ImageGallery = ({ items, onImageClick }) => {

  if (items.length === 0) return null;

  return (
    <ul className={styles.listGallery}>
      {items.map((item) => (
        <li  key={item.id}>
          <ImgCards item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
};


export default ImageGallery;
