import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

export function LoginAccount() {
  let navigate = useNavigate();

  function onLogin() {
    console.log("login button clicked");
    navigate("/dashboard");
  }

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
        <Button onClick={onLogin} variant="primary">
          Login
        </Button>
      </div>
      <div>
        <Link to="/register">Creat new account</Link>

        {/* <a href="/register">Creat new account</a> */}
      </div>
    </div>
  );
}
