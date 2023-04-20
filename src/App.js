import "./App.css";
import { Alert, Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm.js";
import { fetchMovieInfo } from "./helpers/axiosHelper";
import { useState } from "react";
import { CustomCard } from "./components/CustomCard.js";
import { MovieList } from "./components/MovieList";

function App() {
  const [movie, setMovie] = useState([]);
  const [showError, setShowError] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    // console.log(result);
    setMovie(result);

    result.Response === "False" ? setShowError(result.Error) : setShowError("");
  };

  const movieSelected = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };

  const handleRemoveItem = (imdbID) => {
    const filteredMovie = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredMovie);
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                func={movieSelected}
                inSearchForm={true}
              />
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>

        <hr />

        <div>
          <MovieList
            movieList={movieList}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
