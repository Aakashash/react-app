import { useEffect, useState } from "react";

export function useFormInput() {
  useEffect(() => {
    console.log(" Im execting");
  });

  const [value, setValue] = useState("");

  const handleclick = (e: any) => {
    setValue(e.target.value);
  };

  const data = {
    value: value,
    onChange: handleclick,
  };
  return data;
}

export function sample() {
  useEffect(() => {
    console.log("IM execting heeh");
  });
}
