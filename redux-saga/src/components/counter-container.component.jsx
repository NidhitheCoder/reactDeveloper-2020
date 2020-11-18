import React from "react";
import "./counter-container.styles.css";
import { connect } from "react-redux";

const CounterContainer = props => {
  const { value, increment, decrement } = props;
  return (
    <div className="container">
      <span id="result">{value}</span>
      <button class="btn" onClick={increment}>
        Add 1
      </button>
      <button class="btn" onClick={decrement}>
        {" "}
        Minus 1
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
increment: () => dispatch({type:'INCREMENT'}),
decrement: () => dispatch({type:'DECREMENT'})
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
