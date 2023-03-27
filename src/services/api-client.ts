import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "93adbdf98df94f85bda3cf83ffec0849",
  },
});
