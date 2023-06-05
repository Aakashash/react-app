import React from "react";

function Name(props: any) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.company}</h3>
    </div>
  );
}

export default Name;
