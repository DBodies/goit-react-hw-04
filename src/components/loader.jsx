import { RiseLoader } from "react-spinners"
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loaderStyle}>
        <RiseLoader/>
        </div>
    )
}
export default Loader