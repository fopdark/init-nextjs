import { fetchNoStore } from "@/utils/common";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAbout(requestParams: any) {
  return await fetchNoStore(`${API_URL}/about`)
  // return axios.get(`${API_URL}/about`, requestParams).then((res: any) => {
  //   return res.data.data;
  // });
}