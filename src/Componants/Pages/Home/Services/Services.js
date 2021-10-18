import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../../Hooks/useService';
import Service from '../Service/Service';

const Services = () => {
     const [services] = useService()
     return (
          <div className="mt-5">
               <Container>
                    <h2 className="mb-3 animate__backInDown">Medical Services</h2>
                    <Row xs={1} md={3} className="g-3 ">
                         {
                              services.slice(0, 6).map(service => <Service
                                   key={service.id}
                                   service={service}
                              ></Service>)
                         }
                    </Row>
               </Container>

          </div>
     );
};

export default Services;