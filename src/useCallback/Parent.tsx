import { useState, useCallback } from "react";
import Value from "./Value";
import Button from "./Button";
import Title from "./Title";

function Parent() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  console.log("Parent Rendered");
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]); // if we mention a state whenever this state changes, our function will get executed.
  // }, [salary, value]); if we need to work on two or more states then in the dependencies we need to give two or more
  // },[]); // if we give empty array it is going to execute only once after the initialization and it wont be exected again. it wont be helpful in many cases.

  // here React.memo is very important that is what does the main task.
  return (
    <div>
      <Title />
      <Value text="Age" value={age} />
      <Button action={incrementAge} text="Increase the age" />
      <br></br>
      <Value text="Salary" value={salary} />
      <Button action={incrementSalary} text="Increase Salary" />
    </div>
  );
}

export default Parent;
