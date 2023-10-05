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

export { increment, decrement, add, sub, mul, div };
