import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
     const { name, description, image, id } = service;
     const history = useHistory();


     const url = `/details/${id}`

     const handleDetailsClick = () => {
          history.push(url)
          console.log(url)
     }

     return (
          <div>
               <Col className="shadow-lg">
                    <Card>
                         <Card.Img variant="top" src={image} fluid className="" width="250" height="250" />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>{description.slice(0, 100)}</Card.Text>
                              <Button onClick={handleDetailsClick} variant="success">Service Details</Button>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default Service;