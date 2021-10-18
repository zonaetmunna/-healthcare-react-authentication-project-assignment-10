import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import backgroundImage from '../../../../imgaes/banner.jpg'

const Banner = () => {
     const styles = {
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', width: '100vw',
          height: '100vh'

     }
     return (
          <div style={styles} className="p-3 mt-5 ">
               <Container >
                    <Row className="d-flex   align-items-center mt-5">
                         <Col sm={6} md={6} className="mt-5" >
                              <h1>On a Pursuit of Better Medicine</h1>
                              <p>The requested records directly to functional qualified doctors the day before or the day of the appointment Podcasting operational change management inside of workflows to establish a framework. Taking seamless the long tai</p>
                              <Button variant="success">Book Appointment</Button>
                         </Col>
                         <Col sm={6} md={6} className="">

                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Banner;