import React from 'react';
//import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {Router} from '@reach/router'
import Contact from './components/Contact'
import Service from './components/Service'

import Accueil from './components/Accueil'
import Menu from './components/Menu'
import Imagenavi from './components/Imagenavi'

import './App.css';


const navLinks  =[
  {
    text: 'Accueil',
    path: '/Accueil'
  },
  {
    text: 'Service',
    path: '/Service'
  },
  {
    text: 'Contact',
    path: '/Contact'
  }



]

function App() {
  return (
    
      <div className="App">
         <Menu 
        navLinks={navLinks}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#222"
       /> 
      <Imagenavi />
      <Router>  
            <Accueil path="/Accueil" />
            <Service path="/Service"/>
            <Contact path="/Contact"/>
    </Router>
      </div>
    
  );
}

export default App;
