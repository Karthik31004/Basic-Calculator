import React from "react";
import "./Butto.css";

const isOperation = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};
export const Button = (props) => (
  <div
    className={`btn ${isOperation(props.name) ? null : "operator"}`}
    onClick={() => props.handleClick(props.name)}
  >
    {props.name}
  </div>
);
export default Button;
