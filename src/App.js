import React from 'react';

import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap';
import './App.css';
import { DropDownMenu } from './components/Dropdownmenu';
import { DropDownSubMenu } from './components/dropdownsubmenu';

const App = () => (
  <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Devhubspot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <DropDownMenu title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
              <DropDownSubMenu href="#action/3.7" title="Deisgn">
                <NavDropdown.Item href="#action/8.1">Html</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">CSS</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="Development">
                  <NavDropdown.Item href="#action/9.1">Javascript</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.2">Jquery</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu>
          </Nav>
          <Nav>
          <DropDownMenu title="Product" id="collasible-nav-dropdown" alignRight>
              <DropDownSubMenu href="#action/3.7" title="Language">
                <NavDropdown.Item href="#action/8.1">React</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">Anguler</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.3">Ionic</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="backend">
                  <NavDropdown.Item href="#action/9.1">Nodejs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">PHP</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">JAVA</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col>
          <h1>React Multi Level Dropdown Menu With Mobile responsive</h1>
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
