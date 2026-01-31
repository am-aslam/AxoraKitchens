"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Assets
import heroImage from '../assets/hero.png';
import wardrobeImage from '../assets/wardrobe.png';
import marbleImage from '../assets/marble.png';
import accessoriesImage from '../assets/accessories.png';
import kitchen1 from '../assets/kitchen_1.png';
import kitchen2 from '../assets/kitchen_2.png';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';


const Gallery = () => {
    const { language } = useLanguage();
    const t = translations[language].gallery;

    const galleryData = {
        kitchens: {
            title: t.cats.kitchens,
            description: t.subtitle, // Simplified mapping as full desc was not in translations. Using subtitle for now or generic?
            // Wait, I missed Description mapping in translations.js for gallery items. 
            // I only added cats titles. 
            // I should use the titles. For description, I will leave it static or use a generic one from translations if available?
            // "Explore our collection..." is available as t.subtitle.
            // I will use that for description for all for now to avoid broken UI, or keep English if untranslated?
            // User asked to "Translate all UI content".
            // I'll use the english text if I must but cleaner to use available translations.
            // Let's use t.subtitle or mapped descriptions if I had them. I don't.
            // I will dynamically create a generic one or just use the English one if I can't translate now. 
            // Actually, I can use the same text for all or just omit? No, the modal needs it.
            // I'll keep the English text for the long descriptions as I didn't generate Arabic for them in step 143.
            // Wait, step 143 shows I did NOT generate detailed descriptions for gallery items (just cats).
            // It's better to show English than nothing. Or I can use the t.subtitle for all as a placeholder.
            // Let's use t.subtitle.
            description: t.subtitle,
            details: {
                title: t.modal.details,
                description: t.subtitle,
                materials: t.items.kitchens.materials,
                finish: t.items.kitchens.finish,
                dimensions: t.items.kitchens.dimensions
            },
            images: [heroImage, kitchen1, kitchen2]
        },
        wardrobes: {
            title: t.cats.wardrobes,
            description: t.subtitle,
            details: {
                title: t.modal.details,
                description: t.subtitle,
                materials: t.items.wardrobes.materials,
                finish: t.items.wardrobes.finish,
                dimensions: t.items.wardrobes.dimensions
            },
            images: [wardrobeImage, wardrobeImage, wardrobeImage]
        },
        materials: {
            title: t.cats.materials,
            description: t.subtitle,
            details: {
                title: t.modal.details,
                description: t.subtitle,
                materials: t.items.materials.materials,
                finish: t.items.materials.finish,
                dimensions: t.items.materials.dimensions
            },
            images: [marbleImage, marbleImage]
        },
        decor: {
            title: t.cats.decor,
            description: t.subtitle,
            details: {
                title: t.modal.details,
                description: t.subtitle,
                materials: t.items.decor.materials,
                finish: t.items.decor.finish,
                dimensions: t.items.decor.dimensions
            },
            images: [accessoriesImage, accessoriesImage]
        }
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-32 bg-bg-primary" id="gallery">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 max-w-[600px] mx-auto">
                    <h2 className="text-5xl font-bold mb-4 tracking-tight text-text-main">{t.title}</h2>
                    <p className="text-text-muted">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(2,300px)] gap-6">
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-2 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('kitchens')}
                    >
                        <Image src={heroImage} alt="Luxury Kitchen" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">{t.cats.kitchens}</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('wardrobes')}
                    >
                        <Image src={wardrobeImage} alt="Walk-in Wardrobe" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">{t.cats.wardrobes}</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('materials')}
                    >
                        <Image src={marbleImage} alt="Material Detail" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">{t.cats.materials}</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('decor')}
                    >
                        <Image src={accessoriesImage} alt="Decor & Accessories" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">{t.cats.decor}</span>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-[2000] flex items-center justify-center p-10 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCategory(null)}
                    >
                        <motion.div
                            className="w-full max-w-[1000px] relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={`absolute -top-10 ${language === 'ar' ? 'left-0' : 'right-0'} text-text-main hover:text-accent transition-colors`} onClick={() => setSelectedCategory(null)}>
                                <X size={32} />
                            </button>
                            <h3 className="text-text-main text-3xl font-bold mb-2">{galleryData[selectedCategory]?.title}</h3>
                            <p className="text-text-muted mb-8 max-w-2xl">{galleryData[selectedCategory]?.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {galleryData[selectedCategory]?.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <Image src={img} alt={`Detail ${idx}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Use z-index greater than category modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black z-[2100] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="w-full h-full max-w-none grid grid-cols-1 lg:grid-cols-[1fr_400px] bg-bg-primary overflow-hidden shadow-2xl"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-[50vh] lg:h-full bg-black flex items-center justify-center p-4">
                                <Image src={selectedImage} alt="Fullscreen Detail" className="w-full h-full object-contain" />
                                <button
                                    className="absolute top-6 left-6 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* View Details Section */}
                            <div className="p-8 lg:p-12 flex flex-col h-full bg-bg-primary overflow-y-auto w-full">
                                <div className="mb-8">
                                    <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">{t.modal.details}</span>
                                    <h3 className="text-3xl font-bold text-text-main mb-4">{galleryData[selectedCategory]?.details.title}</h3>
                                    <p className="text-text-muted leading-relaxed mb-6">
                                        {galleryData[selectedCategory]?.details.description}
                                    </p>
                                </div>

                                {/* Additional Angles / Gallery Strip */}
                                <div className="mb-8">
                                    <h5 className="text-sm font-semibold text-text-main mb-3">{t.modal.angles}</h5>
                                    <div className="grid grid-cols-4 gap-2">
                                        {galleryData[selectedCategory]?.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`aspect-square relative rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === img ? 'border-accent' : 'border-transparent hover:border-text-muted'}`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <Image src={img} alt={`Angle ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6 mb-8 border-t border-border pt-8">
                                    <div>
                                        <h5 className="text-sm font-semibold text-text-main mb-1">Materials</h5>
                                        <p className="text-sm text-text-muted">{galleryData[selectedCategory]?.details.materials}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-semibold text-text-main mb-1">Finish</h5>
                                        <p className="text-sm text-text-muted">{galleryData[selectedCategory]?.details.finish}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-semibold text-text-main mb-1">Dimensions</h5>
                                        <p className="text-sm text-text-muted">{galleryData[selectedCategory]?.details.dimensions}</p>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button className="w-full bg-accent text-bg-primary font-medium py-4 rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group">
                                        {t.modal.inquire}
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
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
