import { InfoObject } from "./components/info-object";
import {
  DisplayInfo,
  GreetingCard,
  Hello,
  World,
} from "./components/hello-world";
import { MapLearn, MapLearnObjects } from "./components/map-data";
import { InfoObjArray } from "./components/object-array";
import { KeeValue } from "./components/find-object-value";
import { LoginAccount } from "./components/Login-acc";
import { Singin } from "./components/Sing-in";
import { StudentRegistration } from "./components/student-registration";

function App() {
  let shaktiInfo = {
    name: "Shakti",
    age: 22,
    gender: "Male",
    yearOfBirth: 2002,
  };

  return (
    <div className="p-3">
      {/* <GreetingCard name="Shakti Sahu" />

      <GreetingCard name="Ritesh Sahu" />

      <DisplayInfo data={shaktiInfo} /> */}

      {/* <div>Name: {shaktiInfo.name}</div>
      <div>Age: {shaktiInfo.age}</div>
      <div>Gender: {shaktiInfo.gender}</div>
      <div>Year of Birth: {shaktiInfo.yearOfBirth}</div> */}

      <StudentRegistration />

      {/* <LoginAccount /> */}
      {/* <Singin /> */}

      {/* <Hello />
      <World />

      <InfoObject />

      <MapLearn />
      <MapLearnObjects />

      <InfoObjArray />

      <KeeValue /> */}
    </div>
  );
}

export default App;
