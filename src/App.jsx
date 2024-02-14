import './App.css'
import Admin from './pages/admin';
import Home from './pages/home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {getFirestore, doc, getDoc } from "firebase/firestore"; 
import { useEffect } from 'react';

export default function App() {


  useEffect(()=>{

    const DB = getFirestore();

    const item = doc(DB, 'works', '8TaQziS2s9kWm70rGBlR');

    getDoc(item)
    .then(snapshot =>{
      console.log(snapshot)
    })

    
  }, [])

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/admin' element={<Admin/>} /> 
      </Routes>
    </BrowserRouter>
 
  )
}
