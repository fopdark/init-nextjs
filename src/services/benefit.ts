import { API_URL } from "@/constants/Common";
import { fetchNoStore } from "@/utils/common";

export async function getBenefit() {
  return await fetchNoStore(`${API_URL}/benefits`);
}
