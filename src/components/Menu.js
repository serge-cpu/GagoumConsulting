import React from 'react'
//import {Link, NavLink} from 'react-router-dom'
import {Nav,Navbar} from "react-bootstrap"
function Menu() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">GagoumConsulting</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Accueil">Accueil</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Menu;
