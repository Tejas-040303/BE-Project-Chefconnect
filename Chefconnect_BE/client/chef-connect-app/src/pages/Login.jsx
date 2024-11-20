import React, { useState } from "react";
import { login } from "./authApi";

const Login = () => {
  const [credentials, setCredentials] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      alert(response.data.message);
      window.location.href = "/"; // Redirects the user
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="emailOrUsername"
          placeholder="Email or Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
