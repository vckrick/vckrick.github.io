import React from "react";
import { Carousel } from "react-bootstrap";
import english from "../english.jpg";

export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "100vh" }}>
          <img className="d-block w-100" src={english} alt="First Slide" />
          <Carousel.Caption>
            <h3>English learning</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100vh" }}>
          <img className="d-block w-100" src={english} alt="First Slide" />
          <Carousel.Caption>
            <h3>English learning</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100vh" }}>
          <img className="d-block w-100" src={english} alt="First Slide" />
          <Carousel.Caption>
            <h3>English learning</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
