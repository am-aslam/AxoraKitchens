"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const About = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].about;

    // Direction-aware animation values
    const slideFromStart = direction === 'rtl' ? 30 : -30;
    const slideFromEnd = direction === 'rtl' ? -30 : 30;

    return (
        <section className="py-32 bg-bg-secondary" id="about">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: slideFromStart }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="block text-accent font-semibold tracking-widest text-sm uppercase mb-4">{t.subtitle}</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-text-main">{t.title}</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-6">
                            {t.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: slideFromEnd }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="grid gap-8">
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-2xl font-bold mb-3 text-text-main">{t.stats.years}</h4>
                                <p className="text-text-muted text-5xl font-bold text-accent">20+</p>
                            </div>
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-2xl font-bold mb-3 text-text-main">{t.stats.projects}</h4>
                                <p className="text-text-muted text-5xl font-bold text-accent">500+</p>
                            </div>
                            <div className="bg-bg-primary p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <h4 className="text-2xl font-bold mb-3 text-text-main">{t.stats.awards}</h4>
                                <p className="text-text-muted text-5xl font-bold text-accent">15+</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
