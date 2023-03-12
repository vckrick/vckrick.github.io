import { Container } from "react-bootstrap";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
        <Container
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <p>
            <a
              style={{ textDecoration: "none" }}
              href="https://vk.com/id647129261"
            >
              Miron
            </a>
            &
            <a
              style={{ textDecoration: "none" }}
              href="https://vk.com/itstartedwhen"
            >
              Vitaliy
            </a>
          </p>
        </Container>
      </Container>
    );
  }
}
