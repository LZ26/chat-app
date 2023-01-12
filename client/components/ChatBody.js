import React from 'react';
import { useNavigate } from 'react-router-dom';
import timeAgo from 'node-time-ago';

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  //dummy input for now, later will be replaced by dynamic data on group names
  return (
    <>
      <header className="chat-mainHeader">
        <h2>Global Chat</h2>
        <button className="leaveChat-btn" onClick={handleLeaveChat}>
          Leave Chat
        </button>
      </header>

      {/*This will display messages sent from us*/}
      <div className="message-container">
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message-chats" key={message.id}>
              <p className="sender-name">You</p>
              <div className="message-sender">
                <p>{message.text}</p>
              </div>
              <div className="current-time">
                <p>{timeAgo(new Date())}</p>
              </div>
            </div>
          ) : (
            /*This will display messages received by us*/
            <div className="message-chats">
              <p>{message.name}</p>
              <div className="message-recipient">
                <p>{message.text}</p>
              </div>
              <div className="current-time">
                <p>{timeAgo(new Date())}</p>
              </div>
            </div>
          )
        )}
        {/*This is shown when user is typing something, will be made dynamic once routes are connected properly*/}
        <div className="message-status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
