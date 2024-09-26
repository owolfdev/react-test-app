// ChildWithoutCallback.jsx
import React, { useRef } from "react";

const ChildWithoutCallback = React.memo(({ onIncrement }) => {
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  return (
    <div>
      <p>Child Without useCallback Render Count: {childRenderCount.current}</p>
      <button onClick={onIncrement}>
        Increment from Child Without useCallback
      </button>
    </div>
  );
});

export default ChildWithoutCallback;
