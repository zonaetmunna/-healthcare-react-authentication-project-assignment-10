import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import Teams from '../Teams/Teams';
import image from '../../../../imgaes/bg.jpg'

const Booking = () => {

     return (
          <div className="mt-5 p-5">
               <Container className="">
                    <Row className="g-3 p-3 mx-auto d-flex align-items-center bg-light shadow-lg ">
                         <Col sm={12} md={6} className="bg-light ">
                              <div>
                                   <h3>Visitor Information</h3>
                                   <div className="d-flex justify-content-between">
                                        <p>Week Days</p>
                                        <p>8:00 am -14:00 pm</p>
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Week Days</p>
                                        <p>7.30 – 18.00</p>
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Visiting Appointment</p>
                                        <p>8:00 am -14:00 pm</p>

                                   </div>
                              </div>

                         </Col>

                         <Col sm={12} md={6}>

                              <Image src={image} className="img-fluid" />
                         </Col>

                    </Row>
                    <Row className="g-3 mt-5 p-3 mx-auto d-flex align-items-center bg-light shadow-lg ">

                         <Col sm={12} md={5} className="bg-light" >
                              <h3>Locations & Directions</h3>
                              <p>Patients traveling internationally are provided timely diagnostic and specialty care in a place designed to feel a little more like home.</p>
                              <Button>Get Direction</Button>
                         </Col>

                    </Row>
               </Container>
               <Teams></Teams>
          </div>
     );
};

export default Booking;