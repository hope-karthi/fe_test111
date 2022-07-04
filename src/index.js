import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';
import ReCAPTCHA from "react-google-recaptcha";


const root = ReactDOM.createRoot(document.getElementById('root'));
const dev_user = () => {
  const dev=localStorage.getItem("dev_user")
  if (!dev) {
    return true
  } else {
    return false    
  }
}
const set_dev_user =() => {
  const name = document.getElementById("name").value
  const pass = document.getElementById("password").value
  if (process.env.dev_name == name && process.env.dev_pass == pass){
    localStorage.setItem('dev_user',"okay")
  }
}
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);