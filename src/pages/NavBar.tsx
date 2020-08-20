import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return(
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>Christopher Norton</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
