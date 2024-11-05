import './App.css';
// import './component/sample.js'
// import  { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Demo from './component/Demo';
import About from './component/about';
import Contact from './component/contact';
import Menu from './component/menu';



function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Demo/>}>
    <Route index element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Menu" element={<Menu/>}/>
    <Route path="Contact" element={<Contact/>}/>


    </Route>

  </Routes>
  </BrowserRouter>
  )
}





const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
export default App;
