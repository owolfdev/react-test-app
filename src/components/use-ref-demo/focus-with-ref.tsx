"use client";
import React, { useRef, useEffect, useState } from "react";

function FocusWithRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setRenders((r) => r + 1);
  }, []);

  const handleFocus = () => {
    setRenders((r) => r + 1);
  };

  return (
    <div>
      <input
        className="text-black"
        ref={inputRef}
        type="text"
        placeholder="Focus with useRef"
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      <p>Renders: {renders}</p>
    </div>
  );
}

export default FocusWithRef;
