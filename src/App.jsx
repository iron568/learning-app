import { InfoObject } from "./components/info-object";
import { Hello, World } from "./components/hello-world";
import { MapLearn, MapLearnObjects } from "./components/map-data";
import { InfoObjArray } from "./components/object-array";
import { KeeValue } from "./components/find-object-value";

function App() {
  let shaktiInfo = {
    name: "Shakti",
    age: 22,
    gender: "Male",
    yearOfBirth: 2002,
  };

  return (
    <div>
      {/* <div>Name: {shaktiInfo.name}</div>
      <div>Age: {shaktiInfo.age}</div>
      <div>Gender: {shaktiInfo.gender}</div>
      <div>Year of Birth: {shaktiInfo.yearOfBirth}</div> */}

      <Hello />
      <World />

      <InfoObject />

      <MapLearn />
      <MapLearnObjects />

      <InfoObjArray />

      <KeeValue />
    </div>
  );
}

export default App;
