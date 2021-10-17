import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDetails from '../../../../Hooks/useDetails';

const Details = () => {
     const { id } = useParams();
     const [details] = useDetails();
     return (
          <div>
               <h1>{id}</h1>
               <Container>
                    <Row>
                         <Col sm={6} md={6}>
                              <Card>
                                   <Card.Img variant="top" src={details.image} />
                                   <Card.Body>
                                        <Card.Title>{details.name}</Card.Title>
                                        <Card.Text>{details.description}</Card.Text>
                                   </Card.Body>

                              </Card>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Details;