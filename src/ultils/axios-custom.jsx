import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL

const token = localStorage.getItem('access_token');

// Tạo instance axios với baseURL và header chứa token
const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

instance.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }
console.log(instance.defaults.headers.common);
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response && response.data ? response.data : response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return error?.response?.data ?? Promise.reject(error);
})


export default instance;
