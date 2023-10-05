import React from "react";

import { useSelector, useDispatch, useStore } from "react-redux";
import { decrement, increment } from "../Actions/Action";

const Counter = () => {
  const data: any = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h3>Counter: {data}</h3>
      <button
        className="green"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add{" "}
      </button>
      <button
        className="red"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Remove{" "}
      </button>
    </div>
  );
};

export default Counter;
