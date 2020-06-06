import React from 'react';
//import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {Router} from '@reach/router'
import Contact from './components/Contact.jsx'
import Service from './components/Service.jsx'
import Conseil from './components/Conseil.jsx'
import Accueil from './components/Accueil.jsx'
import Menu from './components/Menu.jsx'
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
    text: 'Conseil',
    path: '/Conseil'
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
     
      <Router>  
            <Accueil path="/Accueil" />
            <Service path="/Service"/>
            <Conseil path="/Conseil"/>
            <Contact path="/Contact"/>
    </Router>
      </div>
    
  );
}

export default App;
