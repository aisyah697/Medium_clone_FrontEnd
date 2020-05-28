import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin } from "../store/actions/actionUser";
import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

class Stories extends Component {
  render() {
    const is_login = this.props.dataUser.is_login;
    return (
      <div>
        {/* {is_login ? ( */}
        <Navigation {...this.props} />
        <section className="stories-list-section">
          <div className="card-stories">
            <h2 className="title-your-stories">Your stories</h2>
            <div>
              <Button className="btn-card-stories">Import a story</Button>
              <Button className="btn-card-stories active">Write a story</Button>
            </div>
          </div>

          <div>
            <Card>
              <Card.Header className="header-stories-menu">
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link className="link-stories" href="#first">
                      Drafts 3
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="link-stories" href="#link">
                      Publised 1
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="card-body-stories">
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text>
                  Last edited 4 days ago · 1 min read (4 words) so far
                </Card.Text>
              </Card.Body>
              <hr />
              <Card.Body className="card-body-stories">
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text>
                  Last edited 4 days ago · 1 min read (4 words) so far
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        {/* ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
});

const mapDispatchToProps = {
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
