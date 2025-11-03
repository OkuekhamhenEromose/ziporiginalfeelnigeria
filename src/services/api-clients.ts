import axios from "axios";

export default axios.create({
  baseURL: "https://feelnigeriabackend-2.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
