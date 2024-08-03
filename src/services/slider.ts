import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getSliderList(requestParams: any) {
  return axios.get(`${API_URL}/slider`, requestParams).then((res: any) => {
    return res.data.data;
  });
}