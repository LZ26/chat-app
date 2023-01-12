// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// //This component will become guest login to global chat.
// const Main = ({ socket }) => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState('');

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     localStorage.setItem('userName', userName);
//     //this sends the username and socket ID to the Node.js server
//     socket.emit('newUser', { userName, socketID: socket.id });
//     navigate('/globalchat');
//   };
//   return (
//     <form className="home-container" onSubmit={handleSubmit}>
//       <h2 className="home-header">Welcome to Hangout Club </h2>
//       <label htmlFor="username">Pick a nickname:</label>
//       <input
//         type="text"
//         minLength={6}
//         name="username"
//         id="username"
//         className="username"
//         value={userName}
//         onChange={(ev) => setUserName(ev.target.value)}
//       />
//       <button className="home-signin">Join</button>
//     </form>
//   );
// };

// export default Main;