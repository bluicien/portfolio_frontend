import styles from './Message.module.css';
import { MessageProps } from './types.ts';

function Message(props: MessageProps): JSX.Element {

    const { name, content } = props;

    return (
        <article className={`${styles.messageContainer} ${name === 'user' ? styles.userMessage : styles.botMessage}`} >
            <p className={styles.messageSender} >{name}</p>
            <p className={styles.messageBox} >{content}</p>
        </article>
    )
}

export default Message;