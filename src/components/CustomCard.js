import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, func, inSearchForm }) => {
  //   console.log(movie);
  const { Title, Poster, imdbRating, Director } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3 ">
      <Card.Img variant="top" src={Poster} className="h-10" />
      <Card.Body>
        <Card.Title className="mt-2 text-center">{Title}</Card.Title>
        <Card.Text>imdbRating: {imdbRating}</Card.Text>
        <Card.Text>Director: {Director}</Card.Text>
        {inSearchForm ? (
          <div className="d-flex justify-content-between flex-wrap">
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="success"
              onClick={() => func({ ...movie, mood: "sad" })}
            >
              Sad
            </Button>
          </div>
        ) : (
          <Button
            className="mt-4"
            variant="danger"
            onClick={() => func(movie.imdbID)}
          >
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
