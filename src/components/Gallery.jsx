"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Image from 'next/image';

// Assets - Kitchens
import K_Egger1 from '@/assets/Kitchens/egger1.png';
import K_Egger2 from '@/assets/Kitchens/egger2.png';
import K_Egger3 from '@/assets/Kitchens/egger3.png';
import K_Glossy1 from '@/assets/HighGlossy/glossy.png';
import K_Glossy2 from '@/assets/HighGlossy/glossy2.png';
import K_Glossy3 from '@/assets/HighGlossy/glossy4.png';
import K_Multi1 from '@/assets/Multi Wood/multi.png';
import K_Multi2 from '@/assets/Multi Wood/multi1.png';
import K_Multi3 from '@/assets/Multi Wood/multi2.png';
import K_PVC1 from '@/assets/PVC/PVC.png';
import K_PVC2 from '@/assets/PVC/PVC1.png';
import K_PVC3 from '@/assets/PVC/PVC2.png';
import K_PVC4 from '@/assets/PVC/PVC3.png';
import K_Alu1 from '@/assets/Aluminium/Aluminium.png';
import K_Alu2 from '@/assets/Aluminium/Aluminium1.png';
import K_Alu3 from '@/assets/Aluminium/Aluminium2.png';

// Assets - Countertops
import C_Granite1 from '@/assets/Counter Top/Granite/granite.png';
import C_Granite2 from '@/assets/Counter Top/Granite/granite1.png';
import C_Granite3 from '@/assets/Counter Top/Granite/granite2.png';
import C_Granite4 from '@/assets/Counter Top/Granite/granite3.png';
import C_Granite5 from '@/assets/Counter Top/Granite/granite4.png';
import C_Granite6 from '@/assets/Counter Top/Granite/granite5.png';
import C_Korean1 from '@/assets/Counter Top/Korean/CTK.png';
import C_Korean2 from '@/assets/Counter Top/Korean/CTK1.png';
import C_Korean3 from '@/assets/Counter Top/Korean/CTK2.png';
import C_Korean4 from '@/assets/Counter Top/Korean/CTK3.png';
import C_Porcelain1 from '@/assets/Counter Top/Porcelain/porcelain.png';
import C_Porcelain2 from '@/assets/Counter Top/Porcelain/porcelain1.png';
import C_Porcelain3 from '@/assets/Counter Top/Porcelain/porcelain2.png';
import C_Porcelain4 from '@/assets/Counter Top/Porcelain/porcelain3.png';
import C_Porcelain5 from '@/assets/Counter Top/Porcelain/porcelain4.png';
import C_Porcelain6 from '@/assets/Counter Top/Porcelain/porcelain5.png';
import C_Quartz1 from '@/assets/Counter Top/quartz/quartz.png';
import C_Quartz2 from '@/assets/Counter Top/quartz/quartz1.png';
import C_Quartz3 from '@/assets/Counter Top/quartz/quartz2.png';
import C_Quartz4 from '@/assets/Counter Top/quartz/quartz3.png';

// Assets - Wash Counters
import W_Wash1 from '@/assets/Wash Counters/wash1.png';
import W_Wash2 from '@/assets/Wash Counters/wash2.png';
import W_Wash3 from '@/assets/Wash Counters/wash3.png';
import W_Wash4 from '@/assets/Wash Counters/wash4.png';

// Assets - Wardrobes
import WR_Wardrobe1 from '@/assets/Wardrobes/wardrobe1.jpg';
import WR_Wardrop2 from '@/assets/Wardrobes/wardrop2.png';
import WR_Wardrop3 from '@/assets/Wardrobes/wardrop3.png';

// Assets - Living
import L_Living1 from '@/assets/Living/living1.png';
import L_Living2 from '@/assets/Living/living2.png';
import L_Living3 from '@/assets/Living/living3.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';


