import api from '../APIs/api';

export const fetchProducts = () => api.get('/public/product');
export const fetchProductById = (id) => api.get(`/public/products/id/${id}`);
export const fetchProductByTitle = (title) => api.get(`/public/products/title/${title}`);

export const addProduct = (data) => api.post('/admin/product', data);
export const updateProduct = (id, data) => api.put(`/admin/product/${id}`, data);
export const deleteProduct = (id) => api.delete(`/admin/product/${id}`);