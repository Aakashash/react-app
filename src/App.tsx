import { useEffect, useRef, useState } from "react";
import "./App.css";
// import Parent from "./useCallback/Parent";
// import Parent from "./useMemo/Parent";
// import Parent from "./custom hooks/Parent";
import Parent from "./useContext/Parent";

//example of useState hooks
/*
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>The count is {count}</h1>
        <button onClick={handleClick}> Increment</button>{" "}
        <button onClick={() => setCount(count - 1)}> Decrement</button>
      </div>
    </>
  );
}

*/
// example of useEffect hooks
// whenever the state changes rendering will happen whenever rendering happens then useEfect will be executed.
/*
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Im from useEffect");
    return () => {
      console.log("Im from useEffect return");
    };
  }, [value]); // if we give any state , then whenever the state changes then only useEffect renders
  // useEffect(()=>{}) if we dont give anything it will be rendered everytime.
  //useEffect(()=>{},[])  if we give empty array as second parameter then it will only render at initial time, it wont render after that
  // if we use return function then return function will be executed first then other code in useEffect will be executed.
  return (
    <>
      <div>
        <h1>The count is {count}</h1>
        <button onClick={handleClick}> Increment</button>{" "}
        <button onClick={() => setCount(count - 1)}> Decrement</button>{" "}
        <button
          onClick={() => {
            setValue(!value);
          }}
        >
          {" "}
          Control the useEffect
        </button>
      </div>
    </>
  );
}
*/

// useCallback
//  whenever we dont need any component to re render, we can use this hook useCallback.
// if one parent state changes then parent component can re render but we dont need the child component to
// re-render then we can use useCallback function.

// ALl the functions in Javascript uses reference. So same two different function will be different due to
//different reference values. SO if we use useCallback hook, it will freeze the function and everytime it will
// make the reference values same until the props changes.

/*
function App() {
  return (
    <>
      <Parent />
    </>
  );
}
*/
// useMemo
/*
function App() {
  return (
    <>
      <Parent />
    </>
  );
}

*/

// useRef - This only returns one object called current.
//  this doesnt cause re-render when its value is updated. we can use this to store any mutable( values can be changed) value
// we can access the DOM element directly.

/*
function App() {
  const count = useRef(0);
  const val = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    count.current = count.current + 1; // example to update a value which doesnt cause re render.
    // console.log(`${count.current}`);
  });
  return (
    <>
      <h1>Hello world!!</h1>
      <input
        ref={val} // this error will go if we intialize the useref with null.
        placeholder="Enter your name"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => {
          console.log(`Your name is ${val.current.value}`); // dont know why the error is poping but the value is able to get
        }}
      >
        {" "}
        Click me
      </button>
    </>
  );
}
*/

// custom hooks
// This is same like function in programming but this has three rules that needs to be followed.
// Name should start with use
// should be called only inside a function
// should not be called in loop or conditionally
// you should not use JSX inside the custom hook. just return any value or perform the actions and dont return anything.
function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
