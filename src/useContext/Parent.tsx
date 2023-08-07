import { createContext, useState } from "react";
import Child1 from "./Child1";

export const text = createContext({
  user: "" as string,
  setUser: (e: string) => {},
});

// Three steps to use useContext hook
// first step - createContext and create a context. like :- export const text = createContext<string | undefined>(undefined);

// Then with the help of the context we created wrap the component and send the state
// like : -       <text.Provider value={user}> <Child1 /> </text.Provider>
// Then in which component we want to use just use it like : -   let v = useContext(text); and in v we have our value

// we can avoid prop drilling by using this

export default function Parent() {
  const [user, setUser] = useState("React");
  console.log("IM from Parent");

  const valu = { user: user, setUser: setUser };
  return (
    <>
      <h1>Hello world!! from Parent - {user} </h1>
      <button style={{ color: "red" }} onClick={() => setUser("Rengoku")}>
        {" "}
        Click me for Rengoku
      </button>

      <text.Provider value={valu}>
        <Child1 />
      </text.Provider>
    </>
  );
}
