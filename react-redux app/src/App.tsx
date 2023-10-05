import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter";
import CounterusingClass from "./Components/CounterusingClass";
import Test from "./Test";
import CounterMultiplereducers from "./Components/CounterMultiplereducers";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      <CounterusingClass />
      {/*<Test /> */}
      <CounterMultiplereducers />
    </>
  );
}

export default App;
