import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function LoginAccount() {
  return (
    <div className="login-page-container">
      <div className="login-page-heading">Login to your account</div>
      <div className="email-container">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </div>

      <div className="password-container">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </div>

      <div className="button-container">
        <Button variant="primary">Login</Button>
      </div>
    </div>
  );
}
