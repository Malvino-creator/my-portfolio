import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from "../src/Components/logo.png";
// import Home from "../src/Components/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#techstars">TechStars</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <NavDropdown title="Contacts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Github</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Linkedin</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      {/* <Home /> */}
    </div>
  );
}

export default App;
