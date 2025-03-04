import { Link } from "react-router";

export function HomePage() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <div>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}
