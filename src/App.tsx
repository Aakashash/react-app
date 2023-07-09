import "./App.css";
import { useState, useRef } from "react";
import Car from "./class_basic";
import Form from "./dss_react";
import ResultTable from "./table";

/*
// Basic usestate to update count
function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevState) => prevState + 1);
  }
  function decrement() {
    setCount((prevState) => {
      return prevState - 1;
    });
  }
  // Handling the name change

  return (
    <>
      <div>
        <h1>Count = {count}</h1>

        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Sub</button>
        <Car model="ford" />
        <Car model="mustang" />
      </div>
    </>
  );
}

*/

declare global {
  var XXX: string;
}

function App() {
  //const [name, setUsername] = useState("");

  // const usernameRef = useRef();

  // console.log(usernameRef);
  console.log("rendereed");

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const data = new FormData(e.target);

  //   console.log(Object.fromEntries(data));

  //   console.log("rendereed");
  // };
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    password: "",
  });

  const [result, setResult] = useState(false);
  const [total, setTotal] = useState<any[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTotal([...total, values]);
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //console.log(values);
  console.log(total);

  globalThis.XXX = "This is jsut a set up buddy";

  //console.log(XXX);
  //console.log(globalThis.XXX);

  const viewData = () => {
    console.log(values.password);
    setResult(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form
          name="username"
          type="text"
          placeholder="Enter your name"
          label="Username"
          errormessage="Username should be 3-16 characters and shouldn't include any special character!"
          onChange={onChange}
          pattern="^[A-Za-z0-9]{3,16}$"
          required={true}
        />
        <Form
          name="password"
          type="password"
          placeholder="Create your new password"
          label="Password"
          errormessage="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          onChange={onChange}
          required={true}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <Form
          name="email"
          type="text"
          placeholder="Enter your email"
          label="email"
          errormessage="Enter your valid email id"
          onChange={onChange}
          required={true}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <Form
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          label="phone"
          errormessage="Enter 10 digit number"
          onChange={onChange}
          pattern="[0-9]{10,}$"
          required={true}
        />
        <Form
          name="address"
          type="text"
          placeholder="Enter your address"
          label="address"
          errormessage="Enter your address"
          onChange={onChange}
          required={true}
          pattern="^[A-Za-z0-9]{8,16}$"
        />
        <Form
          name="country"
          type="text"
          placeholder="Enter your country"
          label="country"
          errormessage="Country should be four digits"
          onChange={onChange}
          required={true}
          pattern="^[A-Za-z]{4,16}$"
        />
        <button>Submit</button>
      </form>
      <div>
        <button onClick={viewData}> View Data </button>
        {result ? <ResultTable res={total} /> : null}
      </div>
    </>
  );
}

export default App;
