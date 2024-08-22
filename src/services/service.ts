import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getServices() {
  return axios.get(`${API_URL}/services`).then((res: any) => {
    return res.data.data;
  });
}

// export function getServiceBySlug(param: any) {
//   return axios.get(`${API_URL}/services`, param).then((res: any) => {
//     return res.data.data;
//   });
// }

export function getServicesByParentSlug(param: any) {
  return axios.get(`${API_URL}/services`, param).then((res: any) => {
    return res.data.data;
  });
}

export function getServiceSlug(slug: string) {
  return axios.get(`${API_URL}/services/${slug}`).then((res: any) => {
    return res.data.data;
  });
}