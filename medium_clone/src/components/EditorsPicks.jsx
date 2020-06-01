import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const moment = require("moment");

const EditorsPicks = (props) => {
  const changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    props.history.replace("/story-detail/" + articleTitle);
  };

  return (
    <div>
      <Card>
        <Card.Img
          className="img-right-article"
          variant="top"
          src={"http://0.0.0.0:5000/img/" + props.image}
          alt={props.title}
        />
        <Card.Body className="pl-0 pr-0">
          <Link
            className="medium-title-home"
            onClick={() => changeRouter(`${props.title}`)}
          >
            <Card.Title className="medium-title-home">{props.title}</Card.Title>
          </Link>
          <Card.Text className="sub-title-article">
            Some quick example text to build on the card title.
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

export default EditorsPicks;
