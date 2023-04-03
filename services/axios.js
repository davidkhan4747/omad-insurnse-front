import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIСlient(ctx) {
  const { "nextauth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://admin.omadsugurta.uz/api/",
  });

  api.interceptors.request.use((config) => {
    return config;
  });
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
