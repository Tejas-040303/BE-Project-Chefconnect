import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/auth" });

API.interceptors.request.use((req) => {
  console.log("Sending Request:", req);
  return req;
});

export const signup = (userData) => API.post("/signup", userData);
export const login = (credentials) => API.post("/login", credentials);
