"use client";

import React, { useRef, useState, useEffect } from "react";

function UseStateExample() {
  const [clickCount, setClickCount] = useState(0);
  const [renders, setRenders] = useState(1);

  useEffect(() => {
    // Increment the render count on each render
    setRenders((prev) => prev + 1);
  }, []);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="border p-4">
      <h2>useState Example</h2>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <p>Click count (useState): {clickCount}</p>
      <p>Renders: {renders}</p>
    </div>
  );
}

function UseRefExample() {
  const clickCountRef = useRef(0); // Using useRef to store click count
  const [renders, setRenders] = useState(1);

  useEffect(() => {
    // Increment the render count on each render
    setRenders((prev) => prev + 1);
  }, []);

  const handleClick = () => {
    clickCountRef.current += 1; // Increment click count, but no re-render
    console.log("Click count (useRef):", clickCountRef.current);
  };

  return (
    <div className="border p-4">
      <h2>useRef Example</h2>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <p>Click count (useRef): (check console)</p>
      <p>Renders: {renders}</p>
    </div>
  );
}

export default function UseRefVsUseState() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <UseStateExample />
      <UseRefExample />
    </div>
  );
}
