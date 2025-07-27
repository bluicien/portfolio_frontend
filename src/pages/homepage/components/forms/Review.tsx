import styles from './Form.module.css';

import { useState } from 'react';
import { ImStarFull } from "react-icons/im";

type Message = {
    name: string;
    rating: number;
    review: string;
}

export default function Review() {
    const [ userReview, setUserReview ] = useState<Message>({ name: "", rating: 0, review: "" });
    const [starHovered, setStarHovered] = useState<number>(0)

    const handleKeyStroke = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        e.preventDefault();
        const { target } = e;
        if (target) {
            const { name, value } = target;
            setUserReview(prevMessage => {
                return ({
                    ...prevMessage,
                    [name]: value
                })
            })
        }
    }
    
    const handleClickStar = (ratingNumber: number): void => {
        if (userReview.rating === ratingNumber && userReview.rating !== 0) {
            setUserReview(prevUserReview => ({...prevUserReview, rating: 0}))
        } else {
            setUserReview(prevUserReview => ({...prevUserReview, rating: ratingNumber}))
        }
    }

    return (
        <form className={styles.formField} >
            <fieldset className={styles.field} >
                <legend className={styles.formTitle} >Review</legend>
                <label className={styles.formLabel} htmlFor="name">Name: </label>
                <input className={styles.formInput} type="text" name="name" id="name" value={userReview.name} onChange={handleKeyStroke} />
                <label className={styles.formLabel} htmlFor="review">Rating: </label>
                <div>
                {Array.from({ length: 5 }).map((_, index) => (
                    <ImStarFull
                        key={index}
                        color={(userReview.rating >= index + 1 || starHovered >= index + 1) ? 'gold' : ''}
                        onClick={() => handleClickStar(index + 1)}
                        onMouseEnter={() => setStarHovered(index + 1)}
                        onMouseLeave={() => setStarHovered(0)}
                    />
                ))}                    
                {/* <ImStarFull color={(userReview.rating >= 1 || starHovered >= 1) ? 'gold' : ''} onClick={() => handleClickStar(1)} onMouseEnter={() => setStarHovered(1)} onMouseLeave={() => setStarHovered(0)} />
                <ImStarFull color={(userReview.rating >= 2 || starHovered >= 2) ? 'gold' : ''} onClick={() => handleClickStar(2)} onMouseEnter={() => setStarHovered(2)} onMouseLeave={() => setStarHovered(0)} />
                <ImStarFull color={(userReview.rating >= 3 || starHovered >= 3) ? 'gold' : ''} onClick={() => handleClickStar(3)} onMouseEnter={() => setStarHovered(3)} onMouseLeave={() => setStarHovered(0)} />
                <ImStarFull color={(userReview.rating >= 4 || starHovered >= 4) ? 'gold' : ''} onClick={() => handleClickStar(4)} onMouseEnter={() => setStarHovered(4)} onMouseLeave={() => setStarHovered(0)} />
                <ImStarFull color={(userReview.rating >= 5 || starHovered >= 5) ? 'gold' : ''} onClick={() => handleClickStar(5)} onMouseEnter={() => setStarHovered(5)} onMouseLeave={() => setStarHovered(0)} /> */}
                </div>
                <input type="text" hidden />
                <label className={styles.formLabel} htmlFor="review">Review: </label>
                <textarea className={styles.textBox} name="review" id="review" value={userReview.review} onChange={handleKeyStroke} ></textarea><br />
                <button className={styles.formBtn} >Leave Review!</button>
            </fieldset>
        </form>
    )
}
