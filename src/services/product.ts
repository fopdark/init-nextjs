import { fetchNoStore } from "@/utils/common";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  // return axios.get(`${API_URL}/products`).then((res: any) => {
  //   return res.data.data;
  // });
  return await fetchNoStore(`${API_URL}/products`)
}

export async function getProductBySlug(slug: string) {
  // return axios.get(`${API_URL}/products/${slug}`).then((res: any) => {
  //   return res.data.data;
  // });
  return await fetchNoStore(`${API_URL}/products/${slug}`)
}