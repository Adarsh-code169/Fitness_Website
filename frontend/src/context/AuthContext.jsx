import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Verify token with backend
                    // const response = await axios.get('/api/auth/me', {
                    //   headers: { Authorization: `Bearer ${token}` }
                    // });
                    // setUser(response.data.user);

                    // Mock user for now
                    setUser({ name: 'Demo User', email: 'demo@example.com', role: 'user' });
                } catch (error) {
                    console.error('Auth verification failed', error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        // Mock login
        // const response = await axios.post('/api/auth/login', { email, password });
        // const { token, user } = response.data;
        // localStorage.setItem('token', token);
        // setUser(user);

        localStorage.setItem('token', 'mock-token');
        setUser({ name: 'Demo User', email: email, role: 'user' });
        return true;
    };

    const register = async (name, email, password) => {
        // Mock register
        // const response = await axios.post('/api/auth/register', { name, email, password });
        // const { token, user } = response.data;
        // localStorage.setItem('token', token);
        // setUser(user);

        localStorage.setItem('token', 'mock-token');
        setUser({ name, email, role: 'user' });
        return true;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
