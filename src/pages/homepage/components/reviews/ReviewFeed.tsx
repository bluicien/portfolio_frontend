import ReviewItem from "./ReviewItem";
import styles from "./ReviewFeed.module.css";

function ReviewFeed() {
    return (
        <section>
            <h3 className={styles.sectionTitle} >Reviews</h3>
            <div className={styles.reviewList} >
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </div>
        </section>
    )
}

export default ReviewFeed;