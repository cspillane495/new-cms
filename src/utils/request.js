import axios from "axios";
import { getToken } from "./authority";
import def from "../defaultSettings";
const ROOT = `${def.ROOT_URL}/api/v1`;

export default function request(url, option) {
  const options = {
    baseURL: ROOT,
    ...option,
  };

  const headers = {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  };

  const newOptions = {
    ...options,
    ...headers,
  };

  return axios(url, newOptions)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log("REQUEST ERR", err));
}
