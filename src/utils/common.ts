import { API_URL } from "@/constants/Common";

export const getImageURL = (imageUrl: string) => {
  return `${API_URL}/${imageUrl}`;
};

export const fetchNoStore = async (url: string) => {
  let res = await fetch(url, { cache: "no-store" });
  let object = await res.json();
  return object?.data;
};
