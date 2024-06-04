import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const PlaceHolderAPI = axios.create({
  baseURL: BASE_URL,
});

PlaceHolderAPI.interceptors.response.use((response) => response.data);
