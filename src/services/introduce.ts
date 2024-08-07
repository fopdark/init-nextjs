import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getAbout(requestParams: any) {
  return axios.get(`${API_URL}/about`, requestParams).then((res: any) => {
    return res.data.data;
  });
}