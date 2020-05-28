import React, { Component, useState, handleShow } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = (props) => {
  return (
    <div>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar-main-menu justify-content-end"
        >
          <Nav.Link className="navbar-menu" href="#home">
            <img
              className="navbar-menu-icon"
              src={require("../assets/search.png")}
            ></img>
          </Nav.Link>
          <Nav.Link className="navbar-menu" href="#features">
            <img
              className="navbar-menu-icon"
              src={require("../assets/ribbon.png")}
            ></img>
          </Nav.Link>
          <Nav.Link className="navbar-menu" href="#features">
            <img
              className="navbar-menu-icon"
              src={require("../assets/bell.png")}
            ></img>
          </Nav.Link>
          <Button className="btn-upgrade" variant="success">
            Upgrade
          </Button>
          <Link to="/new-story">
            <Button className="btn-upgrade" variant="success">
              New Story
            </Button>
          </Link>
          <Nav.Link className="navbar-menu" href="#features">
            <img
              className="navbar-menu-user"
              src={require("../assets/user.jpg")}
            ></img>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
