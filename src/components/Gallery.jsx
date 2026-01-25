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

const galleryData = {
    kitchens: {
        title: 'Signature Kitchens',
        description: 'Bespoke culinary spaces designed for the modern gourmet. Our signature kitchens blend high-performance functionality with breathtaking aesthetics, featuring seamless joinery and premium materials.',
        details: {
            title: 'Culinary Masterpiece',
            description: 'This design features our signature joinery work, combining functionality with clean, modern aesthetics. Note the seamless integration of lighting and the premium haptic finish of the surfaces.',
            materials: 'Natural Oak, Carrara Marble, Brushed Brass',
            finish: 'Matte Lacquer, Hand-Polished Stone',
            dimensions: 'Custom tailored to space'
        },
        images: [heroImage, kitchen1, kitchen2]
    },
    wardrobes: {
        title: 'Premium Wardrobes',
        description: 'Elevate your daily ritual with our custom-designed walk-in wardrobes. Every compartment is thoughtfully engineered to organize and display your collection with elegance.',
        details: {
            title: 'Sartorial Elegance',
            description: 'A sanctuary for your style. Our wardrobes feature integrated ambient lighting, soft-close mechanisms, and bespoke compartments for jewelry and accessories.',
            materials: 'Walnut Veneer, Tinted Glass, Leather',
            finish: 'Satin Oil, Anodized Aluminum',
            dimensions: 'Floor-to-ceiling customization'
        },
        images: [wardrobeImage, wardrobeImage, wardrobeImage]
    },
    materials: {
        title: 'Exquisite Materials',
        description: 'We source the finest materials from around the globe. From rare stones to sustainable woods, every texture is chosen to evoke a sense of luxury and permanence.',
        details: {
            title: 'Material Truth',
            description: 'Experience the raw beauty of natural materials. We select each slab of stone and veneer of wood for its unique character and grain pattern.',
            materials: 'Calacatta Viola, Solid Euro Oak, Bronze',
            finish: 'Honed, Brushed, Oiled',
            dimensions: 'Variable slab sizes'
        },
        images: [marbleImage, marbleImage]
    },
    decor: {
        title: 'Curated Décor',
        description: 'The finishing touches that make a house a home. Our curated selection of furniture and accessories complements our interior architecture perfectly.',
        details: {
            title: 'Artful Living',
            description: 'Sculptural forms meet functional design. Each piece is selected to create a cohesive narrative throughout the living space.',
            materials: 'Ceramic, Hand-blown Glass, Textile',
            finish: 'Glazed, Woven, Textured',
            dimensions: 'Curated selection'
        },
        images: [accessoriesImage, accessoriesImage]
    }
};

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-32 bg-bg-primary" id="gallery">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 max-w-[600px] mx-auto">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-text-main">Curated Interiors</h2>
                    <p className="text-text-muted">Explore our collection of bespoke designs tailored for modern living.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(2,300px)] gap-6">
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-2 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('kitchens')}
                    >
                        <Image src={heroImage} alt="Luxury Kitchen" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">Signature Kitchens</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-2 h-[300px] md:h-auto"
                        onClick={() => setSelectedCategory('wardrobes')}
                    >
                        <Image src={wardrobeImage} alt="Walk-in Wardrobe" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">Premium Wardrobes</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('materials')}
                    >
                        <Image src={marbleImage} alt="Material Detail" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">Exquisite Materials</span>
                        </div>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group md:col-span-1 md:row-span-1 h-[300px]"
                        onClick={() => setSelectedCategory('decor')}
                    >
                        <Image src={accessoriesImage} alt="Decor & Accessories" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                            <span className="text-white font-medium text-lg tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">Curated Décor</span>
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
                            <button className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors" onClick={() => setSelectedCategory(null)}>
                                <X size={32} />
                            </button>
                            <h3 className="text-white text-3xl font-bold mb-2">{galleryData[selectedCategory]?.title}</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl">{galleryData[selectedCategory]?.description}</p>

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
                                    <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">Interior Details</span>
                                    <h3 className="text-3xl font-bold text-text-main mb-4">{galleryData[selectedCategory]?.details.title}</h3>
                                    <p className="text-text-muted leading-relaxed mb-6">
                                        {galleryData[selectedCategory]?.details.description}
                                    </p>
                                </div>

                                {/* Additional Angles / Gallery Strip */}
                                <div className="mb-8">
                                    <h5 className="text-sm font-semibold text-text-main mb-3">View Angles</h5>
                                    <div className="grid grid-cols-4 gap-2">
                                        {galleryData[selectedCategory]?.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`aspect-square relative rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === img ? 'border-accent' : 'border-transparent hover:border-gray-300'}`}
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
                                    <button className="w-full bg-text-main text-bg-primary font-medium py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                                        Inquire About This Design
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
