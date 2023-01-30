// import {
//   AxiosResponse,
//   AxiosError,
//   AxiosRequestConfig,
//   AxiosInstance,
// } from "axios";
// import auth from "@stores/useAuth";

// const onResponse = (response: AxiosResponse) => response;
// const onResponseError = (error: AxiosError): Promise<AxiosError> => {
//   return Promise.reject(error);
// };

// const onRequest = async (config: AxiosRequestConfig) => {
//   const { headers, url } = config;

//   const token = auth.getState().token;
//   const isAuthenticated = auth.getState().isAuthenticated;
//   if (!!token && isAuthenticated && url.includes("/minha-supervia")) {
//     headers["Authorization"] = `Bearer ${token}`;
//   } else {
//     headers["x-api-key"] = `wzeRLUzByp6ql7Ek7JU2h9ZIYDkL1rzGa51OBw0S`;
//   }

//   return { ...config, headers };
// };

// const onRequestError = (error: AxiosError): Promise<AxiosError> => {
//   return Promise.reject(error);
// };

// export const setupInterceptors = (axiosInstance: AxiosInstance) => {
//   axiosInstance.interceptors.response.use(onResponse, onResponseError);
//   axiosInstance.interceptors.request.use(onRequest, onRequestError);
// };
