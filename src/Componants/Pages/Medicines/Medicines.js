import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Medicines = ({ medicines }) => {
     const { image, price, name } = medicines;
     return (
          <div>
               <Col>
                    <Card >
                         <Card.Img variant="top" src={image} width="" height="" />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text><i class="fas fa-dollar-sign"></i> {price}</Card.Text>
                              <Button>Buy</Button>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default Medicines;