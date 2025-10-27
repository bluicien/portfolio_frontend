import styles from "./ReviewFeed.module.css";
import { ImStarFull } from "react-icons/im";
import { ReviewItemProps } from "./types.ts";


function ReviewItem(reviewItem: ReviewItemProps) {


    return (
        <div className={styles.reviewItem} >
            <p><span>Name: </span>{reviewItem.username}</p>
            {reviewItem.role && <p><span>Role: </span>{reviewItem.role}</p>}
            <p className={styles.ratingStar} ><span>Rating:&nbsp;</span> {reviewItem.rating}<ImStarFull className={styles.star} color='gold' /></p>
            <p>{reviewItem.message}</p>
        </div>
    )
}

export default ReviewItem