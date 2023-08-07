import { useContext, useState } from "react";
import { text } from "./Parent";

export default function Child4() {
  // const [data, setData] = useState(0);
  const { user, setUser } = useContext(text);
  console.log("IM from child4");
  return (
    <>
      <h1>Hello world!! from Child 4 - {user}</h1>
      <button style={{ color: "red" }} onClick={() => setUser("Ichigo")}>
        {" "}
        Click me for Ichigo
      </button>
      <h3>{user}</h3>
    </>
  );
}
