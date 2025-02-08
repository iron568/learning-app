export function MapLearn() {
  let number = [1, 2, 3, 4, 5];

  return (
    <div className="map-learn">
      <div className="map-learn-heading">Numbers:</div>
      <div className="map-learn-list">
        {number.map(function (item) {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export function MapLearnObjects() {
  let objects = [
    {
      name: "Shakti",
      age: 27,
    },
    {
      name: "Ritesh",
      age: 22,
    },
  ];

  return (
    <div className="map-learn">
      <div className="map-learn-heading">Objects:</div>
      <div className="map-learn-list">
        {objects.map(function (item) {
          return (
            <div key={item}>
              <div>Name: {item.name}</div>
              <div>Age: {item.age}</div>
              <hr />
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
