import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cancelModal, setCancelModal] = useState({ isOpen: false, booking: null });

    useEffect(() => {
        // Mock fetch bookings
        setTimeout(() => {
            setBookings([
                {
                    id: 1,
                    date: new Date(Date.now() + 86400000), // Tomorrow
                    time: '07:00 AM',
                    type: 'Morning',
                    trainer: 'John Doe',
                    status: 'upcoming'
                },
                {
                    id: 2,
                    date: new Date(Date.now() + 172800000), // Day after tomorrow
                    time: '06:00 PM',
                    type: 'Evening',
                    trainer: 'Mike Ross',
                    status: 'upcoming'
                },
                {
                    id: 3,
                    date: new Date(Date.now() - 86400000), // Yesterday
                    time: '08:00 AM',
                    type: 'Morning',
                    trainer: 'Sarah Smith',
                    status: 'completed'
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleCancel = (booking) => {
        setCancelModal({ isOpen: true, booking });
    };

    const confirmCancel = () => {
        // Simulate cancel API
        setBookings(bookings.filter(b => b.id !== cancelModal.booking.id));
        toast.success('Booking cancelled successfully');
        setCancelModal({ isOpen: false, booking: null });
    };

    const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
    const pastBookings = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Loader size="lg" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">My Dashboard</h1>
                <p className="text-text-secondary">Welcome back, {user?.name}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Stats Section */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6 bg-gradient-to-br from-primary to-primary-dark text-white border-none">
                        <h3 className="text-lg font-semibold mb-2">Total Workouts</h3>
                        <div className="text-4xl font-bold mb-4">12</div>
                        <p className="text-white/80 text-sm">You're doing great! Keep it up.</p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4 text-text-primary">Next Workout</h3>
                        {upcomingBookings.length > 0 ? (
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="text-primary" size={20} />
                                    <span className="font-medium">
                                        {upcomingBookings[0].date.toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="text-primary" size={20} />
                                    <span className="font-medium">{upcomingBookings[0].time}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-primary" size={20} />
                                    <span className="font-medium">Main Studio</span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-text-secondary">No upcoming workouts scheduled.</p>
                        )}
                    </Card>
                </div>

                {/* Bookings List */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Upcoming */}
                    <section>
                        <h2 className="text-xl font-bold text-text-primary mb-4">Upcoming Bookings</h2>
                        <div className="space-y-4">
                            {upcomingBookings.length > 0 ? (
                                upcomingBookings.map((booking) => (
                                    <motion.div
                                        key={booking.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <Card className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div className="flex gap-4">
                                                <div className="bg-primary/10 p-3 rounded-lg text-primary flex flex-col items-center justify-center min-w-[60px]">
                                                    <span className="text-xs font-bold uppercase">
                                                        {booking.date.toLocaleDateString('en-US', { month: 'short' })}
                                                    </span>
                                                    <span className="text-xl font-bold">
                                                        {booking.date.getDate()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-text-primary">{booking.type} Session</h3>
                                                    <p className="text-sm text-text-secondary flex items-center gap-2">
                                                        <Clock size={14} /> {booking.time} • {booking.trainer}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                                onClick={() => handleCancel(booking)}
                                            >
                                                Cancel
                                            </Button>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <p className="text-text-secondary italic">No upcoming bookings.</p>
                            )}
                        </div>
                    </section>

                    {/* Past */}
                    <section>
                        <h2 className="text-xl font-bold text-text-primary mb-4">Past Workouts</h2>
                        <div className="space-y-4">
                            {pastBookings.map((booking) => (
                                <Card key={booking.id} className="p-4 flex justify-between items-center opacity-75">
                                    <div className="flex gap-4">
                                        <div className="bg-gray-100 p-3 rounded-lg text-gray-500 flex flex-col items-center justify-center min-w-[60px]">
                                            <span className="text-xs font-bold uppercase">
                                                {booking.date.toLocaleDateString('en-US', { month: 'short' })}
                                            </span>
                                            <span className="text-xl font-bold">
                                                {booking.date.getDate()}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text-primary">{booking.type} Session</h3>
                                            <p className="text-sm text-text-secondary">
                                                {booking.time} • {booking.trainer}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                        Completed
                                    </span>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Cancel Modal */}
            <Modal
                isOpen={cancelModal.isOpen}
                onClose={() => setCancelModal({ isOpen: false, booking: null })}
                title="Cancel Booking"
            >
                <div className="text-center mb-6">
                    <div className="bg-red-100 p-3 rounded-full inline-flex mb-4 text-red-500">
                        <AlertCircle size={32} />
                    </div>
                    <p className="text-text-secondary">
                        Are you sure you want to cancel this booking? This action cannot be undone.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="ghost"
                        className="flex-1"
                        onClick={() => setCancelModal({ isOpen: false, booking: null })}
                    >
                        Keep Booking
                    </Button>
                    <Button
                        variant="danger"
                        className="flex-1"
                        onClick={confirmCancel}
                    >
                        Yes, Cancel
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
