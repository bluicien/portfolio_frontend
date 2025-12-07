import styles from './Form.module.css';

import { useState } from 'react';
import { ImStarFull } from "react-icons/im";

type Message = {
    username: string;
    company?: string;
    position?: string;
    rating: number;
    message: string;
}

interface ModalProps {
    modalType: string;
    message: string;
}

export default function Review({handleModalData}: { handleModalData: (data: ModalProps) => void }) {
    const [ userReview, setUserReview ] = useState<Message>({ username: "", rating: 0, message: "", position: "", company: "" });
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

            handleModalData({modalType: "success", message: "Thank you for your review!"});
            setUserReview({ username: "", rating: 0, message: "", position: "", company: "" });
        }
        catch (error) {
            console.error('Error submitting review:', error);
            handleModalData({modalType: "error", message: "There was an error submitting your review. Please try again later."})
        }
    }

    return (
        <form className={styles.formField} onSubmit={handleSubmit} >
            <fieldset className={styles.field} >
                <legend className={styles.formTitle} >Review</legend>
                <label className={styles.formLabel} htmlFor="username">Name* : </label>
                <input className={styles.formInput} required type="text" name="username" id="username" value={userReview.username} onChange={handleKeyStroke} />
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
                <label className={styles.formLabel} htmlFor="message">Review : </label>
                <textarea className={styles.textBox} name="message" id="message" value={userReview.message} onChange={handleKeyStroke} ></textarea><br />
                <button className={styles.formBtn} >Leave Review!</button>
            </fieldset>
        </form>
    )
}
