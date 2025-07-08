import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'You', text: input };
    setChat([...chat, userMessage]);
    setInput('');

    const res = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { sender: 'Bot', text: data.reply };
    setChat(prev => [...prev, botMessage]);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="app">
      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.sender}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
