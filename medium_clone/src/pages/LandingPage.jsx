import React, { Component, useState } from "react";
import { connect } from "react-redux";
import NavLandingPage from "../components/NavLandingPage";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {
  changeInputEmail,
  changeInputPassword,
  doLogin,
  doRegister,
} from "../store/actions/actionUser";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavLandingPage {...this.props} />

        <Jumbotron fluid style={{ height: "250px", backgroundColor: "white" }}>
          <Container>
            <h1
              style={{
                lineHeight: "85px",
                fontSize: "85px",
                fontWeight: "bold",
                fontFamily: "Georgia, Times New Roman, Times, serif",
                textAlign: "center",
              }}
            >
              Get smarter about what matters to you.
            </h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
});

const mapDispatchToProps = {
  changeInputEmail,
  changeInputPassword,
  doLogin,
  doRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
