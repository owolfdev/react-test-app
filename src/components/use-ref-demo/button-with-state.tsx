"use client";
import React, { useState, useEffect } from "react";

function expensiveComputation() {
  console.time("Expensive Computation (useState)");
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  console.timeEnd("Expensive Computation (useState)");
  return sum;
}

export default function ButtonWithState() {
  const [clickCount, setClickCount] = useState(0);
  const [renders, setRenders] = useState(0);

  const expensiveResult = expensiveComputation(); // Perform computation every render

  useEffect(() => {
    console.time("State Component Render");
    return () => console.timeEnd("State Component Render"); // Ensure timer ends after each render
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setRenders((r) => r + 1);
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="text-black p-2 border"
      >
        Button with useState
      </button>
      <p>Button clicked: {clickCount} times</p>
      <p>Renders: {renders}</p>
      <p>Expensive result: {expensiveResult}</p>
    </div>
  );
}
