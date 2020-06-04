import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './components/Contact'
import Service from './components/Service'
import Conseil from './components/Conseil'
import Accueil from './components/Accueil'
import Menu from './components/Menu'
import './App.css';


function App() {
  return (
    <BrowserRouter>
     <Menu />
      <Route path="/Accueil" component={Accueil}/>
      <Route path="/Service" component={Service}/>
      <Route path="/Conseil" component={Conseil}/>
      <Route path="/Contact" component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
