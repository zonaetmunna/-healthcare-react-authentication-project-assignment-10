import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Teams from '../Teams/Teams';

const Booking = () => {

     return (
          <div>
               <Container className="m-3 p-3">
                    <Row className="g-5 text-center">
                         <Col sm={12} md={6} className="">
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
                         <Col sm={12} md={6} >
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