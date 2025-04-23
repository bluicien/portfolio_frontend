import capyBara from '../../assets/images/inprogress-capybara.png';
import styles from './InProgress.module.css';

export default function InProgress() {
    return (
        <div className={styles.inProgressPage} >
            <div className={styles.msgContainer} >
                <h1>In Progress</h1>
                <p>This page is in construction. Please come back at a later date.</p>
            </div>
            <div className={styles.imgContainer}>
                <img src={capyBara} alt="" />
            </div>
        </div>
  )
}