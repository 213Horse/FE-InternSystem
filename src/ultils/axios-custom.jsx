import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL

const token = localStorage.getItem('access_token');

// Tạo instance axios với baseURL và header chứa token
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': token ? `Bearer ${token}` : null // Thêm token vào header nếu tồn tại
  }
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response?.data?.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
})


export default instance;
