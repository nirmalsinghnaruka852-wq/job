import { axiosInstance } from "./axiosInstance";

/**
 * Makes a request with automatic timeout using AbortController
 * @param axiosConfig - Axios request config
 * @param timeout - time in ms to auto-cancel (default 10s)
 */
export async function c<T = any>(
  axiosConfig: Parameters<typeof axiosInstance.request>[0],
  timeout: number = 10000
): Promise<T> {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await axiosInstance.request<T>({
      ...axiosConfig,
      signal: controller.signal,
    });
    return response.data;
  } catch (error: any) {
    if (error.name === "CanceledError") {
      throw new Error(`Request timed out after ${timeout / 1000}s`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
