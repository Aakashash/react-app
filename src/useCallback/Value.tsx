import React from "react";

function Value(props: any) {
  console.log("Value Rendered");
  return (
    <>
      <h2>
        {props.text} of Akash is {props.value}
      </h2>
    </>
  );
}

export default React.memo(Value);
