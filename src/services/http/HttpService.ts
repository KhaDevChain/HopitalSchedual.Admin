import { Global } from "@/Global";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const config = Global();

class HttpService {

  // Tạo một instance của axios với cấu hình mặc định
  private static instance: AxiosInstance = axios.create({
    baseURL: config.apiUrl || '',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true
  });

  static async get<T = any>(url: string, params?: object, headers?: object): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      params,
      headers,
    };
    return this.instance.get(url, config);
  }

  static async post<T = any>(url: string, data?: object, headers?: object): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      headers,
    };
    return this.instance.post(url, data, config);
  }

  static async put<T = any>(url: string, data?: object, headers?: object): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      headers,
    };
    return this.instance.put(url, data, config);
  }

  static async delete<T = any>(url: string, data?: object, headers?: object): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      data,
      headers,
    };
    return this.instance.delete(url, config);
  }
}

export { HttpService };
