import { useContext } from "react";
import { text } from "./Parent";
import Child3 from "./Child3";

export default function Child2() {
  console.log("IM from child2");
  return (
    <>
      <h2>Hello world!! from Child 2</h2>
      <Child3 />
    </>
  );
}
