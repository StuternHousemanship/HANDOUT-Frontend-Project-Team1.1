import axios from "axios";

export const handoutJsonApi = axios.create({
  // baseURL: "http://localhost:3004/",
  baseURL: "https://handout-stutern.web.app",
  headers: {
    "Content-Type": "application/json",
  },
});
export default handoutJsonApi;
