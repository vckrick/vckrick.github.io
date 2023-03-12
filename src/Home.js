import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Container style={{ height: "85vh" }}>
        <div
          style={{
            background: "#ccc",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "30px",
          }}
        >
          <Row
            className="mt-3 mb-3 col-5"
            style={{ borderBottom: "2px solid black" }}
          >
            <h1>Добро пожаловать!</h1>
          </Row>
          <Row className="mb-3">
            <h2>Это веб-приложение поможет вам учить английские слова</h2>
          </Row>
          <Row className="mb-3">
            <h3>Как пользоваться: </h3>
          </Row>
          <Row
            className="mb-3"
            style={{
              border: "2px solid black",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <ul>
              <li>
                <h4>Перейдите во вкладку "Учить слова"</h4>
              </li>
              <li>
                <h4>
                  Введите в соответствующее поле слово или фразу на русском
                </h4>
              </li>
              <li>
                <h4>Нажмите на кнопку "добавить в список"</h4>
              </li>
              <li>
                <h4>
                  Повторите предыдущие шаги и добавьте нужное кол-во слов для
                  изучения
                </h4>
              </li>
              <li>
                <h4>Нажмите кнопку "начать запоминать"</h4>
              </li>
            </ul>
          </Row>
        </div>
      </Container>
      <Footer className="mb-0" />
    </>
  );
};

export default Home;
