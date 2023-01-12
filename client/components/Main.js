import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Guest from './Guest';
import PasswordReset from './PasswordReset';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Main = ({ socket }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [currentView, setCurrentView] = useState('logIn');

  const [token, setToken] = useState();

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

  //this function changes view based on user interaction, logged in vs guest access...
  const changeView = () => {
    switch (currentView) {
      case 'signUp':
        return (
          <SignupPage
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setView={setView}
          />
        );
        break;
      case 'logIn':
        if (!token) {
          return <LoginPage setToken={setToken} setView={setView} />;
        }
        break;
      case 'guest':
        return (
          <Guest
            userName={userName}
            setUserName={setUserName}
            setView={setView}
            handleSubmit={handleSubmit}
          />
        );
        break;
      case 'PWReset':
        return <PasswordReset setView={setView} />;
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
export default connect()(Main);
