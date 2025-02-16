import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { cities } from "../lib/cites";
import { state } from "../lib/state";
import { uniq } from "lodash";
import { hobbies } from "../lib/hobbies";

export function StudentRegistration() {
  let uniqStates = uniq(state);

  return (
    <div className="stundent-form-container">
      <div className="register-form">STUDENT REGISTRATION FORM</div>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={12}>
          <Form.Control type="name" placeholder="Full Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Col sm={12}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Col sm={13}>
          <Form.Control type="Contact No." placeholder="contact No." />
        </Col>
      </Form.Group>
      <Form.Select aria-label="Default select example">
        <option>Select your city</option>

        {cities.map(function (citiesItem, index) {
          return (
            <option
              key={citiesItem.name}
              value={index + 1}
              className="cities-names"
            >
              {citiesItem.name}
            </option>
          );
        })}
      </Form.Select>
      <br />
      <Form.Select aria-label="Default select example">
        <option>Select your state </option>
        {uniqStates.map(function (stateItem, index) {
          return (
            <option key={stateItem} value={index + 1}>
              {stateItem}
            </option>
          );
        })}
      </Form.Select>
      <br />
      <Form.Select aria-label="Default select example">
        <option>Select Your Gender:</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
      </Form.Select>
      <br />
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Col sm={12}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Select aria-label="Default select example">
        <option>Select Your hobbies:</option>
        {hobbies.map(function (hobbiesItem, index) {
          return (
            <option key={hobbiesItem} value={index + 1}>
              {hobbiesItem}
            </option>
          );
        })}
      </Form.Select>
      <Button variant="primary" style={{ width: "100%" }}>
        Block level button
      </Button>
    </div>
  );
}
