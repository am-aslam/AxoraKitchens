"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Box,
    ShieldCheck,
    BadgePercent,
    Ruler,
    Clock,
    Truck,
    Wrench
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Speciality = () => {
    const { language } = useLanguage();
    const t = translations[language]?.speciality || translations['en'].speciality;

    const features = [
        {
            icon: Box,
            title: t.features.design.title,
            description: t.features.design.desc,
            delay: 0.1
        },
        {
            icon: ShieldCheck,
            title: t.features.warranty.title,
            description: t.features.warranty.desc,
            delay: 0.2
        },
        {
            icon: BadgePercent,
            title: t.features.vat.title,
            description: t.features.vat.desc,
            delay: 0.3
        },
        {
            icon: Ruler,
            title: t.features.inspection.title,
            description: t.features.inspection.desc,
            delay: 0.4
        },
        {
            icon: Clock,
            title: t.features.speed.title,
            description: t.features.speed.desc,
            delay: 0.5
        },
        {
            icon: Truck,
            title: t.features.delivery.title,
            description: t.features.delivery.desc,
            delay: 0.6
        },
        {
            icon: Wrench,
            title: t.features.installation.title,
            description: t.features.installation.desc,
            delay: 0.7
        }
    ];

    return (
        <section className="relative w-full bg-bg-primary overflow-hidden pb-24">

            {/* 🔝 Slim Premium Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#EFEFE4] py-6 border-b border-[#D7CCC8]/30 mb-20"
            >
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h3 className="text-xl md:text-2xl font-heading text-text-main tracking-widest uppercase relative inline-block pb-3">
                        {t.bannerTitle}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-accent"></span>
                    </h3>
                </div>
            </motion.div>

            <div className="max-w-[1400px] mx-auto px-6">

                {/* 🏆 Section Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-heading text-text-main mb-6"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-text-muted max-w-2xl mx-auto font-body leading-relaxed"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* 📦 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {features.slice(0, 4).map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>

                {/* Bottom Row (Centered 3 Items on Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center lg:w-3/4 mx-auto mb-20">
                    {features.slice(4, 7).map((feature, index) => (
                        <FeatureCard key={index + 4} feature={feature} />
                    ))}
                </div>

                {/* 🔘 CTA Section */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            href="/#contact"
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-text-main text-white font-bold tracking-widest uppercase overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="absolute inset-0 w-full h-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                {t.cta}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform group-hover:translate-x-1 transition-transform duration-300 ${language === 'ar' ? 'rotate-180' : ''}`}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

const FeatureCard = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: feature.delay }}
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-border/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full"
        >
            <div className="w-16 h-16 rounded-full bg-bg-primary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <Icon className="w-8 h-8 text-text-main group-hover:text-amber-700 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
            </div>

            <h4 className="text-xl font-bold text-text-main mb-3 font-heading group-hover:text-accent-hover transition-colors">
                {feature.title}
            </h4>

            <p className="text-text-muted text-sm leading-relaxed font-body">
                {feature.description}
            </p>
        </motion.div>
    );
};

export default Speciality;
