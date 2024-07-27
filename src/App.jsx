import './App.css'
import Admin from './pages/admin';
import Home from './pages/home';
import backGroundimg from '../public/images/fondo.png'
import Footer from './components/Footer';
import Header from './components/Header';

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
    <div style={{backgroundImage:'url(' + backGroundimg + ')', backgroundSize:"cover", backgroundAttachment:"fixed"}}>
      <BrowserRouter>
        <div className='container'>
          <Header/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/admin' element={<Admin/>} /> 
        </Routes>
        
        <div className='container'>
          <Footer/>
        </div>
      </BrowserRouter>

    </div>
  
  )
}
