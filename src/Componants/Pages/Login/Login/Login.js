import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
     const { signInWithGoogle, handleSubmit, getEmail,
          getPassword, signInWithGithub, isLogin, toggleLogin } = useAuth();
     // history and location
     const history = useHistory();
     const location = useLocation();
     // redirect location
     const redirect_url = location.state?.from || '/home';
     const handleGoogleSign = () => {
          signInWithGoogle()
               .then(result => {
                    history.push(redirect_url)
               })
     }
     const handleGithubSign = () => {
          signInWithGithub()
               .then(result => {
                    history.push(redirect_url)
               })
     }

     return (
          <div className="p-5">
               <Form className="mx-auto w-50 mt-5 p-3" onSubmit={handleSubmit}>
                    <h3 className="text-center"> {isLogin ? "Login" : "Register"}</h3>
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
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                         <Col >
                              <Form.Check onChange={toggleLogin} label="Already have account" />
                         </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit"> {isLogin ? "Login" : " Submit"}  </Button>
               </Form>
               <Row>

                    <Col md={6} className="mx-auto w-50 ps-4 ">

                         <Button onClick={handleGoogleSign} variant="primary" className="mb-2">Google sign in</Button>
                         <br />
                         <Button onClick={handleGithubSign} variant="primary">Github Sign in</Button>
                    </Col>
               </Row>


          </div>
     );
};

export default Login;