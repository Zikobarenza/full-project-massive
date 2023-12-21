import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./css/LoginPage.css";

const Daftar = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFBModal, setShowFBModal] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [showTwitterModal, setShowTwitterModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8201/api/daftar", {
        email: email,
        username: username,
        password: password,
      });

      // Assuming your server sends a success message or status code
      if (response.data.success) {
        setShowError(false);
        navigate("/daftar"); // Navigate to the desired route on successful registration
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error(error);
      setShowError(true);
    }
  };

  const handleFBLogin = () => {
    setShowFBModal(true);
    // Call Facebook API to login
  };

  const handleFBModalClose = () => {
    setShowFBModal(false);
  };

  const handleGoogleLogin = () => {
    setShowGoogleModal(true);
    // Call Google API to login
  };

  const handleGoogleModalClose = () => {
    setShowGoogleModal(false);
  };

  const handleTwitterLogin = () => {
    setShowTwitterModal(true);
    // Call Twitter API to login
  };

  const handleTwitterModalClose = () => {
    setShowTwitterModal(false);
  };

  return (
    <Container className="login-container" style={{ width: "450px" }}>
      <h1 className="login-header text-center">NusaTech</h1>
      <Form onSubmit={handleRegistration} className="text-center">
        <p style={{ display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px" }}>Email</p>
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
        <p style={{ display: "-ms-inline-grid", textAlign: "left", marginBottom: "0px" }}>Username</p>
        <Form.Group controlId="formBasicPassword1" className="d-flex justify-content-center align-items-center">
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control-sm"
            style={{ border: "1px solid black", borderRadius: "30px", height: "35px", marginBottom: "20px" }}
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
            style={{ border: "1px solid black", borderRadius: "30px", height: "35px", marginBottom: "10px" }}
          />
        </Form.Group>

        <div>
          <Link    to={`/login`}
                          className="btn w-70"
                          style={{ backgroundColor: "black", color: "#fdfdff" }}
                        >
                          Daftar
          </Link>
        </div>

        {showError && (
          <Alert variant="danger" className="mt-3">
            Daftar failed. Please check your email and password.
          </Alert>
        )}
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

      <Modal show={showFBModal} onHide={handleFBModalClose}>
        {/* ... (Your Facebook login modal content) */}
      </Modal>

      <Modal show={showGoogleModal} onHide={handleGoogleModalClose}>
        {/* ... (Your Google login modal content) */}
      </Modal>

      <Modal show={showTwitterModal} onHide={handleTwitterModalClose}>
        {/* ... (Your Twitter login modal content) */}
      </Modal>
    </Container>
  );
};

export default Daftar;
