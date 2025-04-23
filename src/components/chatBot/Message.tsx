import styles from './Message.module.css';
import { MessageProps } from './types.ts';

function Message(props: MessageProps): JSX.Element {

    const { name, message } = props;

    return (
        <article className={`${styles.messageContainer} ${name === 'User' ? styles.userMessage : styles.botMessage}`} >
            <p className={styles.messageSender} >{name}</p>
            <p className={styles.messageBox} >{message}</p>
        </article>
    )
}

export default Message;