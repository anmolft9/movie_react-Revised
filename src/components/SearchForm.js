import { useState } from "react";
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
      <h1>The Movie List</h1>
      <Form className="mt-5" onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={handleOnChange}
                placeholder="Enter the Movie Name"
              />
            </Form.Group>
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
