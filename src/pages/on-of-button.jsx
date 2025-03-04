import { useState } from "react";
import { Button } from "react-bootstrap";

export function OnOf() {
  const [text, setText] = useState("off");

  function onChangeText() {
    if (text == "off") {
      setText("on");
    } else {
      setText("off");
    }
  }

  return (
    <div>
      <h3>{text}</h3>
      <Button onClick={onChangeText}>Button</Button>
    </div>
  );
}
