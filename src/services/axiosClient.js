import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://dominical-api.herokuapp.com/v1/'
  })

  api.interceptors.request.use(config => {
    console.log(config);
    config.baseURL = 'https://dominical-api.herokuapp.com/v1/'
    return config;
  })
  
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
  
  return api;
}