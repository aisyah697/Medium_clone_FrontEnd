import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const moment = require("moment");

const PopularArticle = (props) => {
  const changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    props.history.replace("/story-detail/" + articleTitle);
  };

  return (
    <div>
      <Card className="mb-4">
        <Row>
          <Col sm={3}>
            <Card.Title className="index-popular text-center">
              0{props.index}
            </Card.Title>
          </Col>

          <Col sm={9} className="pl-0">
            <Card.Body className="p-0">
              <Link
                className="little-title-home"
                onClick={() => changeRouter(`${props.title}`)}
              >
                <Card.Title className="little-title-home">
                  {props.title}
                </Card.Title>
              </Link>
              <Card.Text className="author-in-home">
                {props.full_name}
              </Card.Text>
              <Card.Text className="sub-title-article">
                {moment(props.date).format("MMM DD")} &middot; 5 min read
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default PopularArticle;
