import React from "react";

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouleComponentUpdate", nextProps);
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="lifecycles">
        <h3>LIFECYCLE COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}
 export default Lifecycles;