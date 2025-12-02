import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, Dumbbell } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(formData.email, formData.password);
            toast.success('Welcome back!');
            navigate(from, { replace: true });
        } catch (error) {
            toast.error('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-background">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                        <Dumbbell size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-text-primary">Welcome Back</h1>
                    <p className="text-text-secondary mt-2">Sign in to continue your fitness journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        id="email"
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                    />

                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[34px] text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-text-secondary">
                            <input type="checkbox" className="mr-2 rounded border-gray-300 text-primary focus:ring-primary" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="text-primary hover:text-primary-dark font-medium">
                            Forgot password?
                        </Link>
                    </div>

                    <Button type="submit" className="w-full" isLoading={loading}>
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-text-secondary">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary hover:text-primary-dark font-medium">
                        Sign up
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;
