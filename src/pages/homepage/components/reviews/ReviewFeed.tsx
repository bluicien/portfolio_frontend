import ReviewItem, { ReviewItemProps } from "./ReviewItem";
import styles from "./ReviewFeed.module.css";

function ReviewFeed() {
    const reviews: ReviewItemProps[] = [] // Placeholder for future dynamic reviews
    return (
        <section>
            <h3 className={styles.sectionTitle} >Reviews</h3>
            <div className={styles.reviewList} >
                {reviews.length === 0 && <p className={styles.noReviews}>Sorry! This feature is still in development 😊</p>}
                {reviews.map((review) => (
                    <ReviewItem key={review.id} {...review} />
                ))}
            </div>
        </section>
    )
}

export default ReviewFeed;