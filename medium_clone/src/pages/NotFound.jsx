import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="lg" className="main-navbar">
          <Navbar.Brand
            style={{
              fontFamily: "Georgia, Times New Roman, Times, serif",
              fontWeight: "bold",
              fontSize: "32px",
              color: "black",
            }}
          >
            <Link className="link-to" to="/home">
              Medium
            </Link>
          </Navbar.Brand>
        </Navbar>

        <Container className="contain-404">
          <Row className="row-not-found">
            <Col xs={12} sm={5} className="err-404">
              404
            </Col>
            <Col xs={12} sm={7} className="not-found">
              We couldn’t find this page.
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NotFound;
