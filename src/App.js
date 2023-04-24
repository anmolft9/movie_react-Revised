import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CustomCard } from "./components/CustomCard";
import { SearchForm } from "./components/SearchForm";
import { fetchMovie } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (str) => {
    const results = await fetchMovie(str);
    setMovie(results);
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <hr />
        <div className="d-flex justify-content-center">
          {movie.imdbID && <CustomCard movie={movie} />}
        </div>
      </Container>
    </div>
  );
};

export default App;
