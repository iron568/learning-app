import { Info } from "./Info";
import { Spinner, Alert } from "react-bootstrap";

export function Hello() {
  return (
    <div className="p-3">
      <Spinner variant="success" animation="grow" />

      <div>Hello 1</div>

      <Alert>This is a alert—check it out!</Alert>
      <Info />
    </div>
  );
}

export function World() {
  return (
    <div>
      <div>World 1</div>
      <Info />
    </div>
  );
}

export function GreetingCard(props) {
  return <div>Hello, {props.name}</div>;
}

export function DisplayInfo(props) {
  return (
    <div>
      Name: {props.data.name}
      <br />
      Age: {props.data.age}
      <br />
      Gender: {props.data.gender}
      <br />
      Yearofbirth: {props.data.yearOfBirth}
      <br />
    </div>
  );
}
