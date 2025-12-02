import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Loader from '../components/Loader';

const BookSlot = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirmModal, setConfirmModal] = useState({ isOpen: false, slot: null });

    // Generate next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
    });

    const filters = ['All', 'Morning', 'Afternoon', 'Evening'];

    // Mock fetch slots
    useEffect(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const mockSlots = [
                { id: 1, time: '06:00 AM', type: 'Morning', capacity: 20, booked: 15, trainer: 'John Doe' },
                { id: 2, time: '07:00 AM', type: 'Morning', capacity: 20, booked: 20, trainer: 'John Doe' },
                { id: 3, time: '08:00 AM', type: 'Morning', capacity: 20, booked: 12, trainer: 'Sarah Smith' },
                { id: 4, time: '05:00 PM', type: 'Evening', capacity: 25, booked: 10, trainer: 'Mike Ross' },
                { id: 5, time: '06:00 PM', type: 'Evening', capacity: 25, booked: 22, trainer: 'Mike Ross' },
                { id: 6, time: '07:00 PM', type: 'Evening', capacity: 25, booked: 5, trainer: 'Emma Wilson' },
            ];
            setSlots(mockSlots);
            setLoading(false);
        }, 1000);
    }, [selectedDate]);

    const filteredSlots = selectedFilter === 'All'
        ? slots
        : slots.filter(slot => slot.type === selectedFilter);

    const handleBook = (slot) => {
        setConfirmModal({ isOpen: true, slot });
    };

    const confirmBooking = () => {
        // Simulate booking API call
        toast.success('Slot booked successfully!');
        setConfirmModal({ isOpen: false, slot: null });
        // Refresh slots...
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
    };

    const isSelectedDate = (date) => {
        return date.toDateString() === selectedDate.toDateString();
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">Book a Slot</h1>
                <p className="text-text-secondary">Select a date and time for your workout.</p>
            </div>

            {/* Date Selection */}
            <div className="mb-8 overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(date)}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl min-w-[100px] transition-all ${isSelectedDate(date)
                                    ? 'bg-primary text-white shadow-md scale-105'
                                    : 'bg-white text-text-secondary hover:bg-gray-50 border border-gray-100'
                                }`}
                        >
                            <span className="text-sm font-medium mb-1">
                                {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                            <span className="text-2xl font-bold">
                                {date.getDate()}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
                <Filter size={20} className="text-text-secondary" />
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedFilter === filter
                                ? 'bg-black text-white'
                                : 'bg-white text-text-secondary hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Slots Grid */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader size="lg" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSlots.map((slot) => {
                        const isFull = slot.booked >= slot.capacity;
                        const availability = Math.round(((slot.capacity - slot.booked) / slot.capacity) * 100);

                        return (
                            <motion.div
                                key={slot.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <Card className="p-6 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary">{slot.time}</h3>
                                            <p className="text-sm text-text-secondary">{slot.trainer}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${slot.type === 'Morning' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'
                                            }`}>
                                            {slot.type}
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-text-secondary">Availability</span>
                                            <span className={`font-medium ${isFull ? 'text-red-500' : 'text-green-500'}`}>
                                                {isFull ? 'Full' : `${slot.capacity - slot.booked} spots left`}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all ${isFull ? 'bg-red-500' : availability < 20 ? 'bg-yellow-500' : 'bg-green-500'
                                                    }`}
                                                style={{ width: `${(slot.booked / slot.capacity) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full"
                                        disabled={isFull}
                                        onClick={() => handleBook(slot)}
                                        variant={isFull ? 'ghost' : 'primary'}
                                    >
                                        {isFull ? 'Waitlist' : 'Book Now'}
                                    </Button>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Confirmation Modal */}
            <Modal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal({ isOpen: false, slot: null })}
                title="Confirm Booking"
            >
                {confirmModal.slot && (
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                            <div className="flex justify-between">
                                <span className="text-text-secondary">Date</span>
                                <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-secondary">Time</span>
                                <span className="font-medium">{confirmModal.slot.time}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-secondary">Trainer</span>
                                <span className="font-medium">{confirmModal.slot.trainer}</span>
                            </div>
                        </div>
                        <p className="text-sm text-text-secondary">
                            Please note that cancellations must be made at least 2 hours in advance.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <Button
                                variant="ghost"
                                className="flex-1"
                                onClick={() => setConfirmModal({ isOpen: false, slot: null })}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1"
                                onClick={confirmBooking}
                            >
                                Confirm Booking
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default BookSlot;
