import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Service from './Services';
import { Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
}

export default App;
