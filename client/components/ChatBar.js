import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  //dummy data for now, later will change to dynamic data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat-sidebar">
      <h2>Global Chat</h2>

      <div>
        <h4 className="chat-header">Active Users</h4>
        <div className="chat-users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
