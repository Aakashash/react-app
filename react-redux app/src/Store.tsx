import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initial = {
  counter: 0,
  secCounter: 200,
};

const second = {
  counter: 10,
  secCounter: 20,
};

const reducer = (state: any = initial, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// both of the below reducers are used for example of combine reducers.

const ADDSUB = (state: any = second, action: any) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
    case "SUB":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const MULDIV = (state: any = second, action: any) => {
  switch (action.type) {
    case "MUL":
      return { ...state, secCounter: state.secCounter * 2 };
    case "DIV":
      return { ...state, secCounter: state.secCounter / 2 };
    default:
      return state;
  }
};

let root = combineReducers({ ADDSUB, MULDIV });

const Store = createStore(root, composeWithDevTools());
{
  /* This is for combine reducers*/
}

// const Store = createStore(reducer);
{
  /* This is for single reducer*/
}

export default Store;
