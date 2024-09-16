import { fetchNoStore } from "@/utils/common";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSliderList(requestParams: any) {
  return await fetchNoStore(`${API_URL}/slider`)
  // return axios.get(`${API_URL}/slider`, requestParams).then((res: any) => {
  //   return res.data.data;
  // });
}