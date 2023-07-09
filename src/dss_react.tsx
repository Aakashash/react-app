import React from "react";
import "./dss.css";

function Form(props: any) {
  //console.log(XXX);

  return (
    <div>
      <label>{props.label}</label>
      <input {...props} onChange={props.onChange} />
      <span>{props.errormessage}</span>
    </div>
  );
}

export default Form;
