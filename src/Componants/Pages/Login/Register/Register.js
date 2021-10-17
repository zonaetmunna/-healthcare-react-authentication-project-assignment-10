import React, { createContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
     const { createUserAccount, handleSubmit, getEmail, getPassword } = useAuth();
     return (
          <div>
               <Form className="mx-auto w-50 mt-5 p-3">
                    <h3> Register</h3>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                         <Col sm={10}>
                              <Form.Control onBlur={getEmail} type="email" placeholder="Email" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                         <Col sm={10}>
                              <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                         </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">

                         <Col sm={10}>
                              <Form.Control onSubmit={createUserAccount} type="submit" Value="Create Account" />
                         </Col>
                    </Form.Group>
               </Form>
               <Row>

                    <Col md={6} className="mx-auto w-50 ps-4 ">
                         <p>already sign in <Link to="/login">Login</Link></p>

                    </Col>
               </Row>
          </div>
     );
};

export default Register;