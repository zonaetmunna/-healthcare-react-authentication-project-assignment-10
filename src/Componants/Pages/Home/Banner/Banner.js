import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
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
          <div style={styles} className="p-3 m-2">
               <Container>
                    <Row>
                         <Col sm={6} md={6} className="">
                              <h1>On a Pursuit of Better Medicine</h1>
                              <p>The requested records directly to fuctional qualified doctors the day before or the day of the appointment Podcasting operational change management inside of workflows to establish a framework. Taking seamless the long tai</p>
                              <Button variant="success">Book Appointment</Button>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Banner;