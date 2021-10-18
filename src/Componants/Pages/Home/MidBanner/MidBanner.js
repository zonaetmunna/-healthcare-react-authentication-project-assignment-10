import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import midImage from '../../../../imgaes/dr-image.jpg'
const MidBanner = () => {
     return (
          <div>
               <Container className="m-5 shadow-lg">
                    <Row className="d-flex align-items-center">
                         <Col sm={12} md={6} className="p-3">
                              <Image src={midImage} />
                         </Col>
                         <Col sm={12} md={6} className="p-3 text-center">
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