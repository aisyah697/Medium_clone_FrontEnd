import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import TopicList from "../components/TopicList";
import { allArticles, articleTopic } from "../store/actions/actionArticle";

class ArticleTopics extends Component {
  componentDidMount() {
    this.props.allArticles();
    this.props.articleTopic();
  }

  render() {
    let articleTopic = this.props.location.pathname;
    articleTopic = articleTopic.replace("/topic/", "");
    articleTopic = articleTopic.split("&&");
    const categoryID = articleTopic[0];
    articleTopic = articleTopic[1].replace(/-/gi, " ");
    const productPerCategory = this.props.dataTopic.topicList.filter(
      (item) => item.category === categoryID
    );

    return (
      <div>
        <Navigation {...this.props} />
        <h3>Articles Based on Certain Topic</h3>
        <hr />
        <TopicList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataArticle: state.article,
  dataTopic: state.topic,
});

const mapDispatchToProps = {
  allArticles,
  articleTopic,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTopics);
