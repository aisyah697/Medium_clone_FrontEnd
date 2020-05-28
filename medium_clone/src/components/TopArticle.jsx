import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const moment = require("moment");

const TopArticle = (props) => {
  const changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    props.history.replace("/story-detail/" + articleTitle);
  };

  return (
    <div>
      <Card>
        <Card.Img
          className="img-top-article"
          variant="top"
          src={"http://0.0.0.0:5000/img/" + props.image}
          alt={props.title}
        />
        <Card.Body>
          <Link
            className="big-title-home"
            onClick={() => changeRouter(`${props.title}`)}
          >
            <Card.Title className="big-title-home">{props.title}</Card.Title>
          </Link>
          <Card.Text className="sub-title-article">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text className="author-in-home">{props.full_name}</Card.Text>
          <Card.Text className="sub-title-article">
            {moment(props.date).format("MMM DD")} &middot; 5 min read
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopArticle;
