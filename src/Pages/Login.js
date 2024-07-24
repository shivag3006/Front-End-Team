import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container login mt-5 ">
      <Row className="justify-content-md-center shadow">
        <Col md={4} className="bg-warning">
          <h2 className="text-center shadow text-dark"> <b> 𝐋𝐨𝐠𝐢𝐧 𝐏𝐚𝐠𝐞 </b></h2>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="btn2  mt-2">
              <Button className="me-5" variant="primary" type="submit" block>
                <b> Login </b>
              </Button>

              <Link to="http://localhost:3000/contactus" className="btn btn-primary"><b> Sign Up</b></Link>
            </div>
          </Form>

          <div className="mt-3">
            <a href="#forgot-password"> Forgot Password? </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
