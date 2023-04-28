import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, handleRemoveItem }) => {
  const [display, setDisplay] = useState([]);
  const [view, setView] = useState("grid");

  useEffect(() => {
    setDisplay(movieList);
  }, [movieList]);
  //   console.log(display);

  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplay(movieList);
    }
    const temArg = movieList.filter((item) => item.mood === mood);
    setDisplay(temArg);
  };
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("sad")}>
              Sad
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="text-end">
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="secondary" onClick={() => setView("list")}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="d-flex justify-content-center flex-wrap">
          {display.map((item, index) =>
            view === "grid" ? (
              <CustomCard key={index} movie={item} func={handleRemoveItem} />
            ) : (
              <CustomList key={index} movie={item} func={handleRemoveItem} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
