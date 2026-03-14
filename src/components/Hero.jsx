"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImage from '../assets/premium-hero-kitchen.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].hero;

    // Stagger animation wrappers for the text content
    const staggerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const staggerItem = {
        initial: { opacity: 0, y: 30 },
        animate: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden" id="home">
            
            {/* FULL SCALE BACKGROUND IMAGE MODULE */}
            <motion.div 
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={heroImage}
                    alt="Premium Luxury Kitchen Design"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                
                {/* Dark Contrast Overlay Gradients for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </motion.div>

            {/* MAIN CONTENT BLOCK */}
            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 pt-[var(--header-height)]">
                <div className="flex flex-col items-start justify-center text-left">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-3xl"
                    >
                        {/* Top Label */}
                        <motion.div variants={staggerItem} className={`flex items-center gap-4 mb-6 ${direction === 'rtl' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                            {direction !== 'rtl' && <div className="w-16 h-[2px] bg-accent" />}
                            <span className={`text-sm md:text-base font-bold tracking-[0.3em] uppercase text-accent drop-shadow-md`}>
                                {t.titlePart2}
                            </span>
                            {direction === 'rtl' && <div className="w-16 h-[2px] bg-accent" />}
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1 
                            variants={staggerItem} 
                            className={`text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white font-heading mb-8 drop-shadow-2xl ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                        >
                            {language === 'en' ? t.titlePart1.replace(' —', '') : t.titlePart1}
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p 
                            variants={staggerItem} 
                            className={`text-lg md:text-xl text-gray-200 mb-12 leading-relaxed font-body drop-shadow-lg max-w-2xl ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                        >
                            {t.subtitle}
                        </motion.p>

                        {/* Stacked CTA Buttons */}
                        <motion.div 
                            variants={staggerItem} 
                            className={`flex flex-col sm:flex-row gap-5 ${direction === 'rtl' ? 'justify-end' : 'justify-start'} items-center sm:items-stretch`}
                        >
                            <Link href="#products" className={`inline-flex items-center justify-center px-10 py-5 rounded-none bg-accent text-bg-primary font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-[0.2em] w-full sm:w-auto ${language === 'ar' ? 'text-base' : 'text-sm'}`}>
                                {t.explore}
                            </Link>
                            <Link href="/company-profile" className={`inline-flex items-center justify-center px-10 py-5 rounded-none bg-black/30 backdrop-blur-md text-white border border-white/50 font-bold transition-all hover:bg-white hover:text-black uppercase tracking-[0.2em] w-full sm:w-auto ${language === 'ar' ? 'text-base' : 'text-sm'}`}>
                                {t.quote}
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
