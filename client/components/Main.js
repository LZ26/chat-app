import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Guest from './Guest';
import PasswordReset from './PasswordReset';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Main = ({ socket }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [currentView, setCurrentView] = useState('guest');

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
            setFormData={setFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setView={setView}
          />
        );
        break;
      case 'logIn':
        return <LoginPage setView={setView} />;
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

export default Main;
