import React, { useRef } from "react";

// Define the prop types
interface ChildComponentProps {
  onIncrement: () => void;
}

const ChildComponent = React.memo(({ onIncrement }: ChildComponentProps) => {
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

ChildComponent.displayName = "ChildComponent";

export default ChildComponent;
