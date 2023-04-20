import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
  };

  return (
    <div className="m-5 text-center">
      <h1>Movie list</h1>
      <Form className="m-5" onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="Enter MovieName"
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
