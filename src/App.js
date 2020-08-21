import React from "react";
import "./styles.css";
import Button from "./components/Button";
import * as math from "mathjs";
import Input from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      answer: ""
    };
  }
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  equalTo = (val) => {
    this.setState({ answer: math.evaluate(this.state.input) });
  };
  multiply = (val) => {
    this.setState({ input: this.state.input + val.replace("x", "*") });
  };
  clearAll = (val) => {
    this.setState({ input: "", answer: "" });
  };
  render() {
    return (
      <div className="container">
        <header> Calculator </header>
        <div className="calc">
          <Input input={this.state.input} answer={this.state.answer} />
          <div className="grid-container">
            <Button name={1} handleClick={this.addToInput} id="one" />
            <Button name={2} handleClick={this.addToInput} id="two" />
            <Button name={3} handleClick={this.addToInput} id="three" />
            <Button name={"+"} handleClick={this.addToInput} id="add" />

            <Button name={4} handleClick={this.addToInput} id="four" />
            <Button name={5} handleClick={this.addToInput} id="five" />
            <Button name={6} handleClick={this.addToInput} id="six" />
            <Button name={"-"} handleClick={this.addToInput} id="subtract" />

            <Button name={7} handleClick={this.addToInput} id="seven" />
            <Button name={8} handleClick={this.addToInput} id="eight" />
            <Button name={9} handleClick={this.addToInput} id="nine" />
            <Button name={"x"} handleClick={this.multiply} id="multiply" />

            <Button name={"."} handleClick={this.addToInput} id="decimal" />
            <Button name={0} handleClick={this.addToInput} id="zero" />
            <Button name={"/"} handleClick={this.addToInput} id="divide" />
            <Button
              name={<FontAwesomeIcon icon={faCalculator} size="lg" />}
              handleClick={this.equalTo}
              id="equals"
            />
          </div>
          <ClearButton name="Clear" handleClick={this.clearAll} />
        </div>
      </div>
    );
  }
}
export default MyApp;
