import React from 'react';

const ChatBar = () => {
  //dummy data for now, later will change to dynamic data
  return (
    <div className="chat-sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat-header">Active Users</h4>
        <div className="chat-users">
          <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p>
          <p>User 5</p>
          <p>User 6</p>
          <p>User 7</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
