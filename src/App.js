import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovie } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);
  const handleOnSubmit = async (str) => {
    const results = await fetchMovie(str);
    setMovie(results);
  };

  const movieSelected = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
    // console.log(setMovie.value);
  };
  // console.log(movieList);

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="d-flex justify-content-center">
          {movie.imdbID && <CustomCard movie={movie} func={movieSelected} />}
        </div>
        <hr />
        <MovieList movieList={movieList} />
      </Container>
    </div>
  );
};

export default App;
