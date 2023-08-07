import React, { useState } from "react";
import "./dss.css";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Form(props: any) {
  const [focused, setFocused] = useState(false);
  //console.log(XXX);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label className="label">{props.label}</label> {"  "}
      <input
        className="input"
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
