import Axios, { Method, AxiosResponse } from 'axios';
import { storeService } from './store';
import { utilService } from './util';

export const postApi = async (url: string, data: any) => {
  return await apiRequest(url, 'post', data);
};

export const getApi = async (url: string) => await apiRequest(url, 'get');

const apiRequest = async (
  url: string,
  method: Method,
  data?: any
): Promise<AxiosResponse> => {
  try {
    return await Axios.request({
      baseURL: 'https://api-suite.azurewebsites.net/api/v1/',
      url,
      method,
      data,
      timeout: 30000,
      headers: {
        Authorization: storeService.getToken(),
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (!error.response) {
      return {
        data: error.message,
        status: 400,
        statusText: error.message,
        headers: error.config.headers,
        config: error.config,
      };
    }
    return error.response;
  }
};
