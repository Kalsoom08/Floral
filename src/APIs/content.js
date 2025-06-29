import api from '../APIs/api';

export const addContent = (data) => api.post('/admin/content', data)
export const getContent = (type) => api.get(`/public/content/${type}`);
