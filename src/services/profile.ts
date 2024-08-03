import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getContract() {
  return axios.get(`${API_URL}/contract`).then((res: any) => {
    return res.data.data;
  });
}