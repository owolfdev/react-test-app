"use client";
import React, { useState, useEffect } from "react";

export default function InputWithState() {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus(); // Focus the input on mount
    }
    setRenders((r) => r + 1); // Track renders
  }, [inputRef]);

  return (
    <div>
      <input ref={setInputRef} type="text" placeholder="Focus with useState" />
      <p>Renders: {renders}</p>
    </div>
  );
}
