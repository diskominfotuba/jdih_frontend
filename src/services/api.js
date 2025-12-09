//import axios
import axios from "axios";

const Api = axios.create({
  //set endpoint API
  baseURL: "http://localhost:8000/api",
  // baseURL: 'https://service-jdih.tulangbawangkab.go.id/api',

  //set header axios
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default Api;
