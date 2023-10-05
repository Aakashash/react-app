import { useState } from "react";

import axios from "axios";

export default function Test() {
  const [value, setValue] = useState({});
  //const [value,setVal] = useState({})
  const api = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const apiAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data));
  };
  //console.log(value);
  return (
    <div className="App">
      <h3>Hello CodeSandbox</h3>
      <button className="green" onClick={api}>
        CLICK FETCH
      </button>
      <button className="green" onClick={apiAxios}>
        CLICK AXIOS
      </button>
    </div>
  );
}
