import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import WordList from "./Components/WordList";
import Footer from "./Components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const googleTranslateURL = (from, to, text) =>
    `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${text}`;

  const [translate, setTranslate] = useState([]);
  const [word, setWord] = useState("");
  const [phrases, setPhrases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(AddNewTranslate(0), 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if(word === ""){
      setTranslate("")
    }
  }, [translate, word]);

  useEffect(() => {
    return localStorage.clear();
  }, []);

  const AddNewTranslate = (e) => {
    e ?? e.preventDefault();
    axios(googleTranslateURL("ru", "en", encodeURI(word))).then((resp) =>
      setTranslate(resp.data[0][0][0])
    );
  };

  const AddNewPhrase = (e) => {
    e.preventDefault();
    if (word !== ""){
      const newPhrase = {
        id: Date.now(),
        translate,
        word,
      };
      if (word) {
        localStorage.setItem(word, translate);
      }
      setPhrases([...phrases, newPhrase]);
      setWord("");
      setTranslate("");
    }
  };

  const removePhrase = (phrase) => {
    setPhrases(phrases.filter((p) => p.id !== phrase.id));
  };

  const startGame = () => {
    if (localStorage.length > 0){
      navigate("/play")
    }
  };

  return (
    <>
      <Container className="mt-3">
        <div
          style={{ background: "#ccc", padding: "15px", borderRadius: "10px" }}
        >
          <Row>
            <Col className="col-md-6 col-sm-12 mb-3">
              <Form.Label>Введите слово на русском:</Form.Label>
              <Form.Control
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </Col>
            <Col className="col-md-6 col-sm-12 mb-3">
              <Form.Label>Ваш перевод:</Form.Label>
              <Form.Control readOnly type="text" value={translate} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="ms-auto col-md-6 col-sm-12">
              <Button className="me-2" variant="dark" onClick={AddNewPhrase}>
                Добавить в список
              </Button>
              <Button className="me-2" variant="success" onClick={startGame}>
                Начать запоминать
              </Button>
            </Col>
          </Row>
        </div>
        {phrases.length !== 0 ? (
          <Col className="m-auto col-12 mb-4 mt-2">
            <h1
              style={{
                background: "#ccc",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              | Добавленные слова и фразы:
            </h1>
            <div
              style={{
                minHeight: "50vh",
                background: "#ccc",
                borderRadius: "10px",
              }}
            >
              <WordList remove={removePhrase} phrases={phrases} />
            </div>
          </Col>
        ) : (
          <Col className="m-auto col-12 mb-4 mt-2">
            <h1
              style={{
                background: "#ccc",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              | Здесь будут ваши слова:
            </h1>
            <div
              style={{
                minHeight: "50vh",
                background: "#ccc",
                borderRadius: "10px",
              }}
            ></div>
          </Col>
        )}
      </Container>
      <Footer /> 
    </>
  );
};

export default About;
