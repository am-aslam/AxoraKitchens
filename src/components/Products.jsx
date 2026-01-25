"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Maximize2, Box } from 'lucide-react';
import heroImage from '../assets/hero.png';
import wardrobeImage from '../assets/wardrobe.png';
import livingImage from '../assets/living.png';
import bathImage from '../assets/bath.png';

const products = [
    {
        id: 'kitchens',
        title: 'Kitchens',
        shortDesc: 'Open-plan designs featuring grand islands and breakfast bars.',
        desc: 'Experience the heart of the home reimagined. Our open-plan kitchens feature grand marble islands, state-of-the-art appliances, and ergonomic layouts designed for both culinary mastery and social gatherings. Every detail, from the soft-close cabinetry to the integrated lighting, is crafted to elevate your cooking experience.',
        image: heroImage,
    },
    {
        id: 'wardrobes',
        title: 'Wardrobes',
        shortDesc: 'Bespoke storage solutions with glass fronts and integrated lighting.',
        desc: 'Transform your daily routine with our bespoke wardrobe systems. Featuring floor-to-ceiling glass fronts, automated internal lighting, and custom organizers for jewelry and accessories. Our designs maximize storage efficiency while displaying your collection like a high-end boutique.',
        image: wardrobeImage,
    },
    {
        id: 'living',
        title: 'Living',
        shortDesc: 'Comfortable, stylish living room setups tailored to your needs.',
        desc: 'Create a sanctuary of comfort and style. Our living room solutions blend modular shelving, concealed media units, and warm wood accents to create a cohesive aesthetic. Designed to facilitate relaxation and conversation, these spaces are the perfect backdrop for modern life.',
        image: livingImage,
    },
    {
        id: 'bath',
        title: 'Bath',
        shortDesc: 'Luxurious bathroom interiors for your personal spa experience.',
        desc: 'Indulge in the tranquility of a personal spa. Our bathroom interiors combine waterproof engineered woods, natural stone vanities, and ambient lighting to create a serene retreat. We focus on clean lines and smart storage to maintain a clutter-free, restorative environment.',
        image: bathImage,
    }
];

