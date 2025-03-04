import { useState } from "react";
import { Button } from "react-bootstrap";

export function NmaeSelector() {
  const [humanName, setName] = useState("Shakti Sahu");

  const names = [
    "Shakti",
    "Vivaan",
    "Anaya",
    "Ishaan",
    "Diya",
    "Aryan",
    "Kabir",
    "Riya",
    "Advait",
    "Meera",
    "Krishna",
    "Tara",
    "Rohan",
    "Saanvi",
    "Neel",
    "Arjun",
    "Jiya",
    "Yash",
    "Sanya",
    "Kunal",
  ];

  function onClickName(name) {
    setName(name);
  }

  return (
    <div>
      {humanName}
      <div className="d-flex gap-3 mt-3">
        {names.map(function (item, index) {
          return (
            <Button
              variant={humanName == item ? "danger" : "outline-info"}
              key={item}
              onClick={() => onClickName(item)}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
