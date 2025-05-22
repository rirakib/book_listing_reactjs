import axios from "axios";
import { BASEURL } from "./Constants";

const api = axios.create({
  baseURL: `${BASEURL}/api`,
  withCredentials: true,
});

api.interceptors.request.use(config => {

  const token = JSON.parse(localStorage.getItem("user"));

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }


  return config;
});

export default api;
