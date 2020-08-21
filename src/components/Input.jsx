import React from "react";
import "./Input.css";

export const Input = (props) => (
  <div className="display">
    <div className="input">{props.input}</div>
    <div className="answer">{props.answer}</div>
  </div>
);

export default Input;
