"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

    // Editorial translation parsing for giant background text
    const giantWord1 = language === 'ar' ? 'أكسورا' : 'axora';
    const giantWord2 = language === 'ar' ? 'مطابخ' : 'kitchens';

    return (
        <section className="relative min-h-[100dvh] w-full bg-[#F5F5DC] overflow-hidden text-[#3E2723] pt-[var(--header-height)] lg:pt-0" id="home">
            
            {/* TOP BAR LABELS */}
            <div className={`absolute top-[12%] lg:top-[8%] w-full px-[5%] lg:px-[8%] flex flex-col md:flex-row justify-between items-start md:items-center text-[9px] md:text-[10px] lg:text-[11px] font-semibold tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[#5D4037]/60 z-30 ${direction === 'rtl' ? 'md:flex-row-reverse' : ''} gap-4 md:gap-0`}>
                <div className="w-full md:w-1/3 text-left">
                    <p>DESIGNED BY AXORA STUDIOS</p>
                </div>
                <div className="w-full md:w-1/3 text-center hidden md:block">
                    <p>{t.titlePart2}</p>
                </div>
                <div className="w-full md:w-1/3 text-right hidden md:block">
                    <p>LUXURY KITCHEN DESIGN<br/>EST. 2024</p>
                </div>
            </div>

            {/* GIANT TEXT 1: BEHIND IMAGE (Top Right) */}
            <div className={`absolute top-[8%] md:top-[12%] lg:top-[8%] ${direction === 'rtl' ? 'left-[-15%] lg:left-[5%]' : 'right-[-15%] lg:right-[5%]'} z-0 w-[150%] md:w-full pointer-events-none flex ${direction === 'rtl' ? 'justify-start' : 'justify-end'} px-[5%]`}>
                <motion.h1 
                    initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                    className="text-[120px] md:text-[200px] lg:text-[320px] font-heading font-medium tracking-tighter leading-none text-[#3E2723] drop-shadow-sm select-none mix-blend-multiply"
                    style={{ textTransform: language === 'en' ? 'lowercase' : 'none' }}
                >
                    {giantWord1}
                </motion.h1>
            </div>

            {/* GIANT TEXT 2: IN FRONT OF IMAGE (Mid Left to center) */}
            <div className={`absolute top-[40%] md:top-[38%] lg:top-[35%] ${direction === 'rtl' ? 'right-[-10%] md:right-[0%]' : 'left-[-10%] md:left-[0%]'} z-20 pointer-events-none w-[150%] md:w-full flex px-[5%]`}>
                <motion.h1 
                    initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="text-[120px] md:text-[200px] lg:text-[320px] font-heading font-normal tracking-tighter leading-[0.85] text-white mix-blend-overlay select-none drop-shadow-2xl"
                    style={{ textTransform: language === 'en' ? 'lowercase' : 'none' }}
                >
                    {giantWord2}
                </motion.h1>
            </div>

            {/* TOP LEFT PARAGRAPH: HEADLINE (like "WEBSITE DESIGN FOR...") */}
            <div className={`absolute top-[28%] md:top-[30%] lg:top-[25%] ${direction === 'rtl' ? 'right-[5%] md:right-[8%]' : 'left-[5%] md:left-[8%]'} z-30 w-[80%] md:w-[35%] lg:w-[25%]`}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-lg md:text-xl lg:text-2xl font-bold leading-[1.2] text-[#3E2723] uppercase tracking-tight mix-blend-multiply drop-shadow-sm"
                >
                    {language === 'en' ? t.titlePart1.replace(' —', '') : t.titlePart1}
                </motion.h2>
            </div>

            {/* MID/BOTTOM RIGHT PARAGRAPH: SUBTITLE (like "THE MAIREN IS A...") */}
            <div className={`absolute top-[65%] md:top-[60%] lg:top-[55%] ${direction === 'rtl' ? 'left-[5%] md:left-[8%]' : 'right-[5%] md:right-[8%]'} z-30 w-[80%] md:w-[35%] lg:w-[22%]`}>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className={`text-[10px] md:text-[11px] lg:text-xs text-[#5D4037] font-bold uppercase tracking-[0.2em] leading-[1.8] ${direction === 'rtl' ? 'md:text-left' : 'md:text-left'} bg-[#F5F5DC]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none p-4 md:p-0 rounded-lg shadow-sm md:shadow-none`}
                >
                    {t.subtitle}
                </motion.p>
            </div>

            {/* BOTTOM LEFT: BUTTONS (like "[ TO SEE MORE... ]") */}
            <div className={`absolute bottom-[5%] lg:bottom-[8%] ${direction === 'rtl' ? 'right-[5%] lg:right-[8%]' : 'left-[5%] lg:left-[8%]'} z-30 flex flex-col sm:flex-row gap-4 w-full sm:w-auto pr-[5%] sm:pr-0`}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                    <Link href="#products" className={`inline-flex items-center justify-center px-8 py-5 lg:py-4 bg-accent text-[#F5F5DC] font-bold transition-all hover:bg-[#D4B04C] hover:shadow-[0_0_20px_rgba(251,210,100,0.4)] uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl min-w-[200px] w-full sm:w-auto hover:-translate-y-1`}>
                        {t.explore}
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}>
                    <Link href="/company-profile" className={`inline-flex items-center justify-center px-8 py-5 lg:py-4 bg-transparent border border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#F5F5DC] hover:shadow-[0_0_20px_rgba(62,39,35,0.2)] font-bold transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs min-w-[200px] w-full sm:w-auto hover:-translate-y-1`}>
                        {t.quote}
                    </Link>
                </motion.div>
            </div>

            {/* CENTER IMAGE: Kitchen Island */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pt-[10vh] lg:pt-[5vh]">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }} 
                    transition={{ 
                        opacity: { duration: 1.5 }, 
                        scale: { duration: 1.5, ease: "easeOut" }, 
                        y: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.5 } 
                    }}
                    className="relative w-[95%] md:w-[70%] lg:w-[55%] aspect-[4/3] mix-blend-multiply"
                >
                    <Image
                        src={heroIsland}
                        alt="Premium Kitchen Island"
                        fill
                        className="object-contain drop-shadow-[0_45px_45px_rgba(62,39,35,0.2)]"
                        priority
                        quality={100}
                    />
                </motion.div>
            </div>
            
        </section>
    );
};

export default Hero;
