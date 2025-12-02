import React, { useState } from 'react';
import { Search, Ban, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Button from '../../components/Button';
import Input from '../../components/Input';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joinDate: '2023-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joinDate: '2023-02-20' },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'banned', joinDate: '2023-03-10' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggleStatus = (userId) => {
        setUsers(users.map(user => {
            if (user.id === userId) {
                const newStatus = user.status === 'active' ? 'banned' : 'active';
                toast.success(`User ${newStatus === 'active' ? 'unbanned' : 'banned'} successfully`);
                return { ...user, status: newStatus };
            }
            return user;
        }));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">User Management</h1>
                <p className="text-text-secondary">Manage user accounts and access.</p>
            </div>

            <div className="mb-6">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                        placeholder="Search users by name or email..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Name</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Email</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Join Date</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-text-primary">{user.name}</td>
                                <td className="px-6 py-4 text-text-secondary">{user.email}</td>
                                <td className="px-6 py-4 text-text-secondary">{user.joinDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={user.status === 'active' ? 'text-red-500 hover:bg-red-50' : 'text-green-500 hover:bg-green-50'}
                                        onClick={() => handleToggleStatus(user.id)}
                                    >
                                        {user.status === 'active' ? (
                                            <><Ban size={16} className="mr-1" /> Ban</>
                                        ) : (
                                            <><CheckCircle size={16} className="mr-1" /> Unban</>
                                        )}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
