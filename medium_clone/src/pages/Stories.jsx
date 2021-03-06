import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, getUser, doSignOut } from "../store/actions/actionUser";
import { getArticleByUser } from "../store/actions/actionArticle";
import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const moment = require("moment");

class Stories extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getArticleByUser();
  }

  changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    this.props.history.replace("/story-detail/" + articleTitle);
  };

  render() {
    const dataUser = this.props.dataUser;
    const articleByUser = this.props.dataArticle.articleByUser;

    return (
      <div>
        <Fragment>
          <Navigation
            {...this.props}
            name={dataUser.full_name}
            avatar={dataUser.avatar}
            email={dataUser.email}
          />
          <section className="stories-list-section">
            <div className="card-stories">
              <h2 className="title-your-stories">Your stories</h2>
              <div>
                <Button className="btn-card-stories">Import a story</Button>
                <Link to="/new-story">
                  <Button className="btn-card-stories active">
                    Write a story
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <Card>
                <Card.Header className="header-stories-menu">
                  <Nav variant="tabs" defaultActiveKey="/me/stories/public">
                    <Nav.Item>
                      <Nav.Link
                        className="link-stories"
                        href="/me/stories/drafts"
                      >
                        Drafts
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="link-stories"
                        href="/me/stories/public"
                      >
                        Publised
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>

                {articleByUser
                  ? articleByUser.map((item) => (
                      <div>
                        <Card.Body className="card-body-stories">
                          <Link
                            className="little-title-home"
                            onClick={() =>
                              this.changeRouter(`${this.props.title}`)
                            }
                          >
                            <Card.Title className="title-stories">
                              {item.title}
                            </Card.Title>
                          </Link>
                          <Card.Text className="sliced-text-stories">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </Card.Text>
                          <Card.Text className="pubdate-stories">
                            Published on{" "}
                            {moment(item.created_at).format("MMM DD")} &middot;
                            1 min read{" "}
                          </Card.Text>
                        </Card.Body>
                        <hr className="mt-0" />
                      </div>
                    ))
                  : null}
              </Card>
            </div>
          </section>
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
  getArticleByUser,
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
