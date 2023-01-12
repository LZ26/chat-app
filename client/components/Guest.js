import React from 'react';

const Guest = ({ userName, setUserName, setView, handleSubmit }) => {
  return (
    <>
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
    </>
  );
};

export default Guest;
