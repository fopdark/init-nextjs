import { API_URL } from "@/constants/Common";

export const getImageURL = (imageUrl: string) => {
  return `${API_URL}/${imageUrl}`;
};
