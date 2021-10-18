import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import midImage from '../../../../imgaes/dr-image.jpg'
const MidBanner = () => {
     return (
          <div className="">
               <Container className="m-2  shadow-lg mx-auto">
                    <Row className=" d-flex justify-content-center align-items-center p-2">
                         <Col xs={12} sm={12} md={6} className="">
                              <Image src={midImage} className="img-fluid" />
                         </Col>
                         <Col xs={12} sm={12} md={6} className=" text-center">
                              <h3>Welcome to Medical & Health center</h3>
                              <p>SHORT HISTORY</p>
                              <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</p>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default MidBanner;