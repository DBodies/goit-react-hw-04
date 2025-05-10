import ImgCards from "./imageCard";
import PropTypes from 'prop-types'
import styles from './imageGallery.module.css'

const ImageGallery = ({ items, onImageClick }) => {
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

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
