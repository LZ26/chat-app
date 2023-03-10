import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  //dummy data for now, later will change to dynamic data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat-sidebar">
      <div>
        <h2 className="chat-header">Active Users:</h2>
        <div className="chat-users">
          {users.map((user) => (
            <ul key={user.socketID}>
              <li className="users-list">{user.userName}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
