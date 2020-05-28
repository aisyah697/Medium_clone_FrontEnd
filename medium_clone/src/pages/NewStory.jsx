import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin } from "../store/actions/actionUser";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { getUser } from "../store/actions/actionUser";
import {
  changeInputArticle,
  allArticles,
  postArticle,
} from "../store/actions/actionArticle";

class NewStory extends Component {
  componentDidMount = async () => {
    await this.props.getUser();
    await this.props.allArticles();
  };
  postAfterArticle = async () => {
    await this.props.postArticle();
    await this.props.history.replace("/home");
    // await this.props.allArticles();
    // this.inputReset();
  };
  // inputReset = () => {
  //   const postInput = document.getElementsByClassName("postInput");
  //   postInput.value = "";
  // };

  render() {
    const is_login = this.props.dataUser.is_login;

    return (
      <div>
        {/* {is_login ? ( */}
        <Navbar collapseOnSelect expand="lg" className="main-navbar">
          <Navbar.Brand>
            <Link className="link-to" to="/home">
              <img
                src={require("../assets/logo-medium.png")}
                alt=""
                style={{ width: "35px" }}
              />
            </Link>
            <span className="draft-header">Draft</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-main-menu justify-content-end"
          >
            <Button
              type="submit"
              className="btn-publish"
              variant="success"
              onClick={() => this.postAfterArticle()}
            >
              Publish
            </Button>
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-icon"
                src={require("../assets/more.png")}
              ></img>
            </Nav.Link>
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-icon"
                src={require("../assets/bell.png")}
              ></img>
            </Nav.Link>
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-user"
                src={require("../assets/user.jpg")}
              ></img>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>

        <main role="main">
          <article>
            <div className="post-article-content">
              <Form.Group>
                <Form.Control
                  className="postInput post-article-title"
                  size="lg"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={(e) => this.props.changeInputArticle(e)}
                />
                <br />
                <Form.Control
                  className="postInput post-article-text"
                  type="text"
                  placeholder="Tell your story..."
                  name="text"
                  onChange={(e) => this.props.changeInputArticle(e)}
                />
                <br />
              </Form.Group>
            </div>
          </article>
        </main>
        {/* ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataArticle: state.article,
});

const mapDispatchToProps = {
  doLogin,
  getUser,
  postArticle,
  allArticles,
  changeInputArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStory);
