import { useState } from "react";
import { Button } from "react-bootstrap";

// component that display week name on clicking a button
export function DisplayWeek() {
  const [weekName, setWeekName] = useState("Monday");

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function onClickWeek(week) {
    setWeekName(week);
  }

  return (
    <div>
      <div>{weekName}</div>
      <div className="d-flex gap-2">
        <Button
          variant={weekName == "Monday" ? "danger" : "primary"}
          onClick={() => onClickWeek("Monday")}
        >
          1
        </Button>
        <Button
          variant={weekName == "Tuesday" ? "danger" : "primary"}
          onClick={() => onClickWeek("Tuesday")}
        >
          2
        </Button>
        <Button
          variant={weekName == "Wednesday" ? "danger" : "primary"}
          onClick={() => onClickWeek("Wednesday")}
        >
          3
        </Button>
      </div>

      {/* <div className="d-flex gap-2">
        {weekDays.map(function (item, index) {
          return (
            <Button
              variant={weekName == item ? "danger" : "primary"}
              key={item}
              onClick={() => onClickWeek(item)}
            >
              {index + 1}
            </Button>
          );
        })}
      </div> */}
    </div>
  );
}
