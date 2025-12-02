import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, User, LogOut } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isLoggedIn = false; // TODO: Replace with auth context
    const user = { name: 'John Doe', role: 'user' }; // TODO: Replace with auth context

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Book Slot', path: '/book' },
        { name: 'My Bookings', path: '/dashboard' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Dumbbell className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-text-primary">FitMantra</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-text-secondary hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {isLoggedIn ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                                    <User size={18} />
                                    <span>{user.name}</span>
                                </div>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                                    <LogOut size={18} />
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login">
                                    <Button variant="ghost" size="sm">Login</Button>
                                </Link>
                                <Link to="/register">
                                    <Button size="sm">Get Started</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-secondary hover:text-primary p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-text-secondary hover:bg-gray-50 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100 mt-4">
                            {isLoggedIn ? (
                                <div className="px-3 space-y-2">
                                    <div className="flex items-center gap-2 text-base font-medium text-text-primary mb-2">
                                        <User size={18} />
                                        <span>{user.name}</span>
                                    </div>
                                    <Button variant="outline" className="w-full justify-center text-red-500 border-red-200 hover:bg-red-50">
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <div className="px-3 space-y-2">
                                    <Link to="/login" onClick={() => setIsOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-center">Login</Button>
                                    </Link>
                                    <Link to="/register" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full justify-center">Get Started</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
