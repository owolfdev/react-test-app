"use client";
import React, { useState, useEffect, useRef } from "react";

function UseStateTest() {
  const [state, setState] = useState(1);
  const count = useRef(1);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Functionality goes here
    console.log(count);
  }, [count]);

  const doSomething = () => {
    setState(state + 1);
    count.current = count.current + 1;
    console.log(count.current);
  };

  return (
    <div>
      <button type="button" onClick={doSomething}>
        Click Me
      </button>
      <div>State: {state}</div>
      <div>Ref: {count.current}</div>
    </div>
  );
}

export default UseStateTest;
