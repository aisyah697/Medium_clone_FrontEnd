import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin } from "../store/actions/actionUser";
import { getUser } from "../store/actions/actionUser";
import { allArticles, articleTopic } from "../store/actions/actionArticle";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

class StoryDetail extends Component {
  componentDidMount() {
    this.props.allArticles();
    this.props.getUser();
  }
  render() {
    let articleTitle = this.props.location.pathname;
    articleTitle = articleTitle.replace("/story-detail/", "");
    articleTitle = articleTitle.replace(/-/gi, " ");
    const articleDetail = this.props.dataArticle.articleList.filter(
      (item) => item.title === articleTitle
    );
    const is_login = this.props.dataUser.is_login;
    console.log("cek article detail", articleDetail);

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
            <Nav.Link className="navbar-menu" href="#features">
              <img
                className="navbar-menu-user"
                src={require("../assets/user.jpg")}
              ></img>
            </Nav.Link>
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
                            alt={item.image_caption}
                            style={{ width: "48px", height: "48px" }}
                          />
                        </div>
                        <div className="user-info-in-story">
                          <span className="author-in-story-det">
                            {item.user.full_name}
                          </span>
                          <br />
                          <span className="date-in-story-det">
                            {item.created_at}
                          </span>
                        </div>
                      </div>

                      <div className="story-det-info-right">
                        <div className="icon-story-det">
                          <img src={require("../assets/twitter.png")} alt="" />
                        </div>
                        <div className="icon-story-det">
                          <img src={require("../assets/linkedin.png")} alt="" />
                        </div>
                        <div className="icon-story-det">
                          <img src={require("../assets/facebook.png")} alt="" />
                        </div>
                        <div className="icon-story-det">
                          <img src={require("../assets/ribbon1.png")} alt="" />
                        </div>
                        <div className="icon-story-det-end">
                          <img src={require("../assets/more1.png")} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <figure className="main-article-figure">
                      <div className="article-photo">
                        <img
                          className="img-article"
                          src={"http://0.0.0.0:5000/img/" + item.image}
                          alt=""
                        />
                      </div>
                      <figcaption className="figure-caption">
                        {item.image_caption}
                      </figcaption>
                    </figure>
                    <p id="paragraph-in-article">{item.text}</p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        ))}
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
  allArticles,
  articleTopic,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
