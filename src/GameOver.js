import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";

const GameOver = () => {
  const navigate = useNavigate();
  const tryAgain = () => {
    localStorage.removeItem("score");
    navigate("/play");
  };
  const backToStart = () => {
    localStorage.clear();
    navigate("/game");
  };

  return (
    <>
      <Container
        className="mt-5 mb-5"
        style={{
          minHeight: "70vh",
          padding: "15px",
          background: "#ccc",
          borderRadius: "15px",
        }}
      >
        <Row>
          <Col className="col-5 m-auto mt-5">
            <h1>Отлично!!!</h1>
            <h1>Ваш счет: {localStorage.getItem("score")}</h1>
            <Button className="me-3 mt-5" variant="danger" onClick={backToStart}>
              Вернуться ко вводу слов
            </Button>
            <Button className="ms-3 mt-5" variant="success" onClick={tryAgain}>
              Попробовать снова
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer className="mt-3" />
    </>
  );
};

export default GameOver;
