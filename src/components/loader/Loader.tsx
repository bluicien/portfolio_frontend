import styles from './Loader.module.css';
import { Html } from '@react-three/drei';

export default function Loader() {
  return (
    <Html>
        <div className={styles.loadingContainer} >
            <h2>LOADING...</h2>
            <div className={styles.spinner} />
        </div>
    </Html>
  )
}
