import { AxiosResponse, AxiosError } from "axios";

type RawError = {
  message: string;
};

export type APIError = AxiosError<RawError>;

export type DefaultResponse<T> = {
  data: T;
};

export type FetcherResponse<T> = Promise<AxiosResponse<T>>;
export type RawResponse<T> = DefaultResponse<T>;
export type APIResponse<T> = FetcherResponse<RawResponse<T>>;

export type ResponseDefault = {
  status: string;
};
