import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: import.meta.env.job_portal_web_app,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
