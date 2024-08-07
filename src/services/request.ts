import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function createRequest(body: any) {
  return axios.post(`${API_URL}/requests`, body).then((res: any) => {
    return res.data.data;
  });
}
