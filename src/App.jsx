import './App.css'
import Admin from './pages/admin';
import Home from './pages/home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/admin' element={<Admin/>} /> 
      </Routes>
    </BrowserRouter>
 
  )
}
