// ChildWithCallback.jsx
import React, { useRef } from "react";

const ChildWithCallback = React.memo(({ onIncrement }) => {
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  return (
    <div>
      <p>Child With useCallback Render Count: {childRenderCount.current}</p>
      <button onClick={onIncrement}>
        Increment from Child With useCallback
      </button>
    </div>
  );
});

export default ChildWithCallback;
