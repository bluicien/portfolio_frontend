import styles from './Message.module.css';
import { MessageProps } from './types.ts';

function Message(props: MessageProps): JSX.Element {

    const { role, content } = props;

    return (
        <article className={`${styles.messageContainer} ${role === 'user' ? styles.userMessage : styles.botMessage}`} >
            <p className={styles.messageSender} >{role === 'model' ? 'Assistant' : role }</p>
            <p className={styles.messageBox} >{content}</p>
        </article>
    )
}

export function SystemMessage(): JSX.Element {

    return (
        <article className={`${styles.messageContainer} ${styles.botMessage}`} >
            <p className={styles.messageSender} >Assistant</p>
            <p className={styles.messageBox} >
                Hi! I am Brendon's personal assistant.👋 
                <br />
                Please ask me anything about Brendon.
                <br />
                <br />
                <span>If there is no response, the server may still be starting up due to inactivity. Please wait a moment before trying again. Thank you for your patience.</span>
            </p>
        </article>
    )
}

export default Message;