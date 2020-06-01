import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, getUser, doSignOut } from "../store/actions/actionUser";
import { allArticles, articleTopic } from "../store/actions/actionArticle";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

const moment = require("moment");

class StoryDetail extends Component {
  componentDidMount() {
    this.props.allArticles();
    this.props.getUser();
  }

  doSignOut = async () => {
    await this.props.doSignOut();
    await this.props.history.replace("/");
  };

  render() {
    let articleTitle = this.props.location.pathname;
    articleTitle = articleTitle.replace("/story-detail/", "");
    articleTitle = articleTitle.replace(/-/gi, " ");
    const articleDetail = this.props.dataArticle.articleList.filter(
      (item) => item.title === articleTitle
    );
    const dataUser = this.props.dataUser;

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="main-navbar">
          <Navbar.Brand>
            <Link className="link-to" to="/home">
              <img
                src={require("../assets/logo-medium.png")}
                alt=""
                style={{ width: "35px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-main-menu justify-content-end"
          >
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-icon"
                src={require("../assets/more.png")}
                alt="more"
              ></img>
            </Nav.Link>
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-icon"
                src={require("../assets/bell.png")}
                alt="notifications"
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
                            src={"http://0.0.0.0:5000/img/" + dataUser.avatar}
                            alt="avatar"
                          ></img>
                        </div>
                        <div className="popover-username">
                          <p className="name m-0">{dataUser.full_name}</p>
                          <p className="email">{dataUser.inputEmail}</p>
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

        {articleDetail.map((item) => (
          <article>
            <section className>
              <div className="main-story-det">
                <div className="story-det-body">
                  <div>
                    <div className="story-det-title">
                      <h1>{item.title}</h1>
                    </div>

                    <div className="story-det-info">
                      <div className="story-det-info-left">
                        <div>
                          <img
                            className="navbar-menu-user"
                            src={"http://0.0.0.0:5000/img/" + item.user.avatar}
                            alt={item.user.full_name}
                            style={{ width: "48px", height: "48px" }}
                          />
                        </div>
                        <div className="user-info-in-story">
                          <span className="author-in-story-det">
                            {item.user.full_name}
                          </span>
                          <br />
                          <span className="sub-title-article">
                            {moment(item.created_at).format("MMM DD")} &middot;
                            5 min read
                          </span>
                        </div>
                      </div>

                      <div className="story-det-info-right">
                        <div className="icon-story-det">
                          <a href="https://twitter.com/">
                            <img
                              src={require("../assets/twitter.png")}
                              alt="twitter"
                            />
                          </a>
                        </div>
                        <div className="icon-story-det">
                          <a href="https://www.linkedin.com/">
                            <img
                              src={require("../assets/linkedin.png")}
                              alt="linkedin"
                            />
                          </a>
                        </div>
                        <div className="icon-story-det">
                          <a href="https://www.facebook.com/">
                            <img
                              src={require("../assets/facebook.png")}
                              alt="facebook"
                            />
                          </a>
                        </div>
                        {["top"].map((placement) => (
                          <div className="icon-story-det tooltip-v">
                            <OverlayTrigger
                              key={placement}
                              placement={placement}
                              overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                  Save story
                                </Tooltip>
                              }
                            >
                              <img
                                src={require("../assets/ribbon1.png")}
                                alt="bookmark"
                              />
                            </OverlayTrigger>{" "}
                          </div>
                        ))}
                        {["bottom"].map((placement) => (
                          <div className="icon-story-det-end tooltip-v">
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Content>
                                    Mute this author
                                  </Popover.Content>
                                  <Popover.Content>
                                    Mute this publication
                                  </Popover.Content>
                                  <Popover.Content>
                                    Report this story
                                  </Popover.Content>
                                  <Popover.Content>
                                    Block this author
                                  </Popover.Content>
                                </Popover>
                              }
                            >
                              <img
                                src={require("../assets/more1.png")}
                                alt="more"
                              />
                            </OverlayTrigger>{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <figure className="main-article-figure">
                      <div className="article-photo">
                        <input type="checkbox" id="zoomCheck" />
                        <label for="zoomCheck">
                          <img
                            className="img-article"
                            src={"http://0.0.0.0:5000/img/" + item.image}
                            alt=""
                          />
                        </label>
                      </div>
                      <figcaption className="figure-caption">
                        {item.image_caption}
                      </figcaption>
                    </figure>
                    {/* <p id="paragraph-in-article">{item.text}</p> */}
                    <p
                      id="paragraph-in-article"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </article>
        ))}
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
  allArticles,
  articleTopic,
  getUser,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
