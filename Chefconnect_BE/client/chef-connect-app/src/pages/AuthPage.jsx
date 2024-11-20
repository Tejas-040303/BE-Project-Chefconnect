import React, { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Switch to Login" : "Switch to Signup"}
      </button>
      {isSignup ? <Signup /> : <Login />}
    </div>
  );
};

export default AuthPage;
