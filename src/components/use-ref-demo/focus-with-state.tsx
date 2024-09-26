"use client";
import React, { useState, useEffect } from "react";

function FocusWithState() {
  const [inputEl, setInputEl] = useState<HTMLInputElement | null>(null);
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    if (inputEl) {
      inputEl.focus();
    }
    setRenders((r) => r + 1);
  }, [inputEl]);

  const handleFocus = () => {
    setRenders((r) => r + 1);
  };

  return (
    <div>
      <input
        className="text-black"
        ref={setInputEl}
        type="text"
        placeholder="Focus with state"
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      <p>Renders: {renders}</p>
    </div>
  );
}

export default FocusWithState;
