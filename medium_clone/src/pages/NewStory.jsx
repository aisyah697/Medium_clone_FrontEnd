import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, getUser, doSignOut } from "../store/actions/actionUser";
import {
  changeInputArticle,
  fileSelectedHandler,
  allArticles,
  postArticle,
} from "../store/actions/actionArticle";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Card from "react-bootstrap/Card";

class NewStory extends Component {
  componentDidMount = async () => {
    await this.props.getUser();
    await this.props.allArticles();
  };

  postAfterArticle = async () => {
    await this.props.postArticle();
    await this.props.history.replace("/home");
  };

  doSignOut = async () => {
    await this.props.doSignOut();
    await this.props.history.replace("/");
  };

  previewFile = async (e) => {
    await this.props.fileSelectedHandler(e);
    const preview = document.querySelector("img[id=img]");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    const dataUser = this.props.dataUser;

    return (
      <div>
        <Fragment>
          <Navbar collapseOnSelect expand="lg" className="main-navbar">
            <Navbar.Brand>
              <Link className="link-to" to="/home">
                <img
                  src={require("../assets/logo-medium.png")}
                  alt="logo"
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
              {["bottom"].map((placement) => (
                <Nav.Link className="navbar-menu" href="#features">
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Content>
                          Settings will become available after you start
                          writing.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <img
                      className="navbar-menu-icon"
                      src={require("../assets/more.png")}
                      alt="more"
                    ></img>
                  </OverlayTrigger>{" "}
                </Nav.Link>
              ))}

              {["bottom"].map((placement) => (
                <Nav.Link className="navbar-menu" href="#features">
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Content>No notifications yet.</Popover.Content>
                      </Popover>
                    }
                  >
                    <img
                      className="navbar-menu-icon"
                      src={require("../assets/bell.png")}
                      alt="notifications"
                    ></img>
                  </OverlayTrigger>{" "}
                </Nav.Link>
              ))}

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
                              src={"http://0.0.0.0:5000/img/" + dataUser.avatar}
                              alt="avatar"
                            ></img>
                          </div>
                          <div className="popover-username">
                            <p className="name m-0">{dataUser.full_name}</p>
                            <p className="email">{dataUser.email}</p>
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
                        <Link
                          className="link-to-new-story"
                          to="/me/stories/public"
                        >
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
                          onClick={this.doSignOut}
                        >
                          Sign out
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <img
                      className="navbar-menu-user"
                      src={"http://0.0.0.0:5000/img/" + dataUser.avatar}
                      alt="avatar"
                    ></img>
                  </OverlayTrigger>{" "}
                </Nav.Link>
              ))}
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
                  <div id="container-add-icon">
                    <img
                      id="add"
                      className="add-icon"
                      src={require("../assets/add.png")}
                      alt="add-icon"
                    />
                    <img
                      className="icon-new-story"
                      src={require("../assets/camera1.png")}
                      alt="add-file"
                    />
                    <img
                      className="icon-new-story"
                      src={require("../assets/play.png")}
                      alt="add-video"
                    />
                  </div>
                  <Form>
                    <div className="mb-3">
                      <Form.File id="formcheck-api-regular">
                        <Form.File.Label className="mt-2">
                          Upload your image:
                        </Form.File.Label>
                        <Form.File.Input
                          id="img"
                          name="image"
                          accept="image/*"
                          onChange={(e) => this.previewFile(e)}
                        />
                      </Form.File>
                    </div>
                  </Form>
                  <Card>
                    <Card.Img
                      id="img"
                      variant="top"
                      src={this.props.image}
                      alt="image preview"
                    />
                  </Card>
                  <br />
                  <Form.Control
                    as="textarea"
                    rows="50"
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
        </Fragment>
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
  fileSelectedHandler,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStory);
