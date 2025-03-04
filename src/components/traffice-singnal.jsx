import { Button } from "react-bootstrap";
import { useState } from "react";

export function TrafficeLight() {
  const [color, setColor] = useState("white");

  function changetraffice() {
    if (color == "hsl(0, 100%, 50%)") {
      setColor("hsl(243, 66%, 50%)");
    } else if (color == "hsl(243, 66%, 50%)") {
      setColor("orange");
    } else {
      setColor("hsl(0, 100%, 50%)");
    }
  }

  return (
    <div className="border p-3">
      <h3>Change Traffic</h3>
      <div style={{ backgroundColor: color }} className="color-box"></div>
      <Button className="mt-3" onClick={changetraffice}>
        Color changer
      </Button>
    </div>
  );
}
