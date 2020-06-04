import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Contact from './components/Contact'
import Service from './components/Service'
import Conseil from './components/Conseil'
import Accueil from './components/Accueil'
import Menu from './components/Menu'
import Imagenavi from './components/Imagenavi'
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Menu />
      <Imagenavi />
      <BrowserRouter>
      
          <Switch>
            <Route path="/Accueil" component={Accueil}/>
            <Route path="/Service" component={Service}/>
            <Route path="/Conseil" component={Conseil}/>
            <Route path="/Contact" component={Contact}/>
          </Switch>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
