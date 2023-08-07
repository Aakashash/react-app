import React from "react";

function Button(props: any) {
  console.log("Button Rendered");
  return (
    <>
      <div>
        <button style={{ color: "red" }} onClick={props.action}>
          {" "}
          {props.text}{" "}
        </button>
      </div>
    </>
  );
}

export default React.memo(Button);
