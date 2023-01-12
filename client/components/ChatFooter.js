import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (ev, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleTyping = () => {
    socket.emit('typing', `${localStorage.getItem('userName')} is typing...`);
    setTimeout(handleTyping, 200);
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
        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker
            pickerStyle={{ width: '50%', size: '12' }}
            onEmojiClick={onEmojiClick}
          />
        )}
        <button
          onClick={(e) => handleSendMessage(e)}
          className="sendBtn"
          type="button"
          role="button"
          value={message}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
