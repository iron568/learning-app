import { Link, Route, Routes } from "react-router";
import { StudentRegistration } from "./pages/student-registration";
import { LoginAccount } from "./pages/Login-acc";
import { HomePage } from "./pages/HomePage";
import logo from "./assets/learn-logo.png";
import { DashboardContain } from "./pages/dashboard";

function App() {
  return (
    <div className="p-3">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Routes>
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/dashboard" element={<DashboardContain />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
