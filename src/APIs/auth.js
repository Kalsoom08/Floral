import api from '../APIs/api';

export const registerAPI = async (data) => {
  const res = await api.post(`/public/register`, data);
  return res.data;
};

export const loginAPI = async (data) => {
  const res = await api.post(`/public/login`, data);
  return res.data;
};
