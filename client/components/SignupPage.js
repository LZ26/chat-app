import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/signup';

const SignupPage = ({ signUp }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
  };

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
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={() => setView('logIn')}>
          Have an Account?
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUp(data)),
  };
};

//accepts four arguments: mapstatetoprops, mapdispatchtoprops, etc. all optional
export default connect(null, mapDispatchToProps)(SignupPage);
