import { fetchNoStore } from "@/utils/common";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServices() {
  return await fetchNoStore(`${API_URL}/services`)
  // return axios
  //   .get(`${API_URL}/services`, {  cache: 123 })
  //   .then((res: any) => {
  //     return res.data.data;
  //   });
}

// export function getServiceBySlug(param: any) {
//   return axios.get(`${API_URL}/services`, param).then((res: any) => {
//     return res.data.data;
//   });
// }

export function getServicesByParentSlug(param: any) {
  return axios
    .get(`${API_URL}/services`, { params: param })
    .then((res: any) => {
      return res.data.data;
    });
}

export async function getServiceSlug(slug: string) {
  return await fetchNoStore(`${API_URL}/services/${slug}`)
  // return axios.get(`${API_URL}/services/${slug}`).then((res: any) => {
  //   return res.data.data;
  // });
}

export async function getServiceSlugMapping() {
  return await fetchNoStore(`${API_URL}/services/slug-mapping`)
}