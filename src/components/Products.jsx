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

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

// Move static images outside or potential re-imports inside if keeping array logic
// For cleaner code, I'll reconstruct the array inside the component using the imported images.

export const Products = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].products;

    const products = [
        {
            id: 'kitchens',
            title: t.kitchens.title,
            shortDesc: t.kitchens.short,
            desc: t.kitchens.desc,
            image: heroImage,
        },
        {
            id: 'wardrobes',
            title: t.wardrobes.title,
            shortDesc: t.wardrobes.short,
            desc: t.wardrobes.desc,
            image: wardrobeImage,
        },
        {
            id: 'living',
            title: t.living.title,
            shortDesc: t.living.short,
            desc: t.living.desc,
            image: livingImage,
        },
        {
            id: 'bath',
            title: t.bath.title,
            shortDesc: t.bath.short,
            desc: t.bath.desc,
            image: bathImage,
        }
    ];

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
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-text-main">{t.title}</h2>
                    <p className="text-text-muted">{t.subtitle}</p>
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
                                    <span className="bg-bg-secondary/90 text-text-main px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.quickView}</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-text-main">{product.title}</h3>
                                <p className="text-text-muted mb-8 leading-relaxed flex-1">{product.shortDesc}</p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => openModal(product)}
                                        className={`inline-flex items-center text-sm font-medium uppercase tracking-wider text-text-main hover:text-accent border-b border-text-main hover:border-accent pb-1 transition-colors self-start ${direction === 'rtl' ? 'ml-0 mr-0' : ''}`}
                                    >
                                        {t.viewDetails}
                                    </button>
                                    <Link href={`/collection/${product.id}`} className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-text-muted hover:text-text-main border-b border-transparent hover:border-text-main pb-1 transition-colors self-start">
                                        {t.viewGallery}
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
                                            className={`absolute top-6 ${direction === 'rtl' ? 'right-6' : 'left-6'} text-text-muted hover:text-text-main bg-bg-primary/50 hover:bg-bg-primary p-2 rounded-full transition-all`}
                                            onClick={() => setIs3DView(false)}
                                        >
                                            <X size={20} />
                                        </button>
                                        <Box size={64} className="mb-4 text-accent animate-pulse" />
                                        <h4 className="text-xl font-bold text-text-main mb-2">{t.threeD.loaded}</h4>
                                        <p className="text-sm">{t.threeD.ready}</p>
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
                                            <span className="opacity-0 group-hover:opacity-100 bg-accent text-bg-primary px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                                <Maximize2 size={18} /> {t.fullscreen}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* View Details Section */}
                            <div className="p-12 flex flex-col h-full bg-bg-primary overflow-y-auto relative">
                                <button
                                    className="absolute top-8 right-8 text-text-muted hover:text-text-main transition-colors"
                                    onClick={closeModal}
                                >
                                    <X size={28} />
                                </button>

                                <div className="mb-8 mt-4">
                                    <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">{t.modal.details}</span>
                                    <h3 className="text-5xl font-bold text-text-main mb-6">{selectedProduct.title}</h3>
                                    <p className="text-text-muted leading-relaxed text-lg mb-8">
                                        {selectedProduct.desc}
                                    </p>
                                </div>

                                {/* Additional Angles / Gallery Strip with 3D Toggle */}
                                <div className="mb-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-sm font-semibold text-text-main uppercase tracking-wider">{t.angles}</h5>
                                        <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md">{t.threeD.enabled}</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {getViewAngles(selectedProduct.image).map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === img || (currentLightboxImage === img && isLightboxOpen) ? 'border-accent ring-1 ring-accent' : 'border-transparent hover:border-text-muted'}`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <Image src={img} alt={`Angle ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        {/* 3D View Placeholder Button */}
                                        <div
                                            className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer border-2 hover:border-accent bg-bg-secondary flex flex-col items-center justify-center transition-colors group/3d ${is3DView ? 'border-accent text-accent' : 'border-border text-text-muted hover:text-accent'}`}
                                            onClick={() => setIs3DView(true)}
                                        >
                                            <div className="w-10 h-10 border-2 border-current rounded-lg flex items-center justify-center mb-1 group-hover/3d:scale-110 transition-transform">
                                                <span className="font-bold text-sm">3D</span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">{t.threeD.view}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Production Plan Timeline */}
                                <div className="mb-10">
                                    <h5 className="text-sm font-semibold text-text-main mb-6 uppercase tracking-wider">{t.productionPlan}</h5>
                                    <div className={`relative ${direction === 'rtl' ? 'border-r-2 mr-3 pr-8' : 'border-l-2 ml-3 pl-8'} border-border space-y-8 pb-2`}>
                                        <div className="relative">
                                            <span className={`absolute ${direction === 'rtl' ? '-right-[41px]' : '-left-[41px]'} top-1 w-4 h-4 rounded-full bg-text-main border-4 border-bg-primary`}></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">{t.steps.consultation.title}</h6>
                                            <p className="text-sm text-text-muted">{t.steps.consultation.desc}</p>
                                        </div>
                                        <div className="relative">
                                            <span className={`absolute ${direction === 'rtl' ? '-right-[41px]' : '-left-[41px]'} top-1 w-4 h-4 rounded-full bg-text-muted border-4 border-bg-primary`}></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">{t.steps.material.title}</h6>
                                            <p className="text-sm text-text-muted">{t.steps.material.desc}</p>
                                        </div>
                                        <div className="relative">
                                            <span className={`absolute ${direction === 'rtl' ? '-right-[41px]' : '-left-[41px]'} top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-bg-primary`}></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">{t.steps.craft.title}</h6>
                                            <p className="text-sm text-text-muted">{t.steps.craft.desc}</p>
                                        </div>
                                        <div className="relative">
                                            <span className={`absolute ${direction === 'rtl' ? '-right-[41px]' : '-left-[41px]'} top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-bg-primary`}></span>
                                            <h6 className="text-sm font-bold text-text-main mb-1">{t.steps.install.title}</h6>
                                            <p className="text-sm text-text-muted">{t.steps.install.desc}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10 border-t border-border pt-10">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">{t.modal.materials}</h5>
                                            <p className="text-sm text-text-muted">{t.modal.materialsValue}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">{t.modal.finish}</h5>
                                            <p className="text-sm text-text-muted">{t.modal.finishValue}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">{t.modal.customize}</h5>
                                            <p className="text-sm text-text-muted">{t.modal.customizeValue}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-text-main mb-1">{t.modal.warranty}</h5>
                                            <p className="text-sm text-text-muted">{t.modal.warrantyValue}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href="/#contact"
                                        onClick={closeModal}
                                        className="w-full bg-accent text-bg-primary font-bold py-5 rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-3 group text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        {t.modal.request}
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
    const { language } = useLanguage();
    const t = translations[language].products;
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.customTitle}</h2>
                        <p className="text-bg-primary/80 text-lg">
                            {t.customDesc}
                        </p>
                    </div>
                    <Link href="/#contact" className="whitespace-nowrap bg-bg-primary text-text-main font-bold py-4 px-8 rounded-md hover:bg-bg-secondary transition-colors shadow-lg uppercase tracking-wider">
                        {t.requestCustom}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
