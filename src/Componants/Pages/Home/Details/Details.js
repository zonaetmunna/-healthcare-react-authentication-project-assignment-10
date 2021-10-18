import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useDetails from '../../../../Hooks/useDetails';

const Details = () => {
     const { id } = useParams();
     const [details] = useDetails();
     const history = useHistory();

     const handleBooking = () => {
          history.push('/booking')
     }
     return (
          <div>

               <Container className="m-5 p-5">
                    <Row>
                         <Col sm={12} md={6}>
                              <Card className="border-0">
                                   <Card.Img variant="top" className="img-fluid" src={details.image} />
                                   <Card.Body>
                                        <Card.Title>{details.name}</Card.Title>
                                        <Card.Text>{details.description}</Card.Text>

                                        <Button onClick={handleBooking} variant="success">Book Appointment</Button>
                                   </Card.Body>

                              </Card>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Details;