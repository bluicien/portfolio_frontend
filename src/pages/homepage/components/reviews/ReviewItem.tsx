import styles from "./ReviewFeed.module.css";
import { ImStarFull } from "react-icons/im";

function ReviewItem() {
    return (
        <div className={styles.reviewItem} >
            <p><span>Name:</span> Brendon | Senior Developer</p>
            <p className={styles.ratingStar} ><span>Rating:&nbsp;</span> 5<ImStarFull className={styles.star} color='gold' /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    )
}

export default ReviewItem