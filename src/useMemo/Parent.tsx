import { useMemo, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const calculate = () => {
    for (let index = 1; index <= 100; index++) {
      console.log("IN executing");
      if (index == 100) {
        const val = {
          name: "Akash",
          age: 10,
          val: value,
        };
        return val;
        // return "value which i want to share that is the result of a very long executing function";
        // i can return whatever i want but i need to return something. so that i can use useMemo
      }
    }
  };
  // const s = calculate();
  const s = useMemo(calculate, [value]);
  // if we mention a state whenever this state changes, our function will get executed.
  // }, [salary, value]); if we need to work on two or more states then in the dependencies we need to give two or more
  // },[]); // if we give empty array it is going to execute only once during the initialization and it wont be exected again. it wont be helpful in many cases.

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment the count</button>
        <h1>{s?.val}</h1>
        <button onClick={() => setValue(value + 5)}>Increment the value</button>
      </div>
    </>
  );
}
export default Parent;

// use memo is used to memoise a value. if there is a fucntion which executes very long time but renders everytime
// it will slow the performance of that function.

// so if we want to execute the function only when the values changes and we dont want to re render
// then we can use usememo.

// unlike usecallback it used to return a memoised function usememo used to return just a value.
