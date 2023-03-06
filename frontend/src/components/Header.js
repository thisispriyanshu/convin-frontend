import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ConVin Tube</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#History">History</Nav.Link>
            <NavDropdown title="Buckets" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comedy Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Education Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vocational Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sci-Fi Videos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Github Repo: <a href="https://github.com/thisispriyanshu/convin-frontend">Priyanshu Agrawal</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
