"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import heroIsland from '../assets/kitchen-island-hero.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].hero;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="relative min-h-[100dvh] w-full bg-[#F5F5DC] overflow-hidden flex items-center justify-center pt-[calc(var(--header-height)+2rem)] lg:pt-0" id="home">
            
            {/* GIANT BACKGROUND TYPOGRAPHY (10% Opacity) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="flex flex-col items-center w-full"
                >
                    <h1 className="text-[18vw] leading-[0.75] font-heading font-bold text-[#3E2723] uppercase tracking-tighter mix-blend-multiply whitespace-nowrap">
                        AXORA
                    </h1>
                    <h1 className="text-[18vw] leading-[0.75] font-heading font-bold text-[#3E2723] uppercase tracking-tighter mix-blend-multiply ml-[15vw] whitespace-nowrap">
                        KITCHENS
                    </h1>
                    <h1 className="text-[18vw] leading-[0.75] font-heading font-bold text-[#3E2723] uppercase tracking-tighter mix-blend-multiply -ml-[10vw] whitespace-nowrap">
                        INTERIORS
                    </h1>
                </motion.div>
            </div>

            {/* MAIN CONTENT LAYOUT */}
            <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row h-full min-h-[85vh] lg:items-center">
                
                {/* CENTER KITCHEN MODEL (Mobile: Top, Desktop: Center Absolute) */}
                <div className="w-full lg:absolute lg:inset-0 flex justify-center items-center pointer-events-none z-10 order-1 lg:order-none mt-4 lg:mt-16">
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                        transition={{ 
                            opacity: { duration: 1.5, ease: "easeOut" },
                            scale: { duration: 1.5, ease: "easeOut" },
                            y: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.5 } 
                        }}
                        className="relative w-full max-w-[900px] aspect-[4/3] mix-blend-multiply"
                    >
                        <Image
                            src={heroIsland}
                            alt="Premium Luxury Kitchen Island"
                            fill
                            className="object-contain drop-shadow-[0_45px_45px_rgba(62,39,35,0.2)]"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </div>

                {/* LEFT TEXT (Headline & Top label) */}
                <div className={`w-full lg:w-1/3 flex flex-col justify-center z-20 order-2 mt-8 lg:mt-0 ${direction === 'rtl' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className={`flex items-center justify-center lg:justify-start gap-4 mb-6 w-full ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <span className="text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-accent">
                            {t.titlePart2}
                        </span>
                        <div className="w-12 h-[1px] bg-accent/60 hidden lg:block" />
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold text-text-main leading-[1.05] tracking-tight whitespace-pre-line"
                    >
                        {language === 'en' ? (
                            <>Elevate your lifestyle with<br/>Axora Kitchens Interiors</>
                        ) : (
                            t.titlePart1
                        )}
                    </motion.h2>

                    {/* BUTTONS (Mobile: Bottom, Desktop: Left Under Headline) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                        className={`hidden lg:flex flex-col sm:flex-row gap-5 mt-12 w-full ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}
                    >
                        <Link href="#products" className={`inline-flex items-center justify-center px-8 py-4 bg-accent text-[#F5F5DC] font-bold shadow-lg hover:shadow-[0_0_20px_rgba(251,210,100,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-[10px] lg:text-xs min-w-[200px]`}>
                            {t.explore}
                        </Link>
                        <Link href="/company-profile" className={`inline-flex items-center justify-center px-8 py-4 bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-[#F5F5DC] hover:shadow-[0_0_20px_rgba(62,39,35,0.2)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-[10px] lg:text-xs min-w-[200px]`}>
                            {t.quote}
                        </Link>
                    </motion.div>
                </div>

                {/* SPACER FOR ABSOLUTE IMAGE ON DESKTOP */}
                <div className="hidden lg:block lg:w-1/3"></div>

                {/* RIGHT TEXT (Subtitle Description) */}
                <div className={`w-full lg:w-1/3 flex flex-col justify-end z-20 order-3 mt-8 lg:mt-0 ${direction === 'rtl' ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} text-center pb-8 lg:pb-16`}>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                        className="text-sm md:text-base lg:text-[15px] font-bold text-text-muted leading-[1.8] font-body max-w-sm uppercase tracking-wider relative"
                    >
                        {/* Small divider line above paragraph on desktop */}
                        <span className={`hidden lg:block absolute -top-6 w-12 h-[2px] bg-accent/30 ${direction === 'rtl' ? 'left-0' : 'right-0'}`} />
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* MOBILE BUTTONS (Visible only on small screens) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    className="flex lg:hidden flex-col gap-4 mt-8 w-full z-20 order-4 pb-12"
                >
                    <Link href="#products" className="w-full inline-flex items-center justify-center px-8 py-5 bg-accent text-[#F5F5DC] font-bold shadow-lg uppercase tracking-[0.2em] text-xs">
                        {t.explore}
                    </Link>
                    <Link href="/company-profile" className="w-full inline-flex items-center justify-center px-8 py-5 bg-transparent border border-text-main text-text-main font-bold uppercase tracking-[0.2em] text-xs">
                        {t.quote}
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
