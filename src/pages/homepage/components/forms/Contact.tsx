import { useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './Form.module.css';

interface ModalProps {
    modalType: string;
    message: string;
}

export default function Contact({handleModalData}: { handleModalData: (data: ModalProps) => void }) {
    
    type Message = {
        name: string;
        email: string;
        message: string;
    }

    type TemplateParameters = {
        user_name: string;
        user_email: string;
        my_name: string;
        message: string;
    }

    const [ userMessage, setUserMessage ] = useState<Message>({ name: "", email: "", message: "" })

    const handleFormSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form behavior.

        try {
            const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY, VITE_MY_NAME } = import.meta.env; // Import env variables.

            // Create template params object to send email
            const templateParams: TemplateParameters = {
                user_name: userMessage.name,
                user_email: userMessage.email,
                my_name: VITE_MY_NAME,
                message: userMessage.message
            }
    
            // Send email via emailjs
            emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_PUBLIC_KEY)
            .then(() => {
                handleModalData({modalType: "success", message: "Email was sent successfully!"})
                setUserMessage({ name: "", email: "", message: "" }); // Reset form values to empty
            })
            .catch(() => handleModalData({modalType: "error", message: "Failed to send email."}));
        } catch (error) {
            console.error("Failed to send email", error)
            handleModalData({modalType: "error", message: "Failed to send email!"})
        }
    }


    // Handle input state change for each key press. Modifies state based on which input is being changed.
    const handleKeyStroke = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        e.preventDefault();
        const { target } = e;
        if (target) {
            const { name, value } = target;
            setUserMessage(prevMessage => {
                return ({
                    ...prevMessage,
                    [name]: value
                })
            })
        }
    }

    return (
        <form className={styles.formField} onSubmit={handleFormSendEmail} >
            <fieldset className={styles.field} >
                <legend className={styles.formTitle} >Contact Me</legend>
                <label className={styles.formLabel} htmlFor="name">Name: </label>
                <input className={styles.formInput} required type="text" name="name" id="name" value={userMessage.name} onChange={handleKeyStroke} />
                <label className={styles.formLabel} htmlFor="name">Email: </label>
                <input className={styles.formInput} required type="text" name="email" id="email" value={userMessage.email} onChange={handleKeyStroke} />
                <label className={styles.formLabel} htmlFor="message">Message: </label>
                <textarea className={styles.textBox} required name="message" id="message" value={userMessage.message} onChange={handleKeyStroke} ></textarea><br />
                <button className={styles.formBtn} >Send Message!</button>
            </fieldset>
        </form>
    )
}
