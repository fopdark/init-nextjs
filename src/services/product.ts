import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getProducts() {
  return axios.get(`${API_URL}/products`).then((res: any) => {
    return res.data.data;
  });
}

export function getProductBySlug(slug: string) {
  return axios.get(`${API_URL}/products/${slug}`).then((res: any) => {
    return res.data.data;
  });
}

export function getProductSlug() {
  return axios.get(`${API_URL}/products/slug`).then((res: any) => {
    return res.data.data;
  });
}