import styles from './Form.module.css';

import { useState } from 'react';
import { ImStarFull } from "react-icons/im";

type Message = {
    name: string;
    company?: string;
    position?: string;
    ipAddress?: string;
    rating: number;
    review: string;
}

export default function Review() {
    const [ userReview, setUserReview ] = useState<Message>({ name: "", rating: 0, review: "", position: "", company: "" });
    const [ starHovered, setStarHovered ] = useState<number>(0)

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        console.log(userReview);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userReview),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Success:', data);
            alert('Thank you for your review!');
            setUserReview({ name: "", rating: 0, review: "", position: "", company: "" });
        }
        catch (error) {
            console.error('Error submitting review:', error);
            alert('There was an error submitting your review. Please try again later.');
        }
    }

    return (
        <form className={styles.formField} onSubmit={handleSubmit} >
            <fieldset className={styles.field} >
                <legend className={styles.formTitle} >Review</legend>
                <label className={styles.formLabel} htmlFor="name">Name* : </label>
                <input className={styles.formInput} type="text" name="name" id="name" value={userReview.name} onChange={handleKeyStroke} />
                <div className={styles.inlineInputs} >
                    <div className={styles.inlineFields} >
                        <label className={styles.formLabel} htmlFor="company">Company : </label>
                        <input className={styles.formInput} type="text" name="company" id="company" value={userReview.company} placeholder="Not Required" onChange={handleKeyStroke} />
                    </div>
                    <div className={styles.inlineFields} >
                        <label className={styles.formLabel} htmlFor="position">Position : </label>
                        <input className={styles.formInput} type="text" name="position" id="position" value={userReview.position} placeholder="Not Required" onChange={handleKeyStroke} />
                    </div>
                </div>
                <label className={styles.formLabel} htmlFor="review">Rating* : </label>
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
                </div>
                <input type="text" hidden />
                <label className={styles.formLabel} htmlFor="review">Review : </label>
                <textarea className={styles.textBox} name="review" id="review" value={userReview.review} onChange={handleKeyStroke} ></textarea><br />
                <button className={styles.formBtn} >Leave Review!</button>
            </fieldset>
        </form>
    )
}
