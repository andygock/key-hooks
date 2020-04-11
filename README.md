# key-hooks

React hooks for keypress handling.

## Example usage

<https://codesandbox.io/s/key-hooks-example-ko2cn>

```js
import React from "react";
import { useKeyPressed } from "key-hooks";
import { useKeyToggle } from "key-hooks";

export default function App() {
  const [keyDown] = useKeyPressed("Shift"); // param array ["Shift"] also works
  const [keyState] = useKeyToggle(["a", "b", "c"]); // multiple keys
  return (
    <div className="App">
      <h1>key-hooks example</h1>
      <p>Shift key is: {keyDown ? "DOWN" : "UP"}</p>
      <p>Toggle state with a, b, c key: {keyState ? "ON" : "OFF"}</p>
    </div>
  );
}
```

## Reference

- [Key Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
