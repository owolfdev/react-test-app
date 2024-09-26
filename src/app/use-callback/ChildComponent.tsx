// ChildComponent.jsx
import React, { useRef } from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  // Keep track of how many times the child has rendered
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  return (
    <div>
      <p>Child Render Count: {childRenderCount.current}</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default ChildComponent;
