// import React from 'react'

// const Group = () => {

//     return (
//         <h1 style={{ marginLeft: '200px' }}>Group List hii3</h1>
//     )
// }

// export default Group


import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const App = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on('message', (msg) => {
            setChat([...chat, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, [chat]);

    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setMessage('');
    };

    return (
        <div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                {chat.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default App;
