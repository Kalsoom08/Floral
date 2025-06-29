import axios from 'axios';

const baseAPI = axios.create({
    baseURL : 'http://localhost:7000/api',
    headers: {
    'Content-Type': 'application/json',
  },
  
})


baseAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


export default baseAPI