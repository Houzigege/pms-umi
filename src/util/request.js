import axios from 'axios';


const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:8000' : 'http://localhost:8000';
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  let token = localStorage.getItem('token');
  if(token){
    config.headers['token'] = token;
  }
  return config;
}, error => {
  Promise.reject(error);
});

service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code === -2) {
    localStorage.removeItem('token');
    return false;
  }
  return res;
}, error => {
  console.log(error);
  return Promise.reject(error)
});

export default service;
