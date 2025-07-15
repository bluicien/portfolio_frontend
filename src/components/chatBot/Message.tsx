import styles from './Message.module.css';
import { MessageProps } from './types.ts';

function Message(props: MessageProps): JSX.Element {

    const { role, content } = props;

    return (
        <article className={`${styles.messageContainer} ${role === 'user' ? styles.userMessage : styles.botMessage}`} >
            <p className={styles.messageSender} >{role}</p>
            <p className={styles.messageBox} >{content}</p>
        </article>
    )
}

export default Message;