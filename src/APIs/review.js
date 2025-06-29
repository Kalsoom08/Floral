import api from '../APIs/api';

export const addReview = (data) => api.post('/public/review', data)
export const getReview = (productID) => api.get(`/public/review/${productID}`);
export const deleteReview = (id) => api.delete(`/admin/review/${id}`);
