import { useState } from "react";
import { Button } from "react-bootstrap";

export function List() {
  //   let items = ["item", "item", "item", "item"];

  const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"]);

  function onAddItem() {
    const newItem = `item ${items.length + 1}`;
    const newItems = [...items, newItem];
    setItems(newItems);
    // items = [...items, "item6"];
    // console.log(newItems);
  }

  console.log(items, "my items");

  return (
    <div>
      <div>Items Count: {items.length}</div>
      <ul>
        {items.map(function (item) {
          return <li key={item}>{item}</li>;
        })}
        {/* <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li> */}
      </ul>
      <Button onClick={onAddItem}>Add Item</Button>
    </div>
  );
}
