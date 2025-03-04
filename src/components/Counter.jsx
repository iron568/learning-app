import { useState } from "react";
import { Badge, Button } from "react-bootstrap";

export function Counter() {
  // let count = 0;

  const [count, setMyCount] = useState(0);

  function onIncrement() {
    console.log("inc");
    // count++;
    setMyCount(count + 1);
  }

  function onDecrement() {
    console.log("dnc");
    // count--;
    setMyCount(count - 1);
  }

  function onReset() {
    setMyCount(0);
  }

  return (
    <div>
      <Badge bg="secondary">{count}</Badge>
      <div className="mt-3 gap-3 d-flex">
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
