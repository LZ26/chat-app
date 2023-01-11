import React, { useState } from 'react';

const ChatFooter = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem('userName'), message });
    setMessage('');
  };

  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write a message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
