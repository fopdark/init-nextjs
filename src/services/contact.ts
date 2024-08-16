import { API_URL } from "@/constants/Common";
import axios from "axios";

export function getContact() {
  return axios.get(`${API_URL}/contact`).then((res: any) => {
    return res.data.data;
  });
}