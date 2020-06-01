import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const moment = require("moment");

const ListArticle = (props) => {
  const changeRouter = (articleTitle) => {
    articleTitle = articleTitle.replace(/ /gi, "-");
    props.history.replace("/story-detail/" + articleTitle);
  };

  return (
    <Fragment>
      <Card className="mb-3">
        <Row>
          <Col md={3}>
            <Card.Img
              className="img-random-article"
              src={"http://0.0.0.0:5000/img/" + props.image}
              alt={props.title}
            />
          </Col>

          <Col md={9}>
            <Card.Body className="pt-0 pr-0">
              <Link
                className="little-title-home"
                onClick={() => changeRouter(`${props.title}`)}
              >
                <Card.Title className="little-title-home mb-3">
                  {props.title}
                </Card.Title>
              </Link>
              <div className="d-flex align-items-end">
                <div>
                  <Card.Text className="author-in-home">
                    {props.full_name}
                  </Card.Text>
                  <Card.Text className="sub-title-article">
                    {moment(props.date).format("MMM DD")} &middot; 5 min read
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default ListArticle;
