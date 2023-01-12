import axios from 'axios';
import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = ({ setToken, setView }) => {
  //local state to capture username and password entered
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});

  const notify = () => toast.error('Wrong username or password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);

    const data = {
      username,
      password,
    };

    await axios
      .post('/api/auth/login', data)
      .then((res) => {
        setData(res.data);
        setUserName('');
        setPassword('');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        notify();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Hangout Club</h2>
        <fieldset>
          <legend style={{ textAlign: 'center' }}>Log In</legend>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </li>
            <li>
              <i />
              <a onClick={() => setView('PWReset')} href="#">
                Forgot Password?
              </a>
            </li>
          </ul>
        </fieldset>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <button type="button" onClick={() => setView('guest')}>
          Guest Access
        </button>
        <button type="button" onClick={() => setView('signUp')}>
          Create an Account
        </button>
      </form>
    </>
  );
};

// LoginPage.prototypes = {
//   setToken: propTypes.func.isRequired,
// };

export default LoginPage;
