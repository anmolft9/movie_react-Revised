import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const CustomCard = ({ movie }) => {
  console.log(movie);
  const { Title, Poster, imdbRating, Director } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3 ">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title className="mt-2 text-center">{Title}</Card.Title>
        <Card.Text>imdbRating: {imdbRating}</Card.Text>
        <Card.Text>Director: {Director}</Card.Text>
        <Row>
          <Col>
            <Button variant="primary">Happy</Button>
          </Col>
          <Col>
            <Button variant="success">Sad</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
