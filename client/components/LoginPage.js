import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ socket }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [currentView, setCurrentView] = useState('logIn');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    localStorage.setItem('userName', userName);
    //this sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/globalchat');
  };

  const setView = (view) => {
    setCurrentView(view);
  };

  const changeView = () => {
    switch (currentView) {
      case 'signUp':
        return (
          <form>
            <h2>Hangout Club</h2>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => setView('logIn')}>
              Have an Account?
            </button>
          </form>
        );
        break;
      case 'logIn':
        return (
          <form>
            <h2>Hangout Club</h2>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <a onClick={() => setView('PWReset')} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => setView('guest')}>
              Guest Access
            </button>
            <button type="button" onClick={() => setView('signUp')}>
              Create an Account
            </button>
          </form>
        );
        break;
      case 'guest':
        return (
          <form onSubmit={handleSubmit}>
            <h2>Hangout Club</h2>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>Guest Access</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    minLength={1}
                    name="username"
                    className="username"
                    value={userName}
                    onChange={(ev) => setUserName(ev.target.value)}
                    required
                  />
                </li>
              </ul>
              <button type="button" onClick={handleSubmit}>
                Chat Now
              </button>
            </fieldset>
            <button type="button" onClick={() => setView('logIn')}>
              Go Back
            </button>
          </form>
        );
        break;
      case 'PWReset':
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => setView('logIn')}>
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };
  return <section id="entry-page">{changeView()}</section>;
};

export default LoginPage;
