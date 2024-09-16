import { API_URL } from "@/constants/Common";
import { fetchNoStore } from "@/utils/common";
import axios from "axios";

export async function getContact() {
  return await fetchNoStore(`${API_URL}/contract`)
  // return axios.get(`${API_URL}/contact`).then((res: any) => {
  //   return res.data.data;
  // });
}