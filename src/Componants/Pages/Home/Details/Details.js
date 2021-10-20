
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
// import useDetails from '../../../../Hooks/useDetails';



const Details = () => {
     const { id } = useParams();
     const history = useHistory();

     const [details, setDetails] = useState([])
     const [singleDetails, setSingleDetails] = useState({})
     useEffect(() => {
          fetch('/Service.json')
               .then(res => res.json())
               .then(data => {
                    setDetails(data)
                    console.log("first", data)
               })
     }, [])
     useEffect(() => {
          const singleService = details.find((employee) => employee.id === id);
          console.log("seceond", singleService);
          setSingleDetails(singleService)
     }, [details])


     const handleBooking = () => {
          history.push('/booking')
     }

     return (
          <div className="mt-5 pt-5">

               <Container className="m-5 p-5">

                    <Row>
                         <Col sm={12} md={6}>
                              <Card className="border-0">
                                   <Card.Img variant="top" className="img-fluid" src={singleDetails?.image} />
                                   <Card.Body>
                                        <Card.Title>{singleDetails?.name}</Card.Title>
                                        <Card.Text>{singleDetails?.description}</Card.Text>

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