import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ movie, inSearchForm, func }) => {
  const { Poster, Title, imdbRating, Director } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} className="h-100" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating : {imdbRating}</Card.Title>
        <Card.Title>Director : {Director}</Card.Title>

        {inSearchForm ? (
          <div className="d-flex justify-content-between flex-wrap">
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "sad" })}
            >
              sad
            </Button>
          </div>
        ) : (
          <Button variant="danger"></Button>
        )}
      </Card.Body>
    </Card>
  );
};
