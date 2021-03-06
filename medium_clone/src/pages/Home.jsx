import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, getUser, doSignOut } from "../store/actions/actionUser";
import {
  allArticles,
  topArticle,
  editorsPicks,
  popularArticle,
  articleTopic,
} from "../store/actions/actionArticle";
import Navigation from "../components/Navigation";
import ListArticle from "../components/ListArticle";
import TopArticle from "../components/TopArticle";
import PopularArticle from "../components/PopularArticle";
import LatestArticle from "../components/LatestArticle";
import EditorsPicks from "../components/EditorsPicks";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  componentDidMount() {
    this.props.allArticles();
    this.props.topArticle();
    this.props.editorsPicks();
    this.props.popularArticle();
    this.props.getUser();
  }

  changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    this.props.history.replace("/story-detail/" + articleTitle);
  };

  changeRouterTopic = (articleTopic) => {
    articleTopic = articleTopic.replace(/ /gi, "-");
    this.props.history.replace("/topic/" + articleTopic);
  };

  render() {
    const listArticle = this.props.dataArticle.articleList.slice(0, 3);
    const latestArticle = this.props.dataArticle.articleList;
    const topArticle = this.props.dataArticle.topArticle.slice(0, 1);
    const editorsPicks = this.props.dataArticle.editorsPicks.slice(0, 1);
    const popularArticle = this.props.dataArticle.popularArticle.slice(0, 4);

    const is_login = localStorage.getItem("token");

    return (
      <div>
        {is_login ? (
          <Fragment>
            <Navigation
              {...this.props}
              name={this.props.dataUser.full_name}
              avatar={this.props.dataUser.avatar}
              email={this.props.dataUser.email}
            />
            {/* <TopicCarousel {...this.props} /> */}
            <Nav
              className="main-navbar justify-content-center"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Popular
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Technology
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Music
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Politics
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Health
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Business
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Food
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Science
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-menu-carousel" href="/home">
                  Relationship
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* this is top article */}
            <Container className="mt-3">
              <Row>
                {topArticle.map((value) => (
                  <Col xs={12} sm={6} md={5}>
                    <TopArticle
                      {...this.props}
                      title={value.title}
                      image={value.image}
                      image_caption={value.image_caption}
                      text={value.text}
                      date={value.created_at}
                      full_name={value.user.full_name}
                    />
                  </Col>
                ))}

                {/* this is list article */}
                <Col xs={12} sm={6} md={4} className="p-0">
                  {listArticle.map((value) => (
                    <ListArticle
                      {...this.props}
                      title={value.title}
                      image={value.image}
                      image_caption={value.image_caption}
                      text={value.text}
                      date={value.created_at}
                      full_name={value.user.full_name}
                    />
                  ))}
                </Col>

                {/* this is editors picks */}
                {editorsPicks.map((value) => (
                  <Col xs={12} sm={12} md={3}>
                    <EditorsPicks
                      {...this.props}
                      title={value.title}
                      image={value.image}
                      date={value.created_at}
                      full_name={value.user.full_name}
                    />
                  </Col>
                ))}
              </Row>
              <Link to="/home">
                <span className="see-editors-picks" style={{ float: "right" }}>
                  SEE EDITOR'S PICKS >
                </span>
              </Link>
              <hr className="mt-4" />
            </Container>

            {/* this is latest article */}
            <Container className="mt-5">
              <Row>
                <Col sm={8} className="pr-0">
                  <Container>
                    {latestArticle.map((value) => (
                      <LatestArticle
                        {...this.props}
                        title={value.title}
                        image={value.image}
                        date={value.created_at}
                        full_name={value.user.full_name}
                      />
                    ))}
                  </Container>
                </Col>

                <Col sm={4} className="pl-0">
                  <Container className="sticky-sidebar pl-0 pt-1">
                    <Link
                      className="popular-on-medium"
                      onClick={() => this.changeRouter(`${this.props.title}`)}
                    >
                      <h5 className="popular-on-medium mt-4">
                        Popular on Medium
                      </h5>
                    </Link>
                    <hr />
                    <div>
                      {popularArticle.map((value, index) => (
                        <PopularArticle
                          {...this.props}
                          title={value.title}
                          text={value.text}
                          date={value.created_at}
                          full_name={value.user.full_name}
                          index={index + 1}
                        />
                      ))}
                    </div>
                    <footer className="container-sticky-footer">
                      <div className="sticky-footer">
                        <Link className="sticky-footer-text" to="/home">
                          Help
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          Status
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          Writers
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          Blog
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          Careers
                        </Link>
                        <br />
                        <Link className="sticky-footer-text" to="/home">
                          Privacy
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          Terms
                        </Link>
                        <Link className="sticky-footer-text" to="/home">
                          About
                        </Link>
                      </div>
                    </footer>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Fragment>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )}
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
  topArticle,
  editorsPicks,
  popularArticle,
  articleTopic,
  getUser,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
