import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Nav,Navbar} from "react-bootstrap"
function Menu() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">GagoumConsulting</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/Accueil">Accueil</NavLink>
            <NavLink to="/Service">Service</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Menu;
