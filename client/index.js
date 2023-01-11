import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './views/Main';

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3000');

const container = document.getElementById('main');
const root = createRoot(container);

root.render(<Main />);
