"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/premium-hero-kitchen.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].hero;

    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 800], [0, 150]);

    // Editorial translation parsing
    const giantWord1 = language === 'ar' ? 'أكسورا' : 'axora';
    const giantWord2 = language === 'ar' ? 'تصاميم' : 'interiors';

    return (
        <section className="relative min-h-[100dvh] bg-bg-primary overflow-hidden text-text-main flex items-center justify-center" id="home">
            
            {/* TOP BAR LABELS */}
            <div className={`absolute top-[12%] lg:top-[15%] w-full px-[5%] lg:px-[8%] flex flex-col md:flex-row justify-between items-start md:items-center text-[9px] md:text-[11px] lg:text-[12px] font-semibold tracking-[0.2em] lg:tracking-[0.3em] uppercase text-text-muted/60 z-30 ${direction === 'rtl' ? 'md:flex-row-reverse' : ''} gap-4 md:gap-0`}>
                <div className="w-full md:w-1/3 text-left">
                    <p>DESIGNED BY AXORA STUDIOS</p>
                </div>
                <div className="w-full md:w-1/3 text-center hidden md:block">
                    <p>{t.titlePart2}</p>
                </div>
                <div className="w-full md:w-1/3 text-right hidden md:block">
                    <p>MUSCAT, OMAN<br/>EST. 2024</p>
                </div>
            </div>

            {/* IMAGE MODULE: Right Center */}
            <div className={`absolute ${direction === 'rtl' ? 'left-[5%] md:left-[10%] lg:left-[15%]' : 'right-[5%] md:right-[10%] lg:right-[15%]'} top-[25%] md:top-[12%] lg:top-[10%] bottom-[15%] md:bottom-[0] w-[90%] md:w-[50%] lg:w-[32%] z-10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-transparent`}>
                <motion.div 
                    style={{ y: yTransform }}
                    className="relative w-full h-[120%]"
                >
                    <Image
                        src={heroImage}
                        alt="Premium Luxury Kitchen Design"
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/30 via-transparent to-transparent mix-blend-multiply" />
                </motion.div>
            </div>

            {/* GIANT TEXT 1: BEHIND IMAGE (Top/Mid Right) */}
            <div className={`absolute top-[15%] md:top-[18%] lg:top-[12%] ${direction === 'rtl' ? 'left-[-15%] lg:left-[5%]' : 'right-[-15%] lg:right-[5%]'} z-0 w-[150%] md:w-full pointer-events-none flex ${direction === 'rtl' ? 'justify-start' : 'justify-end'} px-[5%]`}>
                <motion.h1 
                    initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                    className="text-[120px] md:text-[200px] lg:text-[280px] font-heading font-medium tracking-tighter leading-none text-white drop-shadow-sm select-none"
                    style={{ textTransform: language === 'en' ? 'lowercase' : 'none' }}
                >
                    {giantWord1}
                </motion.h1>
            </div>

            {/* GIANT TEXT 2: IN FRONT OF IMAGE (Mid Left to center) */}
            <div className={`absolute top-[45%] md:top-[42%] lg:top-[40%] ${direction === 'rtl' ? 'right-[-10%] md:right-[0%]' : 'left-[-10%] md:left-[0%]'} z-20 pointer-events-none w-[150%] md:w-full flex px-[5%]`}>
                <motion.h1 
                    initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="text-[100px] md:text-[180px] lg:text-[280px] font-heading font-normal tracking-tighter leading-[0.85] text-white mix-blend-difference select-none drop-shadow-2xl"
                    style={{ textTransform: language === 'en' ? 'lowercase' : 'none' }}
                >
                    {giantWord2}
                </motion.h1>
            </div>

            {/* MID LEFT PARAGRAPH: "WEBSITE DESIGN FOR..." */}
            <div className={`absolute top-[32%] md:top-[35%] lg:top-[30%] ${direction === 'rtl' ? 'right-[5%] md:right-[8%]' : 'left-[5%] md:left-[8%]'} z-20 w-[60%] md:w-[25%] lg:w-[20%]`}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-sm md:text-base lg:text-lg font-bold leading-[1.3] text-text-main uppercase tracking-tight mix-blend-multiply"
                >
                    {t.titlePart1.replace(' —', '')}
                </motion.h2>
            </div>

            {/* MID RIGHT PARAGRAPH: "THE MAIREN IS A..." */}
            <div className={`absolute top-[75%] md:top-[65%] lg:top-[60%] ${direction === 'rtl' ? 'left-[5%] md:left-[5%]' : 'right-[5%] md:right-[5%]'} z-20 w-[80%] md:w-[25%] lg:w-[15%]`}>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className={`text-[10px] md:text-[11px] lg:text-xs text-text-muted font-bold uppercase tracking-[0.2em] leading-[1.8] ${direction === 'rtl' ? 'md:text-left' : 'md:text-left'} bg-bg-primary/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none p-4 md:p-0 rounded-lg`}
                >
                    {t.subtitle}
                </motion.p>
            </div>

            {/* BOTTOM LEFT: BUTTONS ("[ TO SEE MORE... ]") */}
            <div className={`absolute bottom-[5%] lg:bottom-[8%] ${direction === 'rtl' ? 'right-[5%] lg:right-[8%]' : 'left-[5%] lg:left-[8%]'} z-30 flex flex-row gap-4`}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                    <Link href="#products" className={`inline-flex items-center justify-center px-6 py-4 lg:py-3 bg-text-main text-bg-primary font-bold transition-all hover:bg-text-muted uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl min-w-[150px]`}>
                        {t.explore}
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}>
                    <Link href="/company-profile" className={`inline-flex items-center justify-center px-6 py-4 lg:py-3 bg-transparent border border-text-main/20 text-text-main hover:border-text-main font-bold transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs backdrop-blur-md min-w-[150px]`}>
                        {t.quote}
                    </Link>
                </motion.div>
            </div>
            
        </section>
    );
};

export default Hero;
