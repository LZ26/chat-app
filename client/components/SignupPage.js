import React from 'react';

const SignupPage = ({ formData, handleChange, handleSubmit, setView }) => {
  return (
    <>
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
        </fieldset>
        <button>Submit</button>
        <button type="button" onClick={() => setView('logIn')}>
          Have an Account?
        </button>
      </form>
    </>
  );
};

export default SignupPage;
