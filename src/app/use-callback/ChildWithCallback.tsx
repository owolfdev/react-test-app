import React, { useRef } from "react";

// Define the props type
interface ChildWithCallbackProps {
  onIncrement: () => void;
}

const ChildWithCallback = React.memo(
  ({ onIncrement }: ChildWithCallbackProps) => {
    const childRenderCount = useRef(0);
    childRenderCount.current += 1;

    return (
      <div>
        <p>Child With useCallback Render Count: {childRenderCount.current}</p>
        <button
          onClick={onIncrement}
          type="button"
          className="border rounded py-0 px-1 mt-1"
        >
          Increment from Child With useCallback
        </button>
      </div>
    );
  }
);

// Set display name for better debugging
ChildWithCallback.displayName = "ChildWithCallback";

export default ChildWithCallback;
