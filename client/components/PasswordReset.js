import React from 'react';

const PasswordReset = ({ setView }) => {
  return (
    <>
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
    </>
  );
};

export default PasswordReset;
