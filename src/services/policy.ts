import { API_URL } from "@/constants/Common";
import { fetchNoStore } from "@/utils/common";
import axios from "axios";

export async function getPolicy() {
  return await fetchNoStore(`${API_URL}/policies`)
  // return axios.get(`${API_URL}/policies`).then((res: any) => {
  //   return res.data.data;
  // });
}

export async function getPolicyBySlug(slug: string) {
  return await fetchNoStore(`${API_URL}/policies/${slug}`)
  // return axios.get(`${API_URL}/policies/${slug}`).then((res: any) => {
  //   return res.data.data;
  // });
}
