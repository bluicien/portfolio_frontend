import ReviewItem from "./ReviewItem";
import styles from "./ReviewFeed.module.css";
import { ReviewItemProps } from "./types.ts";
import { useEffect, useState } from "react";

function ReviewFeed() {
    const [ reviews, setReviews ] = useState<ReviewItemProps[]>([]);

    useEffect(() => {
        // Fetch reviews from backend API
        async function fetchReviews() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/feedback`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ReviewItemProps[] = await response.json();
                console.log(data)
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }
        fetchReviews();
    }, []);

    return (
        <section>
            <h3 className={styles.sectionTitle} >Reviews</h3>
            <div className={styles.reviewList} >
                {reviews.length === 0 && <p className={styles.noReviews}>Sorry! This feature is still in development 😊</p>}
                {reviews.map((review) => (
                    <ReviewItem key={review.userId} {...review} />
                ))}
            </div>
        </section>
    )
}

export default ReviewFeed;