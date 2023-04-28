import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomList = ({ movie, func, inSearchForm }) => {
  //   console.log(movie);
  const { Title, Poster, imdbRating, Director, Plot } = movie;
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between "
    >
      <div style={{ width: "250px" }}>
        <Card.Img variant="top" src={Poster} className="h-100" />
      </div>
      <Card.Body>
        <Card.Title className="m-4 text-center">{Title}</Card.Title>
        <hr />
        <Card.Text>imdbRating: {imdbRating}</Card.Text>
        <Card.Text>Director: {Director}</Card.Text>
        <div>{Plot}</div>
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
