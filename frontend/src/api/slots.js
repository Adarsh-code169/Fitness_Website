import api from './axios';

export const getSlots = async (date) => {
    const response = await api.get('/slots', { params: { date } });
    return response.data;
};

export const bookSlot = async (slotId) => {
    const response = await api.post('/slots/book', { slotId });
    return response.data;
};

export const cancelBooking = async (bookingId) => {
    const response = await api.post('/slots/cancel', { bookingId });
    return response.data;
};

export const getMyBookings = async () => {
    const response = await api.get('/slots/my-bookings');
    return response.data;
};
