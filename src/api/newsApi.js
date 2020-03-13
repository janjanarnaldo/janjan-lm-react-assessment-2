import axios from 'axios';

const defaultParam = {
  apiKey: 'a18e43b8b6dc4cefb8b06de58d326345',
};

const newsApi = axios.create({
  baseURL: 'http://newsapi.org/v2/',
  headers: {
    common: {
      Accept: 'application/json, application/xml, text/play, text/html, *.*', 'Content-Type': 'application/json',
    },
  },
});

newsApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    ...defaultParam,
  };
  return config;
}, error => Promise.reject(error));

export default newsApi;
