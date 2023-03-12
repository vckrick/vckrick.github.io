import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const WordItem = (props) => {
  const deletePhrase = () => {
    props.remove(props.phrase);
    localStorage.removeItem(props.phrase.word);
  }

  return (
    <Row className="mt-3 ms-3">
      <Col className="square border border-dark rounded-pill col-10" style={{background: "#fff"}}>
        <h3 className="m-0">
          {props.number}. {props.phrase.word} - {props.phrase.translate}
        </h3>
      </Col>
      <Col>
        <Button
          onClick={deletePhrase}
          variant="danger"
          className="square border border-dark rounded-pill col-10"
        >
          Удалить
        </Button>
      </Col>
    </Row>
  );
};

export default WordItem;
