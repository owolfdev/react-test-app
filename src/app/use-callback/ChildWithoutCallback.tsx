import React, { useRef } from "react";

// Define the prop types
interface ChildWithoutCallbackProps {
  onIncrement: () => void;
}

const ChildWithoutCallback = React.memo(
  ({ onIncrement }: ChildWithoutCallbackProps) => {
    const childRenderCount = useRef(0);
    childRenderCount.current += 1;

    return (
      <div>
        <p>
          Child Without useCallback Render Count: {childRenderCount.current}
        </p>
        <button
          onClick={onIncrement}
          type="button"
          className="border rounded py-0 px-1 mt-1"
        >
          Increment from Child Without useCallback
        </button>
      </div>
    );
  }
);

ChildWithoutCallback.displayName = "ChildWithoutCallback";

export default ChildWithoutCallback;
