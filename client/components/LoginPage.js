import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Dashboard from './Dashboard';

const LoginPage = ({ setToken, setView }) => {
  //local state to capture username and password entered
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <form>
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
        <button type="submit">Login</button>
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

LoginPage.prototypes = {
  setToken: propTypes.func.isRequired,
};

export default LoginPage;
