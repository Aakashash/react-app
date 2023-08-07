import React from "react";

function Title() {
  console.log("Title Rendered");
  return (
    <>
      <h1>We are learning useCallback function</h1>
    </>
  );
}

export default React.memo(Title);
