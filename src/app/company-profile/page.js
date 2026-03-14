"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';
import {
    Compass, MessageSquare, Utensils, CheckCircle2, Clock, Hammer, Target, Telescope,
    Handshake, Wrench, LayoutGrid, ChefHat, DoorOpen, Droplets, Layers, Settings,
    Palette, PenTool, ShieldCheck, Shield, Percent, Truck, Search, Zap, Check, ArrowRight, ArrowLeft, Star
} from 'lucide-react';

import heroBg from '@/assets/hero-new.jpg';
import aboutImage from '@/assets/kitchen_1.png';
import ctaBg from '@/assets/kitchen_2.png';

// Counter component for animation
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(from + (to - from) * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration]);

    return <span>{count}{suffix}</span>;
};

export default function CompanyProfile() {
    const { language, direction } = useLanguage();
    const t = translations[language].companyProfile;
    const commonT = translations[language].speciality;

    // Page scroll animations
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    // Direction-aware values
    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-bg-primary text-text-main overflow-x-hidden min-h-screen">
            {/* Top Back Navigation (Floating) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="fixed top-6 left-6 z-50 mix-blend-difference"
                style={{ opacity: headerOpacity }}
            >
                <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                    {direction === 'rtl' ? <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> : <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
                    <span className="text-sm font-medium uppercase tracking-wider">{translations[language].nav.home}</span>
                </Link>
            </motion.div>

            {/* SECTION 1: HERO INTRO */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <Image src={heroBg} alt="Company Hero" fill className="object-cover" priority />
                        {/* Elegant luxury overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/80 via-[#3E2723]/60 to-[#1a110f]/90" />
                    </motion.div>
                </div>

                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Decorative line */}
                        <div className="w-12 h-0.5 bg-accent mx-auto mb-8 opacity-70" />

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight">
                            {t.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg-primary font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,210,100,0.3)] hover:shadow-[0_0_40px_rgba(251,210,100,0.5)] rounded-none uppercase tracking-wider text-sm">
                            <Compass className="w-5 h-5" />
                            {t.hero.cta}
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute inset-0 w-full h-1/2 bg-accent"
                        />
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: ABOUT AXORA */}
            <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div className="flex-1 space-y-8" {...fadeUp}>
                        <div className="space-y-4">
                            <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold">{t.about.title}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main leading-tight">
                                {t.about.description}
                            </h2>
                        </div>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: Compass, text: t.about.features.design },
                                { icon: MessageSquare, text: t.about.features.consultation },
                                { icon: Utensils, text: t.about.features.functional }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-bg-primary text-text-muted group-hover:bg-accent group-hover:text-bg-primary group-hover:border-accent transition-colors duration-300 shadow-sm">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-medium text-text-main">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src={aboutImage} alt="About Axora" fill className="object-cover" />
                            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: EXPERIENCE & CREDIBILITY */}
            <section className="py-24 bg-bg-primary">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: CheckCircle2, text: t.experience.success, num: 99, suffix: '%' },
                            { icon: Clock, text: t.experience.years, num: 20, suffix: '+' },
                            { icon: Star, text: t.experience.installed, num: 500, suffix: '+' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx} variants={staggerItem}
                                className="bg-bg-secondary p-10 rounded-2xl border border-border/50 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="inline-flex p-4 rounded-full bg-bg-primary mb-6 text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-4 font-heading">
                                    <AnimatedCounter to={stat.num} suffix={stat.suffix} />
                                </h3>
                                <p className="text-text-muted font-medium">{stat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4: MISSION & VISION */}
            <section className="py-24 md:py-32 bg-[#3E2723] text-white relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-md p-10 md:p-14 border border-white/10 rounded-2xl"
                        >
                            <Target className="w-12 h-12 text-accent mb-8 opacity-80" />
                            <h3 className="text-3xl font-heading font-bold mb-4">{t.missionVision.missionTitle}</h3>
                            <p className="text-white/70 leading-relaxed text-lg">{t.missionVision.missionDesc}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-10 md:p-14 border border-white/10 rounded-2xl"
                        >
                            <Telescope className="w-12 h-12 text-accent mb-8 opacity-80" />
                            <h3 className="text-3xl font-heading font-bold mb-4">{t.missionVision.visionTitle}</h3>
                            <p className="text-white/70 leading-relaxed text-lg">{t.missionVision.visionDesc}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CORE VALUES */}
            <section className="py-24 bg-bg-secondary">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Handshake, text: t.coreValues.customerFirst },
                            { icon: Wrench, text: t.coreValues.craftsmanship },
                            { icon: LayoutGrid, text: t.coreValues.practical }
                        ].map((val, idx) => (
                            <motion.div key={idx} variants={staggerItem} className="flex flex-col items-center text-center p-8 group">
                                <div className="w-20 h-20 rounded-full border-2 border-border flex items-center justify-center mb-6 text-text-muted group-hover:border-accent group-hover:text-accent group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 bg-bg-primary">
                                    <val.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold font-heading text-text-main">{val.text}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 6: PRODUCTS & SERVICES */}
            <section className="py-24 bg-bg-primary">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div className="text-center mb-16" {...fadeUp}>
                        <h2 className="text-4xl font-heading font-bold text-text-main">{t.services.title}</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mt-6" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
                    >
                        {[
                            { icon: ChefHat, text: t.services.customKitchen },
                            { icon: DoorOpen, text: t.services.wardrobes },
                            { icon: Droplets, text: t.services.washCounters },
                            { icon: Layers, text: t.services.countertops },
                            { icon: Settings, text: t.services.customization }
                        ].map((srv, idx) => (
                            <motion.div key={idx} variants={staggerItem} className="bg-bg-secondary p-6 rounded-xl border border-border/40 text-center hover:border-accent/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default h-full flex flex-col justify-center items-center">
                                <srv.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                <h4 className="text-sm md:text-base font-semibold text-text-main">{srv.text}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 7: MATERIALS & SOLUTIONS */}
            <section className="py-24 bg-bg-secondary">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div className="text-center mb-16" {...fadeUp}>
                        <h2 className="text-4xl font-heading font-bold text-text-main">{t.materials.title}</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mt-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="bg-bg-primary p-10 rounded-2xl border border-border"
                        >
                            <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                                <LayoutGrid className="text-accent w-6 h-6" />
                                {t.materials.cabinetsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {t.materials.cabinets.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-text-muted font-medium pb-4 border-b border-border/50 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-bg-primary p-10 rounded-2xl border border-border"
                        >
                            <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                                <Layers className="text-accent w-6 h-6" />
                                {t.materials.countertopsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {t.materials.countertops.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-text-muted font-medium pb-4 border-b border-border/50 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: CUSTOMER JOURNEY */}
            <section className="py-24 bg-bg-primary overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div className="text-center mb-20" {...fadeUp}>
                        <h2 className="text-4xl font-heading font-bold text-text-main">{t.process.title}</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mt-6" />
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-border/50 -translate-y-1/2 z-0" />
                        <motion.div
                            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-accent -translate-y-1/2 z-0 origin-left"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                { icon: MessageSquare, title: t.process.steps[0].title },
                                { icon: PenTool, title: t.process.steps[1].title },
                                { icon: Palette, title: t.process.steps[2].title },
                                { icon: Wrench, title: t.process.steps[3].title },
                                { icon: ShieldCheck, title: t.process.steps[4].title }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-bg-secondary border-[3px] border-border group-hover:border-accent text-text-muted group-hover:text-accent flex items-center justify-center mb-4 transition-all duration-300 relative z-10 drop-shadow-sm">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-accent font-bold mb-1 opacity-70">0{idx + 1}</div>
                                    <h4 className="font-semibold text-text-main">{step.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9: WHY CHOOSE AXORA */}
            <section className="py-24 bg-[#3E2723] text-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div className="text-center mb-16" {...fadeUp}>
                        <h2 className="text-4xl font-heading font-bold text-white">{commonT.title}</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mt-6" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: Zap, data: commonT.features.speed },
                            { icon: Shield, data: commonT.features.warranty },
                            { icon: Percent, data: commonT.features.vat },
                            { icon: Search, data: commonT.features.inspection },
                            { icon: Truck, data: commonT.features.delivery },
                            { icon: ShieldCheck, data: commonT.features.installation },
                        ].map((feature, idx) => (
                            <motion.div key={idx} variants={staggerItem} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-[#3E2723] transition-colors duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">{feature.data.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{feature.data.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 10: FINAL CTA */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={ctaBg} alt="CTA Background" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-text-main mb-8 leading-tight">
                            {t.cta.title}
                        </h2>

                        <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-bg-primary font-bold hover:bg-text-main hover:text-white transition-all shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(62,39,35,0.3)] hover:-translate-y-1 rounded-none uppercase tracking-wider">
                            {t.cta.button}
                            {direction === 'rtl' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
