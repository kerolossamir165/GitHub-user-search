import axios from "axios";

let api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;
