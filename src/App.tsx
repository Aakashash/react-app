import { useEffect, useState } from "react";
import "./App.css";

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
  // if we return function then return function will be executed then other code in useEffect will be executed.
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

export default App;
