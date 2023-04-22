import React from "react";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <hr />
      </Container>
    </div>
  );
};

export default App;
