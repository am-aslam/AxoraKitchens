"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="relative min-h-[100dvh] flex items-center bg-bg-primary overflow-hidden pt-[var(--header-height)]" id="home">
            <div className="max-w-[1400px] mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-start z-10"
                    >
                        <h1 className="text-5xl lg:text-7 xl font-bold leading-tight mb-6 tracking-tight text-text-main pb-2">
                            {t.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main via-accent to-text-muted">{t.titlePart2}</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            {t.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#products" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent text-bg-primary border border-accent font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider">
                                {t.explore}
                            </Link>
                            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-transparent text-text-main border border-text-main font-medium text-sm hover:bg-text-main hover:text-bg-primary hover:border-text-main transition-all hover:-translate-y-1 uppercase tracking-wider">
                                {t.quote}
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full aspect-[4/3] lg:aspect-square max-w-[700px]"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-bg-secondary to-bg-primary rounded-full blur-3xl -z-10"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-700">
                            <Image
                                src={heroImage}
                                alt="Luxury Kitchen Interior"
                                className="object-cover"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
