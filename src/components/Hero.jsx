"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero-new.jpg';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].hero;

    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 1000], [0, 150]);

    // Direction-aware animation values
    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const staggerItem = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center bg-bg-primary overflow-hidden pt-[var(--header-height)]" id="home">
            {/* Subtle Architectural Background Grid */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-[#F5F5DC]/30 mix-blend-multiply opacity-50" />
                <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-border/20 hidden lg:block" />
                <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-border/20 hidden lg:block" />
                <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-border/20 hidden lg:block" />
                <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-border/20 hidden lg:block" />
                <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-border/20 hidden lg:block" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 py-12 lg:py-0">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Side: Text Composition */}
                    <div className="w-full lg:w-[45%] text-center lg:text-left">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="max-w-xl mx-auto lg:mx-0"
                        >
                            {/* Top Label */}
                            <motion.div variants={staggerItem} className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                                <span className={`text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-accent ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
                                    {t.titlePart2}
                                </span>
                                <div className="w-12 h-[1px] bg-accent/60" />
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-text-main font-heading mb-8">
                                {t.titlePart1.replace(' —', '')}
                            </motion.h1>

                            {/* Subtle Divider */}
                            <motion.div variants={staggerItem} className="w-24 h-0.5 bg-border mx-auto lg:mx-0 mb-8" />

                            {/* Subtext */}
                            <motion.p variants={staggerItem} className="text-base md:text-lg text-text-muted mb-12 leading-relaxed font-body opacity-90">
                                {t.subtitle}
                            </motion.p>

                            {/* Stacked CTA Buttons */}
                            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-stretch">
                                <Link href="#products" className={`inline-flex items-center justify-center px-10 py-5 rounded-none bg-accent text-bg-primary font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-[0.2em] w-full sm:w-auto ${language === 'ar' ? 'text-sm' : 'text-xs'}`}>
                                    {t.explore}
                                </Link>
                                <Link href="/company-profile" className={`inline-flex items-center justify-center px-10 py-5 rounded-none bg-transparent hover:bg-bg-secondary text-text-main border border-border font-bold transition-all uppercase tracking-[0.2em] w-full sm:w-auto ${language === 'ar' ? 'text-sm' : 'text-xs'}`}>
                                    {t.quote}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Large Architectural Image */}
                    <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mb-8 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // smooth, premium easing
                            className="relative w-full max-w-[550px]"
                        >
                            <motion.div
                                style={{ y: yTransform }}
                                className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(62,39,35,0.3)] border border-white/20"
                            >
                                <Image
                                    src={heroImage}
                                    alt="Premium Luxury Kitchen Design"
                                    fill
                                    className="object-cover scale-105" // slight scale to handle parallax edge
                                    priority
                                />
                                {/* Premium Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/40 via-transparent to-transparent mix-blend-multiply" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
