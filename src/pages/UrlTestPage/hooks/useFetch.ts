import { ResponseData } from '../types/response';

interface UseFetch {
  request: (url: string) => Promise<ResponseData>;
}

export function useFetch(): UseFetch {
  async function request(url: string): Promise<ResponseData> {
    const response = await fetch(url);

    const { data } = await response.json();

    return data;
  }
  return { request };
}
