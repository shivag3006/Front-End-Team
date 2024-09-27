import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useGoogleLogin } from '@react-oauth/google'; // Import Google OAuth hook
import './Login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  // Function to toggle login page visibility
  const toggleLoginPage = () => {
    setIsLoginOpen(prev => !prev);
    setIsResetPassword(false); // Ensure reset password view is not shown when opening login
  };

  // Google login function
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      // Call the Google API to get user information
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          'Authorization': `Bearer ${response.access_token}`,
        },
      });
      const userInfo = await userInfoResponse.json();
      setUserInfo(userInfo);
      console.log(userInfo); // Check the user info data here
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  return (
    <div>
      {/* Button to open the login page */}
      <Button variant="primary" onClick={toggleLoginPage} className="open-login-btn">Login</Button>

      {/* Login Container */}
      <div className={`login-container ${isLoginOpen ? 'open' : ''}`}>
        <Row className="justify-content-md-center shadow">
          <Col md={12} className="bg-warning p-4">
            <h2 className="text-center shadow text-dark mb-4"><b>𝐋𝐨𝐠𝐢𝐧 𝐏𝐚𝐠𝐞</b></h2>

            {!isResetPassword ? (
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </Form.Group>

                <div className="mt-4">
                  <Button variant="outline-success">
                    <a href="login">
                      <b>𝐋𝐨𝐠𝐢𝐧</b>
                    </a>
                  </Button>
                </div>

                <div className="mt-3 d-flex justify-content-between">
                  <Button variant="danger" block onClick={loginWithGoogle}><b>Sign in with Gmail</b></Button>
                  <Button variant="info" block><b>Sign in with Instagram</b></Button>
                </div>

                {userInfo && (
                  <div className="mt-4">
                    <p>Signed in as: {userInfo.email}</p>
                  </div>
                )}

                <div className="mt-4">
                  <a href="#forgot-password" onClick={() => setIsResetPassword(true)}>Forgot Password?</a>
                </div>
              </Form>
            ) : (
              <Form onSubmit={handleResetPassword}>
                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    autoComplete="new-password"
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    autoComplete="new-password"
                  />
                </Form.Group>

                <div className="mt-4">
                  <Button variant="primary" type="submit" block><b>Reset Password</b></Button>
                </div>

                <div className="mt-3">
                  <a href="#login" onClick={() => setIsResetPassword(false)}>Back to Login</a>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isLoginOpen ? 'show' : ''}`} onClick={toggleLoginPage}></div>
    </div>
  );
}

export default Login;
