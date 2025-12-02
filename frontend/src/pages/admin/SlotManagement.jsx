import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

const SlotManagement = () => {
    const [slots, setSlots] = useState([
        { id: 1, time: '06:00 AM', type: 'Morning', capacity: 20, trainer: 'John Doe' },
        { id: 2, time: '07:00 AM', type: 'Morning', capacity: 20, trainer: 'John Doe' },
        { id: 3, time: '05:00 PM', type: 'Evening', capacity: 25, trainer: 'Mike Ross' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSlot, setEditingSlot] = useState(null);
    const [formData, setFormData] = useState({ time: '', type: 'Morning', capacity: '', trainer: '' });

    const handleOpenModal = (slot = null) => {
        if (slot) {
            setEditingSlot(slot);
            setFormData(slot);
        } else {
            setEditingSlot(null);
            setFormData({ time: '', type: 'Morning', capacity: '', trainer: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingSlot) {
            setSlots(slots.map(s => s.id === editingSlot.id ? { ...formData, id: s.id } : s));
            toast.success('Slot updated successfully');
        } else {
            setSlots([...slots, { ...formData, id: Date.now() }]);
            toast.success('Slot created successfully');
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this slot?')) {
            setSlots(slots.filter(s => s.id !== id));
            toast.success('Slot deleted successfully');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-text-primary mb-2">Slot Management</h1>
                    <p className="text-text-secondary">Manage workout schedules and capacity.</p>
                </div>
                <Button onClick={() => handleOpenModal()}>
                    <Plus size={20} className="mr-2" /> Add New Slot
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Time</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Type</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Capacity</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary">Trainer</th>
                            <th className="px-6 py-4 text-sm font-semibold text-text-secondary text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {slots.map((slot) => (
                            <tr key={slot.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-text-primary">{slot.time}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${slot.type === 'Morning' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'
                                        }`}>
                                        {slot.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-text-secondary">{slot.capacity}</td>
                                <td className="px-6 py-4 text-text-secondary">{slot.trainer}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button
                                        onClick={() => handleOpenModal(slot)}
                                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(slot.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingSlot ? 'Edit Slot' : 'Add New Slot'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        placeholder="e.g. 06:00 AM"
                        required
                    />
                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Type</label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                        </select>
                    </div>
                    <Input
                        label="Capacity"
                        type="number"
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        required
                    />
                    <Input
                        label="Trainer Name"
                        value={formData.trainer}
                        onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                        required
                    />
                    <Button type="submit" className="w-full">
                        {editingSlot ? 'Update Slot' : 'Create Slot'}
                    </Button>
                </form>
            </Modal>
        </div>
    );
};

export default SlotManagement;
