import axios from "axios";

const BASE_URL = "https://animeverse-one.vercel.app/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  
});
