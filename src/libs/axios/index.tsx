import axios from "axios";
import { API_URL } from "@config/environment";
import { setupInterceptors } from "./interceptors";

export const api = axios.create({
  baseURL: API_URL,
});

export const api_test = axios.create({
  baseURL: "https://content.supervia.com.br",
});

setupInterceptors(api);
