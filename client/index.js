import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';

//new way to create react app
const container = document.getElementById('main');
const root = createRoot(container);

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3000');

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage socket={socket} />}></Route>
          <Route
            path="/globalchat"
            element={<ChatPage socket={socket} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

//renders the whole app wrapped with provider to connect react-redux
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
