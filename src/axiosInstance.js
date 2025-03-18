import axios from "axios";
const apiUrl=import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiUrl, // Your API URL
    headers:{ "Content-Type": "application/json" }
  });

  export default api;