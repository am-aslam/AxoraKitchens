"use client";

import React from 'react';
import { PenTool, Ruler, Truck, Wrench, Home, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <MessageSquare size={24} />,
        title: 'Consultation',
        desc: 'We start with a detailed discussion to understand your lifestyle, preferences, and requirements.'
    },
    {
        icon: <Ruler size={24} />,
        title: 'Space Planning',
        desc: 'Precise measurements and ergonomic layouts to maximize efficiency and flow in your home.'
    },
    {
        icon: <PenTool size={24} />,
        title: 'Bespoke Design',
        desc: '3D visualizations and material selection to create a unique aesthetic tailored to you.'
    },
    {
        icon: <Truck size={24} />,
        title: 'Manufacturing',
        desc: 'Precision engineering using high-quality materials in our state-of-the-art facility.'
    },
    {
        icon: <Wrench size={24} />,
        title: 'Installation',
        desc: 'White-glove delivery and professional installation by our certified technical team.'
    },
    {
        icon: <Home size={24} />,
        title: 'After-Sales Care',
        desc: 'Comprehensive warranty and maintenance support to ensure your interior remains pristine.'
    }
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-32 bg-bg-primary" id="services">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-[600px] mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-text-main">Our Services</h2>
                    <p className="text-text-muted">A comprehensive design-to-delivery experience.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-xl bg-bg-secondary border border-transparent hover:border-border hover:bg-bg-primary hover:shadow-xl transition-all duration-300 group"
                            key={index}
                        >
                            <div className="w-12 h-12 rounded-lg bg-bg-primary flex items-center justify-center mb-6 text-text-main shadow-sm border border-border group-hover:scale-110 group-hover:bg-accent group-hover:text-bg-primary transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-text-main">{service.title}</h3>
                            <p className="text-text-muted leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
