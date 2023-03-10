import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from "./logo.n.svg";

function Menu() {
  return (
    <div className='menu'>
        <Navbar bg="light" expand="lg">
        <img src={logo} alt="logo" className='App-logo' />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="techstack">TechStack</Nav.Link>
              <Nav.Link href="projects">Projects</Nav.Link>
              <NavDropdown title="Contacts" id="basic-nav-dropdown">
                <NavDropdown.Item href="github">Github</NavDropdown.Item>
                <NavDropdown.Item href="twitter">
                  Twitter
                </NavDropdown.Item>
                <NavDropdown.Item href="#linkedin">Linkedin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu