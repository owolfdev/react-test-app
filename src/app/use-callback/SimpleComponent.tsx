"use client";
import React, { useState, useCallback } from "react";

function SimpleComponent() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  console.log("SimpleComponent re-rendered");

  return (
    <input
      className="text-black"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Type here..."
    />
  );
}

export default SimpleComponent;
