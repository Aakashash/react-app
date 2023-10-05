const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const add = () => {
  return {
    type: "ADD",
  };
};

const sub = () => {
  return {
    type: "SUB",
  };
};

const mul = () => {
  return {
    type: "MUL",
  };
};

const div = () => {
  return {
    type: "DIV",
  };
};

// these actions are for Thunk example

export const fetchusers = () => {
  return {
    type: "FETCH_USERS",
  };
};

export const fetchuserdata = (users: {}) => {
  return {
    type: "FETCH_USERS_DATA",
    payload: users,
  };
};

export const fetcherror = (errormsg: string) => {
  return {
    type: "FETCH_ERROR",
    payload: errormsg,
  };
};

export const test = () => {
  return (dispatch) => {
    dispatch(fetchusers());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => dispatch(fetchuserdata(res)))
      .catch((err) => dispatch(fetcherror(err)));
  };
};
export const lol = (value) => {
  value.map((v) => console.log(v.name));
};
export { increment, decrement, add, sub, mul, div };
