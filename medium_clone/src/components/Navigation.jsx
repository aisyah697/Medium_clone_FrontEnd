import React, { Component, useState, handleShow } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Navigation = (props) => {
  const doSignOut = async () => {
    await props.doSignOut();
    await props.history.replace("/");
  };

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
              alt="search"
            ></img>
          </Nav.Link>
          <Nav.Link className="navbar-menu" href="#features">
            <img
              className="navbar-menu-icon"
              src={require("../assets/ribbon.png")}
              alt="bookmarks"
            ></img>
          </Nav.Link>
          <Nav.Link className="navbar-menu" href="#features">
            <img
              className="navbar-menu-icon"
              src={require("../assets/bell.png")}
              alt="notification"
            ></img>
          </Nav.Link>
          <Button className="btn-upgrade" variant="success">
            Upgrade
          </Button>

          {["bottom"].map((placement) => (
            <Nav.Link className="navbar-menu">
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover
                    id={`popover-positioned-${placement}`}
                    className="popover-user"
                  >
                    <Popover.Content className="popover-top-user">
                      <div>
                        <img
                          className="popover-avatar"
                          src={"http://0.0.0.0:5000/img/" + props.avatar}
                          alt="avatar"
                        ></img>
                      </div>
                      <div className="popover-username">
                        <p className="name m-0">{props.name}</p>
                        <p className="email">{props.email}</p>
                      </div>
                    </Popover.Content>
                    <Popover.Content className="become-a-member popover-body-user">
                      Become a member
                    </Popover.Content>
                    <hr className="hr-popover" />
                    <Link className="link-to-new-story" to="/new-story">
                      <Popover.Content className="popover-body-user">
                        New Story
                      </Popover.Content>
                    </Link>
                    <Link className="link-to-new-story" to="/me/stories/public">
                      <Popover.Content className="popover-body-user">
                        Stories
                      </Popover.Content>
                    </Link>
                    <Popover.Content className="popover-body-user">
                      Series
                    </Popover.Content>
                    <Popover.Content className="popover-body-user">
                      Stats
                    </Popover.Content>
                    <hr className="hr-popover" />
                    <Popover.Content className="popover-body-user">
                      Medium Partner Program
                    </Popover.Content>
                    <hr className="hr-popover" />
                    <Popover.Content className="popover-body-user">
                      Reading List
                    </Popover.Content>
                    <Popover.Content className="popover-body-user">
                      Publications
                    </Popover.Content>
                    <Popover.Content className="popover-body-user">
                      Customize your interests
                    </Popover.Content>
                    <hr className="hr-popover" />
                    <Popover.Content className="popover-body-user">
                      Profile
                    </Popover.Content>
                    <Popover.Content className="popover-body-user">
                      Settings
                    </Popover.Content>
                    <Popover.Content className="popover-body-user">
                      Help
                    </Popover.Content>
                    <Popover.Content
                      className="popover-body-user mb-2"
                      onClick={doSignOut}
                    >
                      Sign out
                    </Popover.Content>
                  </Popover>
                }
              >
                <img
                  className="navbar-menu-user"
                  src={"http://0.0.0.0:5000/img/" + props.avatar}
                  alt="avatar"
                ></img>
              </OverlayTrigger>{" "}
            </Nav.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
