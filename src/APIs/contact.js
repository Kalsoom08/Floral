import api from '../APIs/api';

export const addMessage = (data) => api.post('/public/message', data)
