import Modal from 'react-modal';
import styles from './imageModal.module.css'

const ImageModal = ({ isOpen, image, onClose }) => {
    if (!image) return null;

    return (
<Modal 
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Image Modal"
    ariaHideApp={false}
    overlayClassName={styles.modalOverlay}
    className={styles.modalContent}
>
    <div className={styles.wrapperModal}>
        <button className={styles.buttonStyled} onClick={onClose}>Close</button>
        <img 
            src={image.urls.regular} 
            alt={image.alt_description} 
            className={styles.modalImg} 
        />
    </div>
</Modal>

    );
};


export default ImageModal;
