import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
     const { signInWithGoogle, handleSubmit, getEmail,
          getPassword } = useAuth();
     const history = useHistory();
     const location = useLocation();

     const redirect_url = location.state?.from || '/home';
     const handleGoogleSign = () => {
          signInWithGoogle()
               .then(result => {
                    history.push(redirect_url)
               })
     }
     return (
          <div>
               <Form className="mx-auto w-50 mt-5 p-3">
                    <h3> Login</h3>
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
                              <Form.Control onSubmit={handleSubmit} type="submit" Value="sign in" />
                         </Col>
                    </Form.Group>
               </Form>
               <Row>

                    <Col md={6} className="mx-auto w-50 ps-4 ">
                         <p>New user <Link to="/register">Register</Link></p>
                         <Button onClick={handleGoogleSign} variant="primary">Google sign in</Button>
                    </Col>
               </Row>


          </div>
     );
};

export default Login;