export const Products = () => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [is3DView, setIs3DView] = React.useState(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setSelectedImage(product.image);
        setIs3DView(false);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setSelectedImage(null);
        setIsLightboxOpen(false);
        setIs3DView(false);
    };

    // Images for the view angles strip
    const getViewAngles = (mainImg) => [mainImg, heroImage, wardrobeImage, livingImage].slice(0, 4);

    const handleImageClick = () => {
        const images = getViewAngles(selectedProduct.image);
        const index = images.indexOf(selectedImage || selectedProduct.image);
        setCurrentImageIndex(index !== -1 ? index : 0);
        setIsLightboxOpen(true);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const images = getViewAngles(selectedProduct.image);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const images = getViewAngles(selectedProduct.image);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const currentLightboxImage = selectedProduct ? getViewAngles(selectedProduct.image)[currentImageIndex] : null;

    return (
        <section className="py-32 bg-bg-secondary" id="products">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-[600px] mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-text-main">Our Collections</h2>
                    <p className="text-text-muted">Discover our range of premium interior solutions.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
                        >
                            <div
                                className="relative h-[300px] overflow-hidden cursor-pointer"
                                onClick={() => openModal(product)}
                            >
                                <Image src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Quick View</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-text-main">{product.title}</h3>
                                <p className="text-text-muted mb-8 leading-relaxed flex-1">{product.shortDesc}</p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => openModal(product)}
                                        className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text-main hover:text-accent border-b border-text-main hover:border-accent pb-1 transition-colors self-start"
                                    >
                                        View Details
                                    </button>
                                    <Link href={`/collection/${product.id}`} className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text-muted hover:text-text-main border-b border-transparent hover:border-text-main pb-1 transition-colors self-start">
                                        View Gallery
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Product Details Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 z-[2100] flex items-center justify-center backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="w-full h-[90vh] max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] bg-bg-primary rounded-xl overflow-hidden shadow-2xl m-6"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Main Image Section */}
                            <div className="relative h-full bg-bg-secondary group">
                                {is3DView ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-bg-secondary text-text-muted relative">
                                        <button
                                            className="absolute top-6 left-6 text-gray-400 hover:text-gray-900 bg-white/50 hover:bg-white p-2 rounded-full transition-all"
                                            onClick={() => setIs3DView(false)}
                                        >
                                            <X size={20} />
                                        </button>
                                        <Box size={64} className="mb-4 text-accent animate-pulse" />
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">3D Configurator Loaded</h4>
                                        <p className="text-sm">Interactive 3D view is ready.</p>
                                    </div>
                                ) : (
                                    <>
                                        <Image
                                            src={selectedImage || selectedProduct.image}
                                            alt={selectedProduct.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer"
                                            onClick={handleImageClick}
                                        >
                                            <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                                <Maximize2 size={18} /> Fullscreen
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* View Details Section */}
                            <div className="p-12 flex flex-col h-full bg-bg-primary overflow-y-auto relative">
                                <button
                                    className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors"
                                    onClick={closeModal}
                                >
                                    <X size={28} />
                                </button>

                                <div className="mb-8 mt-4">
                                    <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">Interior Details</span>
                                    <h3 className="text-4xl font-bold text-text-main mb-6">{selectedProduct.title} Collection</h3>
                                    <p className="text-text-muted leading-relaxed text-lg mb-8">
                                        {selectedProduct.desc} Experience the perfect blend of functionality and aesthetics with our {selectedProduct.title.toLowerCase()} systems. Designed for modern living.
                                    </p>
                                </div>

                                {/* Additional Angles / Gallery Strip with 3D Toggle */}
                                <div className="mb-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">View Angles</h5>
                                        <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md">3D Enabled</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {getViewAngles(selectedProduct.image).map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === img || (currentLightboxImage === img && isLightboxOpen) ? 'border-gray-900 ring-1 ring-gray-900' : 'border-transparent hover:border-gray-300'}`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <Image src={img} alt={`Angle ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        {/* 3D View Placeholder Button */}
                                        <div
                                            className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer border-2 hover:border-accent bg-gray-50 flex flex-col items-center justify-center transition-colors group/3d ${is3DView ? 'border-accent text-accent' : 'border-gray-200 text-gray-500 hover:text-accent'}`}
                                            onClick={() => setIs3DView(true)}
                                        >
                                            <div className="w-10 h-10 border-2 border-current rounded-lg flex items-center justify-center mb-1 group-hover/3d:scale-110 transition-transform">
                                                <span className="font-bold text-sm">3D</span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">View</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Production Plan Timeline */}
                                <div className="mb-10">
                                    <h5 className="text-sm font-semibold text-text-main mb-6 uppercase tracking-wider">Production Plan</h5>
                                    <div className="relative border-l-2 border-border ml-3 space-y-8 pb-2">
                                        <div className="relative pl-8">
                                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-text-main border-4 border-bg-primary"></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">Consultation & Design</h6>
                                            <p className="text-sm text-text-muted">In-depth discussion and 3D visualization of your bespoke interior.</p>
                                        </div>
                                        <div className="relative pl-8">
                                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-bg-primary"></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">Material Selection</h6>
                                            <p className="text-sm text-text-muted">Choosing premium woods, stones, and finishes from our curated collection.</p>
                                        </div>
                                        <div className="relative pl-8">
                                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-bg-primary"></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">Craftsmanship</h6>
                                            <p className="text-sm text-text-muted">Precision manufacturing by master artisans in our state-of-the-art facility.</p>
                                        </div>
                                        <div className="relative pl-8">
                                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-bg-primary"></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">Installation & Care</h6>
                                            <p className="text-sm text-text-muted">White-glove delivery, professional installation, and after-sales support.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10 border-t border-gray-100 pt-10">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">Materials</h5>
                                            <p className="text-sm text-text-muted">Premium Wood, Italian Stone</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">Finish</h5>
                                            <p className="text-sm text-text-muted">Matte Lacquer, Hand-Polished</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">Customize</h5>
                                            <p className="text-sm text-text-muted">15+ Finishes Available</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">Warranty</h5>
                                            <p className="text-sm text-text-muted">10-Year Guarantee</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href="/#contact"
                                        onClick={closeModal}
                                        className="w-full bg-gray-900 text-white font-bold py-5 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 group text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        Request Consultation
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pure Fullscreen Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-[2200] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 rounded-full bg-black/20 hover:bg-black/50 transition-all z-20"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            className="absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 rounded-full bg-black/20 hover:bg-black/50 transition-all z-20"
                            onClick={nextImage}
                        >
                            <ChevronRight size={40} />
                        </button>

                        <motion.div
                            className="relative w-full h-full p-4 md:p-10"
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Image
                                src={currentLightboxImage}
                                alt="Fullscreen View"
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </motion.div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                            {currentImageIndex + 1} / {getViewAngles(selectedProduct?.image).length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export const CustomCTA = () => {
    return (
        <section className="py-24 bg-accent text-bg-primary">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Need a Custom Solution?</h2>
                        <p className="text-gray-300 text-lg">
                            Our expert designers can create a personalized layout tailored to your specific space and lifestyle requirements.
                        </p>
                    </div>
                    <Link href="/#contact" className="whitespace-nowrap bg-bg-primary text-text-main font-bold py-4 px-8 rounded-md hover:bg-bg-secondary transition-colors shadow-lg uppercase tracking-wider">
                        Request Custom Design
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
