import { useEffect, useRef, useState } from 'react';
import styles from './ChatBot.module.css';
import Message from './Message';
import { MessageProps } from './types.ts';
import queueNewMessages from '../../hooks/queueNewMessages.tsx';

const mockData: MessageProps[] = []

function ChatBot(): JSX.Element {

    const [chatBotOpen, setChatBotOpen] = useState(false);
    const [userMessage, setUserMessage] = useState<string>("");
    const [messageHistory, setMessageHistory] = useState<MessageProps[]>(mockData);
    const [pendingAIMessage, setPendingAIMessage] = useState<MessageProps[]>([]);

    const lastRespondedIndex = useRef(-1);
    const chatWindow = useRef<HTMLDivElement>(null);

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>): void => setUserMessage(e.target.value);

    const handleSendUserMessage = (e: React.FormEvent): void => {
        e.preventDefault(); 
        if (!userMessage) return; // Do nothing if no message --Will handle later with user informative message
        
        const newMessage: MessageProps = { role: "user", content: userMessage }; // Build new message.

        // Append new message chat history.
        setMessageHistory((prevHistory: MessageProps[]) => [ ...prevHistory, newMessage ] );
        setUserMessage(""); // Reset user message input.

        return;
    }

    useEffect(() => {
        if (pendingAIMessage.length === 0) return;

        queueNewMessages({
            prevHistory: messageHistory,
            nextHistory: [...messageHistory, ...pendingAIMessage],
            dispatch: (msg) => setMessageHistory(prev => [...prev, msg]),
            delay: 1000
        });

        setPendingAIMessage([]);

        return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pendingAIMessage])


    useEffect(() => {
        const lastIndex = messageHistory.length - 1;
        const lastMsg = messageHistory[lastIndex];

        if (lastMsg?.role !== 'user' || lastRespondedIndex.current === lastIndex) return;
        
        lastRespondedIndex.current = lastIndex; // Update  lastResponded index to current.

        const sendAIMessage = async () => {
            try {
                const chatServerURL: string = import.meta.env.VITE_CHAT_API;
                const response = await fetch(`${chatServerURL}/api/chat`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({history: messageHistory})
                });

                if (!response.ok || response.status !== 200) {
                    throw new Error("Failed to fetch response from chatbot.");
                }

                const data = await response.json();

                if (!("newChatHistory" in data || "reply" in data))
                    throw new Error("Invalid response. Failed to fetch response from chatbot.")

                // const aiMessage:MessageProps[] = [{ name: "bot", content: "How do you do sir" }];
                // const newChatHistory: MessageProps[] = [ ...aiMessage ];
                setPendingAIMessage(data.reply);
                return;
            } catch (error) {
                if (error instanceof Error)
                    console.error(error.message);
                return;
            }
        }

        sendAIMessage();

        if (chatWindow.current)     {
            chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
        }

        
    }, [messageHistory]);


    return (
        <section className={`${chatBotOpen ? styles.chatBoxContainer : styles.chatBoxContainerClosed}`} >
            {!chatBotOpen
            ? <button onClick={() => setChatBotOpen(true)} >CHAT</button>
            :   <div className={styles.chatBoxInnerContainer} >
                    <div className={styles.chatBoxHeader}>
                        <h2>Chat Bot</h2>
                        <button className={styles.closeBtn} onClick={() => setChatBotOpen(false)}>X</button>
                    </div>
                    <div className={styles.chatBoxBody} ref={chatWindow} >
                        {messageHistory.map((message, index) => (
                            <Message key={index} role={message.role} content={message.content} />
                        ))}
                    </div>
                    <form className={styles.chatBoxInput} onSubmit={handleSendUserMessage}>
                        <input type="text" placeholder="Type a message..." value={userMessage} onChange={handleTextInput} />
                        <button>Send</button>
                    </form>
                </div>
            }
        </section>
    )
}

export default ChatBot;