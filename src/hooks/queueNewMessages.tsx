type MessageProps = { role: "user" | "model"; content: string };

interface QueueOptions {
    prevHistory: MessageProps[];
    nextHistory: MessageProps[];
    dispatch: (msg: MessageProps) => void;
    delay?: number;
}

function queueNewMessages({
    prevHistory,
    nextHistory,
    dispatch,
    delay = 1000
    }: QueueOptions): void {
    // Find the difference
    const newMessages = nextHistory.slice(prevHistory.length);

    // Queue new messages with delay
    newMessages.forEach((msg, index) => {
        setTimeout(() => {
        dispatch(msg);
        }, index * delay);
    });
}


export default queueNewMessages;