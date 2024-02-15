import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg8Xz09VWFAFw9COFzIvjM4X165uCswbM",
    authDomain: "portafolio-e028e.firebaseapp.com",
    projectId: "portafolio-e028e",
    storageBucket: "portafolio-e028e.appspot.com",
    messagingSenderId: "887568634589",
    appId: "1:887568634589:web:731fc1506324158f9f0134",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
