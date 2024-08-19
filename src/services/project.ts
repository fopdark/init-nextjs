import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getProjects() {
  return axios.get(`${API_URL}/projects`).then((res: any) => {
    return res.data.data;
  });
}

export function getProjectBySlug(slug: string) {
  return axios.get(`${API_URL}/projects/${slug}`).then((res: any) => {
    return res.data.data;
  });
}

export function getProjectSlug() {
  return axios.get(`${API_URL}/projects/slug`).then((res: any) => {
    return res.data.data;
  });
}