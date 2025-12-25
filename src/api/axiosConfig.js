import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/rest/customer",
});

export default api;