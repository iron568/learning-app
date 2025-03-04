import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export function HideShow() {
  const [show, updateShow] = useState(true);

  function onToggleVisibility() {
    if (show == true) {
      updateShow(false);
    } else {
      updateShow(true);
    }
  }

  return (
    <div>
      {/* <Alert variant={"primary"}>This is my alert—check it out!</Alert> */}
      {show == true && (
        <div>
          <Alert>This is a alert—check it out!</Alert>
          <div>My Alert2</div>
        </div>
      )}
      <Button onClick={onToggleVisibility}>Toggle Alert Visibility</Button>
    </div>
  );
}
