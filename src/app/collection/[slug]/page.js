"use client";

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import heroImage from '@/assets/hero.png';
import wardrobeImage from '@/assets/wardrobe.png';
import marbleImage from '@/assets/marble.png';
import accessoriesImage from '@/assets/accessories.png';
import kitchen1 from '@/assets/kitchen_1.png';
import kitchen2 from '@/assets/kitchen_2.png';
import livingImage from '@/assets/living.png';
import bathImage from '@/assets/bath.png';

// Generate more images for density
const generateImages = (baseImages) => {
    return [...baseImages, ...baseImages, ...baseImages]; // 3x the images
};

const collectionsData = {
    kitchens: {
        title: 'Signature Kitchens',
        description: 'Where culinary excellence meets bespoke design.',
        images: generateImages([heroImage, kitchen1, kitchen2, kitchen1])
    },
    wardrobes: {
        title: 'Premium Wardrobes',
        description: 'Organize your life with elegance and style.',
        images: generateImages([wardrobeImage, wardrobeImage, wardrobeImage])
    },
    living: {
        title: 'Luxury Living',
        description: 'Comfort and sophistication for your living spaces.',
        images: generateImages([livingImage, livingImage, livingImage])
    },
    bath: {
        title: 'Serene Bathrooms',
        description: 'Your private sanctuary for relaxation.',
        images: generateImages([bathImage, bathImage, bathImage])
    }
};

export default function CollectionPage({ params }) {
    const { slug } = use(params);
    const collection = collectionsData[slug];
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedImageIndex]);

    if (!collection) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Collection Not Found</h2>
                <Link href="/#products" className="text-accent underline">Back to Collections</Link>
            </div>
        );
    }

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % collection.images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + collection.images.length) % collection.images.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') handleNext(e);
        if (e.key === 'ArrowLeft') handlePrev(e);
        if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    useEffect(() => {
        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImageIndex]);


    return (
        <section className="pt-32 pb-20 min-h-screen bg-bg-primary">
            <div className="max-w-[1400px] mx-auto px-6">
                <Link href="/#products" className="inline-flex items-center text-text-muted hover:text-text-main mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Collections
                </Link>

                <div className="text-center mb-16 max-w-[800px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-text-main"
                    >
                        {collection.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-text-muted"
                    >
                        {collection.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {collection.images.map((img, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            key={idx}
                            className={`relative overflow-hidden rounded-xl shadow-md cursor-pointer group ${idx % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                            onClick={() => setSelectedImageIndex(idx)}
                        >
                            <Image
                                src={img}
                                alt={`${collection.title} Image ${idx + 1}`}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Maximize className="text-white w-8 h-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[110]">
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-[110]"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-[110]"
                            onClick={handleNext}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={collection.images[selectedImageIndex]}
                                alt="Full screen preview"
                                className="object-contain max-w-full max-h-full"
                                priority
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                                {selectedImageIndex + 1} / {collection.images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
