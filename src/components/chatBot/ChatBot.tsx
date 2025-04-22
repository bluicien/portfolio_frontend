import { useState } from 'react';
import styles from './ChatBot.module.css';
import Message from './Message';
import { MessageProps } from './types.ts';

const mockData: MessageProps[] = [
    { id: 1, name: 'User', message: 'Hello!' },
    { id: 2, name: 'Bot', message: 'Hi there! How can I help you?' },
    { id: 3, name: 'User', message: 'What is your name?' },
    { id: 4, name: 'Bot', message: 'I am a chat bot.' },
    { id: 5, name: 'User', message: 'What is your name?' },
    { id: 6, name: 'Bot', message: 'I am a chat bot.' },
    { id: 7, name: 'User', message: 'What is your name?' },
    { id: 8, name: 'Bot', message: 'I am a chat bot.' },
    { id: 9, name: 'User', message: 'What is your name?' },
    { id: 10, name: 'Bot', message: 'I am a chat bot.' },
    { id: 11, name: 'User', message: 'What is your name?' },
    { id: 12, name: 'Bot', message: 'I am a chat bot.' },
]

function ChatBot(): JSX.Element {

    const [chatBotOpen, setChatBotOpen] = useState(false)
    const [messageHistory, setMessageHistory] = useState<Array<MessageProps>>(mockData)

    return (
        <section className={`${chatBotOpen ? styles.chatBoxContainer : styles.chatBoxContainerClosed}`} >
            {!chatBotOpen
            ? <button onClick={() => setChatBotOpen(true)} >CHAT</button>
            :   <div className={styles.chatBoxInnerContainer} >
                    <div className={styles.chatBoxHeader}>
                        <h2>Chat Bot</h2>
                        <button className={styles.closeBtn} onClick={() => setChatBotOpen(false)}>X</button>
                    </div>
                    <div className={styles.chatBoxBody}>
                        {messageHistory.map(message => (
                            <Message key={message.id} id={message.id} name={message.name} message={message.message} />
                        ))}
                    </div>
                    <div className={styles.chatBoxInput}>
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            }
        </section>
    )
}

export default ChatBot;