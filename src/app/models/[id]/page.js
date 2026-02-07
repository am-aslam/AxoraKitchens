"use client";

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Maximize, PlayCircle, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import { modelsData } from '@/utils/modelsData';
import { useLanguage } from '@/context/LanguageContext';


export default function ModelDetail({ params }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;
    const model = modelsData[id];
    const { language, direction } = useLanguage();

    // Initialize state for gallery
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Lock body scroll when fullscreen
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFullscreen]);

    if (!model) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Model Not Found</h2>
                <Link href="/" className="text-accent underline">Back to Home</Link>
            </div>
        );
    }

    const content = model[language] || model.en;
    const images = model.images || [model.image];

    // Localized Timeline
    const timeline = language === 'ar' ? [
        { title: 'استشارة', desc: 'تقييم الخبراء وتحليل الاحتياجات.' },
        { title: 'قياس', desc: 'قياس دقيق بالليزر لمساحتك.' },
        { title: 'تصميم', desc: 'تصور ثلاثي الأبعاد واختيار المواد.' },
        { title: 'تركيب', desc: 'تركيب احترافي من قبل فريق معتمد.' }
    ] : [
        { title: 'Consultation', desc: 'Expert assessment and needs analysis.' },
        { title: 'Measurement', desc: 'Precision laser measurement of your space.' },
        { title: 'Design', desc: '3D Visualization and material finalization.' },
        { title: 'Installation', desc: 'Professional installation by certified team.' }
    ];

    const nextImage = (e) => {
        e?.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="pt-32 pb-20 min-h-screen bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <Link href={`/categories/${model.type}`} className="inline-flex items-center text-text-muted hover:text-text-main mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to {model.category}s
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Image Area */}
                    <div className="flex flex-col gap-4">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-bg-secondary group">
                            <Image
                                src={images[selectedImage]}
                                alt={content.title}
                                className="object-cover transition-opacity duration-300"
                                fill
                                priority
                            />

                            {/* Navigation Arrows (Main View) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 z-20"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-20"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-6 left-6 z-10 flex gap-3">
                                <button
                                    onClick={() => setIsFullscreen(true)}
                                    className="bg-white/90 backdrop-blur text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider hover:bg-white flex items-center gap-2 transition-all shadow-lg"
                                >
                                    <Maximize size={14} /> Fullscreen
                                </button>
                            </div>
                            <div className="absolute top-6 right-6 z-10">
                                <div className="bg-accent text-bg-primary text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                                    {model.origin}
                                </div>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === idx
                                            ? 'border-accent ring-2 ring-accent/20 scale-105'
                                            : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`View ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-bg-secondary text-xs font-bold uppercase tracking-widest text-text-muted rounded-full mb-4">{model.category}</span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-text-main mb-6 tracking-tight">{model.title}</h1>
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-accent text-accent" />
                                ))}
                                <span className="text-sm text-text-muted ml-2">(Popular Choice)</span>
                            </div>
                            <p className="text-lg text-text-muted leading-relaxed mb-8 border-l-4 border-accent pl-6">
                                {content.desc}
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{language === 'ar' ? 'المواصفات الرئيسية' : 'Key Specifications'}</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                {content.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-text-muted">
                                        <Check size={18} className="text-green-500 mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                                <li className="flex items-center text-text-muted font-medium">
                                    <div className="w-4 h-4 rounded-full bg-accent/20 mr-3 shrink-0 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </div>
                                    {language === 'ar' ? 'التشطيب:' : 'Finish:'} {content.finish}
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-border">
                            <div>
                                <p className="text-sm text-text-muted mb-1">Price Category</p>
                                <p className="text-2xl font-bold text-text-main">{model.price}</p>
                            </div>
                            <Link href="/#contact" className="w-full sm:w-auto flex-1 bg-accent text-white font-medium py-4 px-8 rounded-md uppercase tracking-wider hover:bg-zinc-800 transition-all hover:-translate-y-0.5 shadow-lg text-center">
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Working Progress / Process Timeline */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest">Production Process</h3>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {timeline.map((step, idx) => (
                                <div key={idx} className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-6 z-10">
                                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-white">
                                        {idx + 1}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                    <p className="text-sm text-text-muted">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fullscreen Modal */}
                {isFullscreen && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
                        <button
                            onClick={() => setIsFullscreen(false)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center">
                            {images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 z-50 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
                                >
                                    <ChevronLeft size={48} />
                                </button>
                            )}

                            <div className="relative w-full h-full">
                                <Image
                                    src={images[selectedImage]}
                                    alt={content.title}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>

                            {images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 z-50 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
                                >
                                    <ChevronRight size={48} />
                                </button>
                            )}

                            {/* Modal Dots Indicator */}
                            {images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === selectedImage ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
