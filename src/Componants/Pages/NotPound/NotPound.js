import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFoundImg from "../../../imgaes/404-2.jpg"

const NotPound = () => {
     return (
          <div>


               <Card style={{ width: '30rem' }} className="mx-auto m-5 border border-0">
                    <Card.Img variant="top" src={notFoundImg} />
                    <Card.Body className="text-center">

                         <Link to="/home" >Go Back</Link>
                    </Card.Body>
               </Card>

          </div>
     );
};

export default NotPound;