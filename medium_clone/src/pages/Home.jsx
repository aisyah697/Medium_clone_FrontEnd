import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin } from "../store/actions/actionUser";
import Navigation from "../components/Navigation";

class Home extends Component {
  render() {
    const is_login = this.props.dataUser.is_login;
    return (
      <div>
        {is_login ? (
          <Navigation {...this.props} />
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
