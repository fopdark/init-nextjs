import { fetchNoStore } from "@/utils/common";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAdvise(requestParams: any) {
  return await fetchNoStore(`${API_URL}/advise`)
}