import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = ({ team }) => {
     const { name, image, specialist } = team;

     return (
          <div>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={image} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {specialist}
                              </Card.Text>
                              <Link to="/booking" className="text-decoration-none">Book appointment</Link>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default Team;