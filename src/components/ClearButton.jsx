import React from "react";
import "./ClearButton.css";

export const ClearButton = (props) => (
  <div className="clear" onClick={() => props.handleClick(props.name)}>
    {props.name}{" "}
  </div>
);

export default ClearButton;
