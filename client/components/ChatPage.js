import React from 'react';
import ChatBar from './Chatbar';
import ChatBody from './Chatbody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat-main">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
