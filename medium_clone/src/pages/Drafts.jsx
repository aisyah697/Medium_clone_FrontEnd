import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, getUser } from "../store/actions/actionUser";
import { allArticles } from "../store/actions/actionArticle";
import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const moment = require("moment");

class Drafts extends Component {
  componentDidMount() {
    this.props.allArticles();
    this.props.getUser();
  }

  changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    this.props.history.replace("/story-detail/" + articleTitle);
  };

  render() {
    const articleList = this.props.dataArticle.articleList;
    const dataUser = this.props.dataUser;

    return (
      <div>
        <Fragment>
          <Navigation
            {...this.props}
            name={this.props.dataUser.full_name}
            avatar={this.props.dataUser.avatar}
            email={this.props.dataUser.email}
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
                  <Nav variant="tabs" defaultActiveKey="/me/stories/drafts">
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
  allArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drafts);
