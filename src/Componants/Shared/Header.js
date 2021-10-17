import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                         <Navbar.Brand href="#home">Medical & Health center</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link as={Link} to="/home">Home</Nav.Link>


                              </Nav>
                              <Nav className="d-flex justify-content-center algin-items-center">
                                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                   <Navbar.Text className="ms-3">
                                        Signed in as:<Link to=""> Mark Otto</Link>
                                   </Navbar.Text>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     );
};

export default Header;