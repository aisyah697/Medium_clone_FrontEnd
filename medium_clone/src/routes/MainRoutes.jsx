import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
