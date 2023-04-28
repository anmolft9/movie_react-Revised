import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovie } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");
  const handleOnSubmit = async (str) => {
    const results = await fetchMovie(str);
    setMovie(results);
    results.Response === "False" ? setError(results.Error) : setError("");
  };

  const movieSelected = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
    // console.log(setMovie.value);
  };
  // console.log(movieList);

  const handleRemoveItem = (imdbID) => {
    const removedMovie = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(removedMovie);
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="d-flex justify-content-center">
          {movie.imdbID && (
            <CustomCard
              inSearchForm={true}
              movie={movie}
              func={movieSelected}
            />
          )}
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <hr />
        <MovieList movieList={movieList} handleRemoveItem={handleRemoveItem} />
      </Container>
    </div>
  );
};

export default App;
