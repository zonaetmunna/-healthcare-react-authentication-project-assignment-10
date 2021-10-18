import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Medicines = ({ medicines }) => {
     const { image, price, name } = medicines;
     return (
          <div>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={image} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {price}
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default Medicines;