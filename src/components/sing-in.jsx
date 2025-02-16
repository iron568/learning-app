import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function Singin() {
  return (
    <div className="Horizontal-form">
      <div className="sing-in">Sing In Google Account</div>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Enter Your Name:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Enter Your Age:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter Age" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Enter Your Number:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" placeholder="Enter Number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Enter Your Date of Birth:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" />
          </Col>
        </Form.Group>
        <Col sm={10}>
          <Form.Select aria-label="Default select example">
            <option>Select Your Gender:</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </Form.Select>
        </Col>
        <Form.Group as={Row} className="button-tag">
          <Col sm={{ span: 10, offset: 8 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
