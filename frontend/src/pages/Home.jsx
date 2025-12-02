import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
    const features = [
        "State-of-the-art Equipment",
        "Expert Personal Trainers",
        "Flexible Booking System",
        "Premium Amenities"
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Member since 2023",
            content: "FitMantra has completely transformed my fitness journey. The booking system is seamless and the trainers are top-notch.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Member since 2022",
            content: "I love how easy it is to schedule my workouts. The facility is always clean and the atmosphere is motivating.",
            rating: 5
        },
        {
            name: "Emma Davis",
            role: "Member since 2024",
            content: "Best gym experience I've ever had. The premium feel and attention to detail make every workout special.",
            rating: 5
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-secondary text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}
                />

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Elevate Your <span className="text-primary">Fitness</span> Journey
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Experience a premium fitness environment designed to help you achieve your goals.
                            Book your slots easily and train with the best.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                                    Member Login
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Why Choose FitMantra?</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            We provide everything you need to succeed in your fitness journey, from top-tier equipment to expert guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="font-semibold text-lg text-text-primary">{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary mb-4">What Our Members Say</h2>
                        <p className="text-text-secondary">Don't just take our word for it.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full p-8 hover:shadow-md transition-shadow">
                                    <div className="flex gap-1 text-yellow-400 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
                                    <div>
                                        <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                                        <p className="text-sm text-text-secondary">{testimonial.role}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join FitMantra today and get access to premium facilities and expert guidance.
                    </p>
                    <Link to="/register">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
