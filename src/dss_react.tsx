import React, { useState } from "react";
import "./dss.css";

function Form(props: any) {
  const [focused, setFocused] = useState(false);
  //console.log(XXX);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label>{props.label}</label>
      <input
        {...props}
        onChange={props.onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{props.errormessage}</span>
    </div>
  );
}

export default Form;
