import React, { Component, useState, handleShow } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavLandingPage = (props) => {
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const postRegister = async () => {
    await props.doRegister();
    const is_login = props.dataUser.is_login;
    if (is_login) {
      props.history.replace("/");
    }
  };

  const postLogin = async () => {
    await props.doLogin();
    console.log("cek login");
    const is_login = props.dataUser.is_login;
    if (is_login) {
      props.history.replace("/home");
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Georgia, Times New Roman, Times, serif",
            fontWeight: "bold",
            fontSize: "32px",
            color: "black",
          }}
        >
          Medium
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar-menu justify-content-end"
        >
          <Nav.Link className="navbar-menu" href="#home">
            Subscribe
          </Nav.Link>
          <Nav.Link className="navbar-menu" href="#features">
            Write
          </Nav.Link>
          <Nav.Link className="navbar-menu" onClick={handleShowLogin}>
            Sign in
          </Nav.Link>

          <Button
            className="btn-get-started"
            variant="success"
            onClick={handleShowRegister}
          >
            Get started
          </Button>

          <Modal show={showRegister} onHide={handleCloseRegister}>
            <Modal.Header closeButton></Modal.Header>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Container>
                <Row className="show-grid">
                  <Col xs={1} sm={2} />
                  <Col xs={10} sm={8}>
                    <h4 className="text-center">Sign up with email</h4>
                    <p className="register-text text-center mb-5 mt-4">
                      Enter you email address to create an account.
                    </p>
                    <div className="text-center">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="register-text">
                          Your email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => props.changeInputEmail(e)}
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label className="register-text mt-4">
                          Your password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => props.changeInputPassword(e)}
                        />
                      </Form.Group>

                      <Button
                        className="btn-black my-4"
                        variant="dark"
                        type="submit"
                      >
                        <Link
                          className="text-btn-black"
                          onClick={() => postRegister()}
                        >
                          {" "}
                          Continue
                        </Link>
                      </Button>
                      <p>
                        Already have an account?
                        <Link className="text-link" onClick={handleShowLogin}>
                          {" "}
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </Col>
                  <Col xs={1} sm={2} />
                </Row>
              </Container>
            </Form>
          </Modal>

          <Modal show={showLogin} onHide={handleCloseLogin}>
            <Modal.Header closeButton></Modal.Header>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Container>
                <Row className="show-grid">
                  <Col xs={1} sm={2} />
                  <Col xs={10} sm={8}>
                    <h4 className="text-center">Sign in with email</h4>
                    <p className="register-text text-center mb-5 mt-4">
                      Enter the email address associated with your account, and
                      we'll send a magic link to your inbox.
                    </p>
                    <div className="text-center">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="register-text">
                          Your email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => props.changeInputEmail(e)}
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label className="register-text mt-4">
                          Your password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => props.changeInputPassword(e)}
                        />
                      </Form.Group>

                      <Button
                        className="btn-black my-4"
                        variant="dark"
                        type="submit"
                      >
                        <Link
                          className="text-btn-black"
                          onClick={() => postLogin()}
                        >
                          Sign in
                        </Link>
                      </Button>
                      <p>
                        No account?
                        <Link className="text-link" onClick={handleCloseLogin}>
                          {" "}
                          Create one
                        </Link>
                      </p>
                    </div>
                  </Col>
                  <Col xs={1} sm={2} />
                </Row>
              </Container>
            </Form>
          </Modal>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavLandingPage;