const Gallery = () => {
    const { language } = useLanguage();
    const t = translations[language].gallery;
    const tm = translations[language].modelsPage;

    const galleryData = {
        kitchens: {
            title: t.cats.kitchens,
            thumbnail: K_Egger1,
            subcategories: [
                { title: tm.kitchens.egger.title, images: [K_Egger1, K_Egger2, K_Egger3] },
                { title: tm.kitchens.glossy.title, images: [K_Glossy1, K_Glossy2, K_Glossy3] },
                { title: tm.kitchens.multiwood.title, images: [K_Multi1, K_Multi2, K_Multi3] },
                { title: tm.kitchens.pvc.title, images: [K_PVC1, K_PVC2, K_PVC3, K_PVC4] },
                { title: tm.kitchens.aluminium.title, images: [K_Alu1, K_Alu2, K_Alu3] }
            ]
        },
        countertops: {
            title: t.cats.materials,
            thumbnail: C_Quartz1,
            subcategories: [
                { title: tm.countertops.quartz.title, images: [C_Quartz1, C_Quartz2, C_Quartz3, C_Quartz4] },
                { title: tm.countertops.korean.title, images: [C_Korean1, C_Korean2, C_Korean3, C_Korean4] },
                { title: tm.countertops.granite.title, images: [C_Granite1, C_Granite2, C_Granite3, C_Granite4, C_Granite5, C_Granite6] },
                { title: tm.countertops.porcelain.title, images: [C_Porcelain1, C_Porcelain2, C_Porcelain3, C_Porcelain4, C_Porcelain5, C_Porcelain6] }
            ]
        },
        washCounters: {
            title: translations[language].products.washCounters.title,
            thumbnail: W_Wash1,
            subcategories: [
                { title: tm.washCounters.koreanbox.title, images: [W_Wash1, W_Wash2, W_Wash3, W_Wash4] }
            ]
        },
        wardrobes: {
            title: t.cats.wardrobes,
            thumbnail: WR_Wardrobe1,
            subcategories: [
                { title: translations[language].products.wardrobes.title, images: [WR_Wardrobe1, WR_Wardrop2, WR_Wardrop3] }
            ]
        },
        living: {
            title: translations[language].products.living.title,
            thumbnail: L_Living1,
            subcategories: [
                { title: translations[language].products.living.title, images: [L_Living1, L_Living2, L_Living3] }
            ]
        }
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Get flat list of images for current category
    const currentCategoryImages = selectedCategory ? galleryData[selectedCategory].subcategories.flatMap(sub => sub.images) : [];

    const handleNext = useCallback((e) => {
        if (e) e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev + 1) % currentCategoryImages.length);
        }
    }, [selectedImageIndex, currentCategoryImages.length]);

    const handlePrev = useCallback((e) => {
        if (e) e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev - 1 + currentCategoryImages.length) % currentCategoryImages.length);
        }
    }, [selectedImageIndex, currentCategoryImages.length]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedImageIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, handleNext, handlePrev]);

    const openImage = (img) => {
        const index = currentCategoryImages.indexOf(img);
        setSelectedImageIndex(index);
    };

    return (
        <section className="py-32 bg-bg-primary" id="gallery">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 max-w-[600px] mx-auto">
                    <h2 className="text-5xl font-bold mb-4 tracking-tight text-text-main font-heading">{t.title}</h2>
                    <p className="text-text-muted">{t.subtitle}</p>
                </div>

                {/* Main Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(2,300px)] gap-6">
                    {/* Kitchens */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-2 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('kitchens')}
                    >
                        <Image src={galleryData.kitchens.thumbnail} alt="Kitchens" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <div className="text-center text-white p-4">
                                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{translations[language].nav.models}</span>
                                <span className="text-2xl font-bold tracking-wider">{galleryData.kitchens.title}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Wardrobes */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('wardrobes')}
                    >
                        <Image src={galleryData.wardrobes.thumbnail} alt="Wardrobes" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <div className="text-center text-white p-4">
                                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{translations[language].nav.models}</span>
                                <span className="text-xl font-bold tracking-wider">{galleryData.wardrobes.title}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Countertops */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('countertops')}
                    >
                        <Image src={galleryData.countertops.thumbnail} alt="Countertops" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <div className="text-center text-white p-4">
                                <span className="text-xl font-bold tracking-wider">{galleryData.countertops.title}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Wash Counters */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('washCounters')}
                    >
                        <Image src={galleryData.washCounters.thumbnail} alt="Wash Counters" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <div className="text-center text-white p-4">
                                <span className="text-lg font-bold tracking-wider">{galleryData.washCounters.title}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Sub-Category/Detail Modal */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        className="fixed inset-0 bg-bg-primary z-[2000] overflow-y-auto"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="max-w-[1400px] mx-auto px-6 py-20">
                            <button
                                className={`fixed top-10 ${language === 'ar' ? 'left-10' : 'right-10'} z-[2010] bg-white shadow-xl p-3 rounded-full text-text-main hover:text-accent transition-all hover:scale-110`}
                                onClick={() => setSelectedCategory(null)}
                            >
                                <X size={28} />
                            </button>

                            <div className="mb-20 text-center lg:text-left">
                                <span className="text-accent font-bold tracking-[0.3em] uppercase mb-4 block">{translations[language].nav.models} / {galleryData[selectedCategory].title}</span>
                                <h3 className="text-4xl md:text-6xl font-bold text-text-main font-heading">{galleryData[selectedCategory]?.title}</h3>
                            </div>

                            {/* Grouped Subcategories */}
                            <div className="space-y-32">
                                {galleryData[selectedCategory]?.subcategories.map((sub, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="h-[1px] flex-1 bg-border/30"></div>
                                            <h4 className="text-2xl font-bold tracking-tight text-text-main">{sub.title}</h4>
                                            <div className="h-[1px] flex-1 bg-border/30"></div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {sub.images.map((img, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="aspect-[4/3] relative overflow-hidden rounded-xl border border-border/10 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                                                    onClick={() => openImage(img)}
                                                >
                                                    <Image src={img} alt={`${sub.title} ${idx}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                            <Maximize2 className="text-text-main" size={20} />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pure Fullscreen Lightbox */}
            <AnimatePresence mode="wait">
                {selectedImageIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-[3000] flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Navigation Arrows */}
                        <button
                            className={`absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[3010] text-white/50 hover:text-white transition-all p-4 md:p-6 rounded-full hover:bg-white/10 ${language === 'ar' ? 'rotate-180' : ''}`}
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <button
                            className={`absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[3010] text-white/50 hover:text-white transition-all p-4 md:p-6 rounded-full hover:bg-white/10 ${language === 'ar' ? 'rotate-180' : ''}`}
                            onClick={handleNext}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <motion.div
                            key={selectedImageIndex}
                            className="relative w-full h-full flex items-center justify-center"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={currentCategoryImages[selectedImageIndex]}
                                alt="Fullscreen Display"
                                className="w-full h-full object-contain select-none"
                                priority
                            />

                            <button
                                className="absolute top-0 right-0 p-4 text-white/70 hover:text-white transition-colors"
                                onClick={() => setSelectedImageIndex(null)}
                            >
                                <X size={40} />
                            </button>

                            {/* Counter & Hint */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
                                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
                                    {selectedImageIndex + 1} / {currentCategoryImages.length}
                                </div>
                                <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
                                    Click anywhere to exit
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
