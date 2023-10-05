import React, { ReactNode } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { decrement, increment } from "../Actions/Action";
import Store from "../Store/Store";

class CounterusingClass extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Hi, I am a Car! and the owner is {this.props.data.counter}</h3>
        <button className="green" onClick={this.props.increment}>
          Increment
        </button>
        <button className="red" onClick={this.props.decrement}>
          Decrement
        </button>
        <h3>
          {Store.getState().counter} - Just a data from the store directly
          {/* if we are using only one reducer we call directly the state value 
          but if we are using multiple reducers then you need to first call the reducers then the store value */}
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
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CounterusingClass);
