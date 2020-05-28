import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import NewStory from "../pages/NewStory";
import Stories from "../pages/Stories";
import StoryDetail from "../pages/StoryDetail";
import ArticleTopics from "../pages/ArticleTopics";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/new-story" component={NewStory} />
          <Route path="/me/stories" component={Stories} />
          <Route path="/story-detail/:title" component={StoryDetail} />
          <Route path="/topic/:title" component={ArticleTopics} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
