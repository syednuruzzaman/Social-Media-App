import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    useEffect(() => {
        // Logic to fetch messages from the server can be added here
    }, []);

    const sendMessage = (e?: FormEvent) => {
        if (e) e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
            // Logic to send the message to the server can be added here
        }
    };

    return (
        <div>
            <div className="chat-window" style={{ border: '1px solid #ccc', padding: 10, height: 200, overflowY: 'auto', marginBottom: 10 }}>
                {messages.map((msg, index) => (
                    <div key={index} className="message" style={{ margin: '5px 0' }}>
                        {msg}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    style={{ flex: 1 }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;