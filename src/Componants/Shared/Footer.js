import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <div className="bg-dark text-white text-center mt-5 ">
               <Container className="">
                    <Row className="g-4 ">
                         <Col sm={12} md={4} className="p-3">
                              <h4 className="text-primary">medical and heath center</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates quasi aperiam nesciunt illum totam consectetur, harum ad. Illum eum delectus voluptates deleniti dicta quisquam assumenda accusantium reprehenderit repudiandae vero.</p>
                         </Col>
                         <Col sm={12} md={4} className="p-3">
                              <h4 className="text-primary">Contact Details</h4>
                              <p>250 Main Street, Brooklyn, NY 52143, US</p>
                              <p>Tell (800)-456-789</p>
                              <p> Email info@example.com</p>
                              <i class="fab fa-facebook"></i>
                              <i class="fab fa-google ms-2"></i>

                         </Col>
                         <Col sm={12} md={4} className="p-3">
                              <p className="text-primary">copyRight <i class="far fa-copyright"></i> 2021</p>
                              <Link to="/news" className="text-decoration-none">News</Link>
                              <br />
                              <Link to="/medicine" className="text-decoration-none">Shop</Link>

                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Footer;