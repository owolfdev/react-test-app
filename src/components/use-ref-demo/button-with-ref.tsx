"use client";
import React, { useRef, useState, useEffect } from "react";

function expensiveComputation() {
  console.time("Expensive Computation (useRef)");
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  console.timeEnd("Expensive Computation (useRef)");
  return sum;
}

export default function ButtonWithRef() {
  const clickCountRef = useRef(0);
  const [clickCount, setClickCount] = useState(0);
  const [renders, setRenders] = useState(0);

  const expensiveResultRef = useRef(expensiveComputation()); // Compute once and store

  useEffect(() => {
    console.time("Ref Component Render");
    return () => console.timeEnd("Ref Component Render"); // Ensure timer ends after each render
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setRenders((r) => r + 1);
  }, [clickCount]);

  const handleClick = () => {
    clickCountRef.current += 1;
    setClickCount(clickCountRef.current);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="text-black p-2 border"
      >
        Button with useRef
      </button>
      <p>Button clicked: {clickCount} times</p>
      <p>Renders: {renders}</p>
      <p>Expensive result: {expensiveResultRef.current}</p>
    </div>
  );
}
