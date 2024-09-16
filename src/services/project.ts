import { fetchNoStore } from "@/utils/common";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {
  // return axios.get(`${API_URL}/projects`).then((res: any) => {
  //   return res.data.data;
  // });
  return await fetchNoStore(`${API_URL}/projects`)
}

export async function getProjectBySlug(slug: string) {
  // return axios.get(`${API_URL}/projects/${slug}`).then((res: any) => {
  //   return res.data.data;
  // });
  return await fetchNoStore(`${API_URL}/projects/${slug}`)
}

export function getProjectSlug() {
  return axios.get(`${API_URL}/projects/slug`).then((res: any) => {
    return res.data.data;
  });
}