import { useContext } from "react";
import Child2 from "./Child2";

export default function Child1() {
  console.log("IM from child1");
  return (
    <>
      <Child2 />
    </>
  );
}
