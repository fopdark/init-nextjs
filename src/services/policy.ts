import { API_URL } from "@/constants/Common";
import axios from "axios";

export function getPolicy() {
  return axios.get(`${API_URL}/policies`).then((res: any) => {
    return res.data.data;
  });
}

export function getPolicyBySlug(slug: string) {
  return axios.get(`${API_URL}/policies/${slug}`).then((res: any) => {
    return res.data.data;
  });
}
