import React from 'react';

const LoginPage = ({ setView }) => {
  return (
    <>
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
    </>
  );
};

export default LoginPage;
