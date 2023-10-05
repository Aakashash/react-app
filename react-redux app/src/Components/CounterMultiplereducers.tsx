import React from "react";

import { add, div, mul, sub } from "../Actions/Action";
import Store from "../Store/Store";
import { connect } from "react-redux";

class CounterMulitplereducers extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>The counter value is {this.props.data.ADDSUB.counter}</h3>
        <h3>The secCounter value is {this.props.data.MULDIV.secCounter}</h3>
        <button className="green" onClick={this.props.add}>
          Add{" "}
        </button>
        <button
          className="red"
          onClick={() => {
            this.props.sub();
          }}
        >
          Sub
        </button>
        <button className="green" onClick={this.props.mul}>
          MUL{" "}
        </button>
        <button
          className="red"
          onClick={() => {
            this.props.div();
          }}
        >
          DIV
        </button>

        <h3>
          {" "}
          {Store.getState().ADDSUB.counter} - Just a data from the store
          directly
        </h3>
        <h3>
          {" "}
          {Store.getState().MULDIV.secCounter} - Just a data from the store
          directly
        </h3>
      </div>
    );
  }
}

const mapStatetoProps = (state: any) => {
  return { data: state };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
    mul: () => dispatch(mul()),
    div: () => dispatch(div()),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CounterMulitplereducers);
