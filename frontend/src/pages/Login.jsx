import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8201/login', { email, password });
      console.log(res);
      if (res.data.includes('berhasil')) {
        navigate('/');
        // Reset the showError state when login is successful
        setShowError(false);
      } else {
        setShowError(true);
      }
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Google login clicked");
  };

  const handleFBLogin = () => {
    // Add your Facebook login logic here
    console.log("Facebook login clicked");
  };

  const handleTwitterLogin = () => {
    // Add your Twitter login logic here
    console.log("Twitter login clicked");
  };

  return (
    <Container className="login-container" style={{ width: "450px", marginTop: "-20px" }}>
      <div className="login-container">
        <h1 className="login-header text-center">NusaTech</h1>
        <Form onSubmit={handleSubmit} className="text-center">
          <p style={{ display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px" }}>Username</p>
          <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center align-items-center">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control-sm"
              style={{ border: "1px solid black", borderRadius: "30px", height: "35px", marginBottom: "10px" }}
            />
          </Form.Group>
          <p style={{ display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px" }}>Password</p>
          <Form.Group controlId="formBasicPassword" className="d-flex justify-content-center align-items-center">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control-sm"
              style={{ border: "1px solid black", borderRadius: "30px", height: "35px" }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-center">
            <Form.Check type="checkbox" label="Remember Me" style={{ margin: "20px auto" }} />
            <a href="forgot_password" className="float-right" style={{ margin: "20px auto" }}>Forgot Password?</a>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-primary" style={{ color: "white", margin: "20px 30px"  }}>
              Masuk
            </Link>
            {/* Use Link component to navigate to "/daftar" */}
              <Link to="/daftar" className="btn btn-primary" style={{ color: "white", margin: "20px 30px"  }}>
                Daftar
              </Link>
          </div>
        </Form>

        <div className="my-3 text-center">
          <span>Or sign in with:</span>
        </div>

        <div className="d-flex justify-content-center">
          <Button className="mr-3" style={{ marginLeft: "20px" }} onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          </Button>
          <Button style={{ marginLeft: "20px" }} onClick={handleFBLogin}>
            <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" />
          </Button>
          <Button className="ml-3" style={{ marginLeft: "20px" }} onClick={handleTwitterLogin}>
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
