import { useState } from "react";
import { sample, useFormInput } from "./useForminput";

// it is just like a function
// you should not use JSX inside the custom hook. just return any value or perform the actions and dont return anything.
export default function Parent() {
  const firstname = useFormInput();
  const lastname = useFormInput();
  sample();
  return (
    <>
      <h1>Hello world!!!</h1>
      <input {...firstname} />
      <input {...lastname} />

      <h1>
        Good morning {firstname.value} {lastname.value}
      </h1>
    </>
  );
}
