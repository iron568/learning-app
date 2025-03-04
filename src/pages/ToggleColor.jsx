import { useState } from "react";
import { Button } from "react-bootstrap";

export function ToggleColor() {
  const [color, setColor] = useState("blue");

  function onToggleColor() {
    if (color == "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }

  return (
    <div className="border p-3">
      <h3>Switch Color</h3>
      <div style={{ backgroundColor: color }} className="color-box"></div>
      <Button className="mt-4" onClick={onToggleColor}>
        Toggle Color
      </Button>
    </div>
  );
}
