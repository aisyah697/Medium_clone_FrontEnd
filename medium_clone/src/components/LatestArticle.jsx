import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const moment = require("moment");

const LatestArticle = (props) => {
  const changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    props.history.replace("/story-detail/" + articleTitle);
  };

  return (
    <div>
      <Card className="mb-5">
        <Row>
          <Col md={8}>
            <Card.Body className="p-0">
              <span className="title-references">
                BASED ON YOUR READING HISTORY
              </span>
              <Link
                className="big-title-home"
                onClick={() => changeRouter(`${props.title}`)}
              >
                <Card.Title className="big-title-home">
                  {props.title}
                </Card.Title>
              </Link>
              <Card.Text className="sub-title-article">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="author-in-home">
                {props.full_name}
              </Card.Text>
              <Card.Text className="sub-title-article">
                {moment(props.date).format("MMM DD")} &middot; 5 min read
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={4} className="pr-0">
            <Card.Img
              className="img-last-update"
              src={"http://0.0.0.0:5000/img/" + props.image}
              alt={props.image_caption}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LatestArticle;
