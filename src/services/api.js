import axios from "axios";

const api = axios.create({
  baseURL: "https://job-portal-fl7xln632-alamincse2003s-projects.vercel.app",
  // baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
