import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MidLoginPage from "./pages/midLogin";
import LandingPage from "./pages/Landing";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/midLogin" element={<MidLoginPage />} />
        <Route path="/Landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
