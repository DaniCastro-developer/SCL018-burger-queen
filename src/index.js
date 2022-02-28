// Acá va toda la magia 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from "./context/UserProvider";
import LoginProvider from "./context/LoginProvider"
// import LoginProvider from './context/LoginProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
    <UserProvider>

    <App />
    </UserProvider>
    </LoginProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

