import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Dumbbell className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-text-primary">FitMantra</span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Premium fitness experience designed for your lifestyle. Book slots, track progress, and achieve your goals.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/book" className="hover:text-primary transition-colors">Book a Slot</Link></li>
                            <li><Link to="/dashboard" className="hover:text-primary transition-colors">My Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-secondary">
                        © {new Date().getFullYear()} FitMantra. All rights reserved.
                    </p>
                    <p className="text-sm text-text-secondary flex items-center gap-1">
                        Made with <span className="text-red-500">♥</span> for fitness
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
