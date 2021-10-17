import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
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


                                   {user.email && <Navbar.Text className="me-3 ">
                                        Signed in as:<Link to="">{user.displayName}</Link>
                                   </Navbar.Text>}
                                   {user.email ? <Button onClick={logOut}>Log Out</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     );
};

export default Header;