"use client";
import React, { useRef, useEffect, useState } from "react";

export default function InputWithRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input on mount
    }
    setRenders((r) => r + 1); // Track renders
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus with useRef" />
      <p>Renders: {renders}</p>
    </div>
  );
}
