import PropTypes from "prop-types";
import styles from "./imageCard.module.css";

const ImageCard = ({ item, onClick }) => {
  const { urls, alt_description } = item;

  return (
    <div onClick={() => onClick(item)}>
      <img className={styles.image} src={urls.small} alt={alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
