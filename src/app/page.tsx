import React from "react";
import FocusWithState from "@/components/use-ref-demo/focus-with-state";
import FocusWithRef from "@/components/use-ref-demo/focus-with-ref";
import ButtonWithState from "@/components/use-ref-demo/button-with-state";
import ButtonWithRef from "@/components/use-ref-demo/button-with-ref";
import InputWithState from "@/components/use-ref-demo/input-with-state";
import InputWithRef from "@/components/use-ref-demo/input-with-ref";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen p-24 gap-8">
        <FocusWithState />
        <FocusWithRef />
        <ButtonWithState />
        <ButtonWithRef />
        <InputWithState />
        <InputWithRef />
      </div>
    </div>
  );
}

export default App;
