import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ socket }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [currentView, setCurrentView] = useState('logIn');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // processSubmittedDataFunction(formData);
    setFormData({
      username: '',
      email: '',
      password: '',
    });

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
          <form onSubmit={handleSubmit}>
            <h2>Hangout Club</h2>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>
              <button>Submit</button>
            </fieldset>
            {/* <button>Submit</button> */}
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
            </fieldset>
            <button type="button" onClick={handleSubmit}>
              Chat Now
            </button>
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

//example of mapstatetoprops usage
//const mapstateToProps = state =› ({ groceries: state groceries });

//example of mapdispatchtoprops usage
// function mapDispatchToProps (dispatch) {
//   return {
//     add: function (text) {
//       dispatch(addGrocery(text));
//     }
//   };
// }

//accepts four arguments: mapstatetoprops, mapdispatchtoprops, etc. all optional
export default connect()(LoginPage);
