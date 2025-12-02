import api from './axios';

export const getAdminStats = async () => {
    const response = await api.get('/admin/stats');
    return response.data;
};

export const getAllSlots = async () => {
    const response = await api.get('/admin/slots');
    return response.data;
};

export const createSlot = async (slotData) => {
    const response = await api.post('/admin/slots', slotData);
    return response.data;
};

export const updateSlot = async (id, slotData) => {
    const response = await api.put(`/admin/slots/${id}`, slotData);
    return response.data;
};

export const deleteSlot = async (id) => {
    const response = await api.delete(`/admin/slots/${id}`);
    return response.data;
};

export const getAllUsers = async () => {
    const response = await api.get('/admin/users');
    return response.data;
};

export const updateUserStatus = async (userId, status) => {
    const response = await api.patch(`/admin/users/${userId}/status`, { status });
    return response.data;
};
