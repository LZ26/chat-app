import React from 'react';
import { connect } from 'react-redux';

const SignupPage = ({ formData, setFormData, setView }) => {
  const { username, email, password } = formData;

  const create = (ev) => {
    ev.preventDefault();

    if (username === '' || email === '' || password === '') {
      window.alert('please enter vaild information!!!');
    } else {
      mapDispatchToProps({
        username: username,
        email: email,
        password: password,
      });
      window.alert('Succesfully created an account');
      window.location.replace('/');
    }
  };

  return (
    <>
      <form onSubmit={create}>
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
                value={username}
                onChange={(ev) => setFormData({ username: ev.target.value })}
                required
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(ev) => setFormData({ email: ev.target.value })}
                required
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(ev) => setFormData({ password: ev.target.value })}
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

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => {
      dispatch(createUser(user));
    },
  };
};

//accepts four arguments: mapstatetoprops, mapdispatchtoprops, etc. all optional
export default connect(null, mapDispatchToProps)(SignupPage);
