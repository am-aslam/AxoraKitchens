"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-32 bg-bg-secondary" id="about">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="block text-accent font-semibold tracking-widest text-sm uppercase mb-4">Our Story</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-text-main">Crafting Legacy Through Design</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-6">
                            For over two decades, AxoraKitchens has been at the forefront of luxury interior design.
                            We believe that a home is not just a place to live, but a reflection of your personality and achievements.
                            Our mission is to transform your vision into reality through impeccable craftsmanship and innovative design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="grid gap-8">
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-bold mb-3 text-text-main">Bespoke Design</h4>
                                <p className="text-text-muted">Every project is unique. We tailor every detail to fit your lifestyle, ensuring functionality meets aesthetics.</p>
                            </div>
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-bold mb-3 text-text-main">Premium Materials</h4>
                                <p className="text-text-muted">We source only the finest sustainable woods, ethically quarried stones, and high-grade metals.</p>
                            </div>
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-bold mb-3 text-text-main">Expert Craftsmanship</h4>
                                <p className="text-text-muted">Our master artisans combine traditional techniques with modern technology to build interiors that last a lifetime.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
