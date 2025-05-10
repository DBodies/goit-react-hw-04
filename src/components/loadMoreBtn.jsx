import styles from './searchBar.module.css'

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div>
            <button className={styles.buttonStyled} onClick={onClick}>Load More</button>
        </div>
    )
}
export default LoadMoreBtn