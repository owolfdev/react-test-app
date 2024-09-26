"use client";
// ParentComponent.jsx
import React, { useState, useCallback, useRef } from "react";
import ChildWithCallback from "./ChildWithCallback";
import ChildWithoutCallback from "./ChildWithoutCallback";

function ParentComponent() {
  const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  // Keep track of how many times the parent has rendered
  const parentRenderCount = useRef(0);
  parentRenderCount.current += 1;

  // Memoized increment function
  const incrementWithCallback = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // Regular increment function (not memoized)
  const incrementWithoutCallback = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Count: {count}</h1>
      <p>Parent Render Count: {parentRenderCount.current}</p>

      <h2 className="text-2xl font-bold">Child With useCallback:</h2>
      <ChildWithCallback onIncrement={incrementWithCallback} />

      <h2 className="text-2xl font-bold">Child Without useCallback:</h2>
      <ChildWithoutCallback onIncrement={incrementWithoutCallback} />

      <div>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={() => setCount((c) => c + 1)}>
          Increment from Parent
        </button>
      </div>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Change me to see child re-render"
      /> */}
    </div>
  );
}

export default ParentComponent;
