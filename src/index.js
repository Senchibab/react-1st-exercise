import React from "react";
import ReactDOM from "react-dom";
class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:
        this.props.name.toLowerCase().indexOf(this.props.char.toLowerCase()) +
        1,
      char: this.props.char.toLowerCase()
    };
  }
  render() {
    return (
      <h1>
        {" "}
        {this.state.char} is {this.state.name}th character of {this.props.name}
      </h1>
    );
  }
}

ReactDOM.render(
  <div>
    {" "}
    <Ex name="Vinodh" char="v" />
    <Ex name="Erode" char="E" />
  </div>,
  document.getElementById("root")
);
