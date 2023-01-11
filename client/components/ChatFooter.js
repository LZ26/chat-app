import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const key = Object.keys(localStorage).forEach((key) => {
    console.log(localStorage.getItem(key));
  });

  const handleTyping = () => {
    socket.emit('typing', `${localStorage.getItem('userName')} is typing...`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
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
          onKeyDown={handleTyping}
        />
        <button className="sendBtn" type="button" role="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
