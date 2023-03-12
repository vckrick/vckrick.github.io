import React, { useEffect, useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const [time, setTime] = useState(10);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [userTranslate, setUserTranslate] = useState("");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(decreaseTime, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    localStorage.removeItem("score");
    getRandomPhrase();
  }, []);

  function decreaseTime() {
    if (time <= 0) {
      if (score >= 50) {
        setScore(score - 50);
      }
      getRandomPhrase();
      setTime(10);
    } else {
      setTime(time - 1);
    }
  }

  const getRandomPhrase = () => {
    if (count < localStorage.length) {
      setRandomPhrase(localStorage.getItem(localStorage.key(count)));
      setCount(count + 1);
    } else {
      return false;
    }
  };

  const getAnswer = (e) => {
    e.preventDefault()
    if (randomPhrase === localStorage.getItem(userTranslate)) {
      setScore(score + 100);
    } else if (score >= 50) {
      setScore(score - 50);
    }
    setTime(10);  
    setUserTranslate("");
    if (getRandomPhrase() === false) {
      localStorage.setItem("score", score);
      navigate("/gameover");
    }
  };

  return (
    <Container className="mt-3" style={{padding: "15px", background: "#ccc", borderRadius: "15px"}}>
      <Row className="col-9 m-auto">
        <Col className="mt-3 col-3">
          <h1>Время: {time}</h1>
        </Col>
        <Col className="mt-3">
          <h1>Счет: {score}</h1>
        </Col>
      </Row>
      <Row className="col-9 m-auto">
        <Col className="mb-3">
          <h1>Переведите: {randomPhrase}</h1>
        </Col>
      </Row>
      <Row className="col-9 m-auto">
        <Form className="col-6 mb-3">
          <Form.Control
            type="text"
            placeholder="Введите перевод"
            value={userTranslate}
            onChange={(e) => setUserTranslate(e.target.value)}
          />
          <Button type="submit" className="col-4 mt-3" variant="success" onClick={getAnswer}>
            Ответить
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Play;
