import api from '../APIs/api';

export const addOrder = (data) => api.post('/public/order', data)
export const updateOrder = (id, data) => api.put(`/admin/order/${id}`, data);
export const deleteOrder = (id) => api.delete(`/admin/order/${id}`);
