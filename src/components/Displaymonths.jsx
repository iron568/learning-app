import { useState } from "react";
import { Button } from "react-bootstrap";

export function DisplayMonths() {
  const [monthName, setMonthName] = useState("January");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function onClickMonth(month) {
    setMonthName(month);
  }

  return (
    <div>
      {/* <div>{monthName}</div>
      <div className="d-flex gap-2">
        <Button
          variant={monthName == "January" ? "warning" : "danger"}
          onClick={() => onClickMonth("January")}
        >
          1
        </Button>
        <Button
          variant={monthName == "February" ? "warning" : "danger"}
          onClick={() => onClickMonth("February")}
        >
          2
        </Button>
        <Button
          variant={monthName == "March" ? "warning" : "danger"}
          onClick={() => onClickMonth("March")}
        >
          3
        </Button>
      </div> */}

      <div
        style={{
          color: "rgb(6, 248, 167)",
          fontWeight: "bolder",
          fontSize: "30px",
          border: "5px solid rgb(6, 248, 167)",

          maxWidth: "200px",
          textAlign: "center",
        }}
      >
        {monthName}
      </div>

      <div className="d-flex gap-3 mt-3">
        {months.map(function (item, index) {
          return (
            <Button
              variant={monthName == item ? "danger" : "outline-info"}
              key={item}
              onClick={() => onClickMonth(item)}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
