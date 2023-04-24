import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie }) => {
  const { Title, Poster, imdbRating, Director } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} className="h-100" />
      <Card.Body>
        <Card.Title className="mt-2 text-center">{Title}</Card.Title>
        <Card.Text>imdbRating: {imdbRating}</Card.Text>
        <Card.Text>Director: {Director}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
