import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;