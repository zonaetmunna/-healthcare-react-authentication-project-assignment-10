import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
     const { signInWithGoogle, handleSubmit, getEmail,
          getPassword, signInWithGithub, isLogin, toggleLogin, error, getUserName } = useAuth();
     // history and location
     const history = useHistory();
     const location = useLocation();
     // redirect location for google sign in
     const redirect_url = location.state?.from || '/home';
     const handleGoogleSign = () => {
          signInWithGoogle()
               .then(result => {
                    history.push(redirect_url)
               })
     }
     // redirect location for github sign in
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
                    {/* user name */}
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                         <Col sm={10}>
                              <Form.Control onBlur={getUserName} type="text" placeholder="User" />
                         </Col>
                    </Form.Group>
                    {/* user email */}
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                         <Col sm={10}>
                              <Form.Control onBlur={getEmail} type="email" placeholder="Email" />
                         </Col>
                    </Form.Group>
                    {/* user password */}
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                         <Col sm={10}>
                              <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                         </Col>
                    </Form.Group>
                    {/* checked */}
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                         <Col >
                              <Form.Check onChange={toggleLogin} label="Already have account" />
                         </Col>
                    </Form.Group>
                    {/* error text */}
                    <p>{error}</p>
                    {/* login or register button */}
                    <Button variant="primary" type="submit"> {isLogin ? "Login" : " Submit"}  </Button>
               </Form>
               {/* google or github sign in  */}
               <Row>
                    <Col sm={12} md={6} className="mx-auto w-50 ps-4 text-center ">
                         <p>or login with</p>
                         <Button onClick={handleGoogleSign} variant="primary" className="me-2"><i class="fab fa-google"></i> Google sign in</Button>
                         <Button onClick={handleGithubSign} variant="primary"><i class="fab fa-github"></i> Github Sign in</Button>
                    </Col>
               </Row>
          </div>
     );
};

export default Login;