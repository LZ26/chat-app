import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = ({ socket }) => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   localStorage.setItem('userName', userName);
  //   //this sends the username and socket ID to the Node.js server
  //   socket.emit('newUser', { userName, socketID: socket.id });
  //   navigate('/globalchat');
  // };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="chat-logo.png" style={{ width: '100px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Hangout Club</h4>
              {/* this redirects guest user to global chat where user can chat with anyone*/}
              <Link to="/guest">
                <Button variant="primary" type="button">
                  Enter as Guest
                </Button>
              </Link>
            </div>
            <br />
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <Button variant="primary" type="button">
                  Sign Up
                </Button>
              </div>
            </div>

            <p>Email:</p>

            <MDBInput wrapperClass="mb-4" id="form1" type="email" />

            <p>Password:</p>
            <MDBInput wrapperClass="mb-4" id="form2" type="password" />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              {/* <p className="mb-0">Don't have an account? </p> */}
              {/* <Button variant="primary" type="button">
                Sign Up
              </Button> */}
              {/* <MDBBtn outline className="mx-2" color="primary">
                Sign Up
              </MDBBtn> */}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

  // <form className="home-container" onSubmit={handleSubmit}>
  //   <h2 className="home-header">Welcome to Hangout Club </h2>
  //   <label htmlFor="username">Username:</label>
  //   <input
  //     type="text"
  //     minLength={6}
  //     name="username"
  //     id="username"
  //     className="username"
  //     value={userName}
  //     onChange={(ev) => setUserName(ev.target.value)}
  //   />
  //   <button className="home-signin">Join</button>
  // </form>
};

export default LoginPage;
