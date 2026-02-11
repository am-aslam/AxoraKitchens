"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.jpg';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="relative min-h-[100dvh] flex items-center bg-bg-primary overflow-hidden pt-[var(--header-height)]" id="home">
            <div className="max-w-[1400px] mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[45%] text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 tracking-tight text-text-main font-heading">
                                {t.titlePart1} <span className="block mt-1 italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text-main via-accent to-text-main leading-snug">{t.titlePart2}</span>
                            </h1>

                            <blockquote className="text-sm md:text-base text-text-muted mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 border-l-2 border-accent/60 pl-5 py-0.5 font-body italic font-medium opacity-90">
                                {t.subtitle}
                            </blockquote>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="#products" className={`inline-flex items-center justify-center px-9 py-4 rounded-none bg-accent text-bg-primary border border-accent font-bold ${language === 'ar' ? 'text-sm' : 'text-[12px]'} hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-md uppercase tracking-[0.2em] min-w-[180px]`}>
                                    {t.explore}
                                </Link>
                                <Link href="/#contact" className={`inline-flex items-center justify-center px-9 py-4 rounded-none bg-white/80 backdrop-blur text-text-main border border-white font-bold ${language === 'ar' ? 'text-sm' : 'text-[12px]'} hover:bg-white hover:scale-105 transition-all shadow-md uppercase tracking-[0.2em] min-w-[180px]`}>
                                    {t.quote}
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={heroImage}
                                    alt="Luxury Kitchen Design"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[#F5F5DC]/5 mix-blend-overlay"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
