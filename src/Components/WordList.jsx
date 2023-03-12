import React from "react";
import {Row} from "react-bootstrap";
import WordItem from "./WordItem";

const WordList = ({phrases, remove}) => {
  return (
    <Row>
      {phrases.map((phrase, index) => (
        <WordItem remove={remove} number={index + 1} phrase={phrase} key={phrase.id}/>
      ))}
    </Row>
  );
};
export default WordList;
