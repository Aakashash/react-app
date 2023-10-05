import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const initial = {
  loading: false,
  users: [],
  errormsg: "",
};

const ThunkReducer = (state: {} = initial, action: any) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USERS_DATA":
      return {
        loading: false,
        users: action.payload,
        errormsg: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        users: {},
        errormsg: action.payload,
      };

    default:
      return state;
  }
};

const Store = createStore(ThunkReducer, applyMiddleware(thunk));

export default Store;
