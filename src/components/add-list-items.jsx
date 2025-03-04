import { useState } from "react";
import { Button } from "react-bootstrap";

export function IronList() {
  const [irons, setIron] = useState([
    { name: "shakti", color: "red" },
    { name: "hero", color: "red" },
    { name: "mogan", color: "red" },
  ]);

  function onAddDownSiteIron() {
    const addMoreIron = { name: `iron`, color: "black" };
    const addMoreIrons = [...irons, addMoreIron];

    setIron(addMoreIrons);
  }

  function onAddUpSiteIron() {
    const addMoreIron = { name: `iron`, color: "orange" };
    const addMoreIrons = [addMoreIron, ...irons];
    setIron(addMoreIrons);
  }

  return (
    <div style={{ color: "red", fontSize: "30px" }}>
      <div>count Iron: {irons.length}</div>

      <ul>
        {irons.map(function (item, index) {
          return (
            <li style={{ color: item.color }} key={item.name}>
              {item.name} {index + 1}
            </li>
          );
        })}
      </ul>
      <Button style={{ marginRight: "15px" }} onClick={onAddDownSiteIron}>
        Add Down Site Iron
      </Button>
      <Button onClick={onAddUpSiteIron}>Add Up Site Iron</Button>
    </div>
  );
}
