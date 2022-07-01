import axios from "axios";

export const api = axios.create({
  baseURL: "https://evoluna-api.herokuapp.com/api",
  // baseURL: "http://localhost:8000/api",
});
