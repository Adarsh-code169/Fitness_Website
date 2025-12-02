import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BookSlot from './pages/BookSlot';
import AdminDashboard from './pages/admin/AdminDashboard';
import SlotManagement from './pages/admin/SlotManagement';
import UserManagement from './pages/admin/UserManagement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="book" element={
          <ProtectedRoute>
            <BookSlot />
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="admin" element={
          <ProtectedRoute adminOnly>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="admin/slots" element={
          <ProtectedRoute adminOnly>
            <SlotManagement />
          </ProtectedRoute>
        } />
        <Route path="admin/users" element={
          <ProtectedRoute adminOnly>
            <UserManagement />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
