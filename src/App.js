import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from "../src/Components/logo.n.svg";
import Home from "../src/Components/Home";
import Footer from './Components/Footer';
import TechStack from './Components/TechStack';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from "./Components/Project";
import { LinkContainer } from 'react-router-bootstrap';




function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <img src={logo} alt="logo" className='App-logo' />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/"><Nav.Link href="home">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/About"><Nav.Link href="about">About</Nav.Link></LinkContainer>
              <LinkContainer to="/TechStack"><Nav.Link href="techstack">TechStack</Nav.Link></LinkContainer>
              <LinkContainer to="/Projects"><Nav.Link href="projects">Projects</Nav.Link></LinkContainer>
              <NavDropdown title="Contacts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#github">Github</NavDropdown.Item>
                <NavDropdown.Item href="#twitter">
                  Twitter
                </NavDropdown.Item>
                <NavDropdown.Item href="#linkedin">Linkedin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      < Home />
      <Footer />
      < About />
      <TechStack />
      <Contact />
      <Project />
    </div>

  );
}

export default App;
