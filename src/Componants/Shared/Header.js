import React from 'react';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div className="">
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light " fixed="top" >
                    <Container>
                         <Navbar.Brand as={Link} to="/home" className="text-primary">Medical & Health center</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mx-auto">
                                   <Nav.Link as={Link} to="/home" className="fw-bold">Home</Nav.Link>
                                   <Nav.Link as={Link} to="/news" className="fw-bold">News</Nav.Link>
                                   <Nav.Link as={Link} to="/medicine" className="fw-bold">Medicine</Nav.Link>
                              </Nav>
                              <Nav className="d-flex justify-content-center algin-items-center">


                                   {user.email && <Navbar.Text className="me-3 ">
                                        Signed in as:<Link to="">{user.displayName}</Link>
                                   </Navbar.Text>}

                                   {user.email ? <Button onClick={logOut} className="fw-bold">Log Out</Button> : <Nav.Link as={Link} to="/login" className="fw-bold">Login</Nav.Link>}
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     );
};

export default Header;