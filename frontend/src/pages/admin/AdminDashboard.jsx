import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import Card from '../../components/Card';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Users', value: '1,234', icon: Users, color: 'text-blue-500', bg: 'bg-blue-100' },
        { label: 'Total Bookings', value: '856', icon: Calendar, color: 'text-green-500', bg: 'bg-green-100' },
        { label: 'Active Slots', value: '42', icon: Activity, color: 'text-purple-500', bg: 'bg-purple-100' },
        { label: 'Revenue', value: '$12,450', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-100' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">Admin Dashboard</h1>
                <p className="text-text-secondary">Overview of your fitness center performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} p-3 rounded-lg`}>
                                <stat.icon className={`${stat.color}`} size={24} />
                            </div>
                            <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                        </div>
                        <h3 className="text-text-secondary font-medium">{stat.label}</h3>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/admin/slots">
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
                        <h3 className="text-xl font-bold mb-2">Manage Slots</h3>
                        <p className="text-text-secondary mb-4">Add, edit, or remove workout slots and manage trainer schedules.</p>
                        <div className="text-primary font-medium">Go to Slot Management &rarr;</div>
                    </Card>
                </Link>
                <Link to="/admin/users">
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
                        <h3 className="text-xl font-bold mb-2">Manage Users</h3>
                        <p className="text-text-secondary mb-4">View user details, manage memberships, and handle account actions.</p>
                        <div className="text-primary font-medium">Go to User Management &rarr;</div>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
