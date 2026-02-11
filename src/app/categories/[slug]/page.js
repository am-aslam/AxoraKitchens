"use client";

import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

import { modelsData } from '@/utils/modelsData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const ModelCard = ({ id, model }) => {
    const { language, direction } = useLanguage();
    const content = model[language] || model.en;

    const [currentImage, setCurrentImage] = useState(0);
    const images = model.images || [model.image];

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block bg-bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/10"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link href={`/models/${id}`} className="absolute inset-0 z-10" />
                <Image
                    src={images[currentImage]}
                    alt={content.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0`}
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-white w-3' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{content.category}</span>
                        <h3 className="text-xl font-bold text-text-main mb-2">{content.title}</h3>
                    </div>
                </div>
                <p className="text-text-muted text-sm line-clamp-2 mb-6 h-10">{content.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-text-muted">{model.price}</span>
                    <Link href={`/models/${id}`} className="flex items-center text-accent font-bold text-sm uppercase tracking-wide hover:text-text-main transition-colors gap-2">
                        {language === 'ar' ? 'التفاصيل' : 'View Details'}
                        <ArrowRight size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function CategoryPage({ params }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;
    const { language, direction } = useLanguage();

    // Check if the slug matches a specific model ID directly
    const specificModel = modelsData[slug];

    if (specificModel) {
        const content = specificModel[language] || specificModel.en;
        const images = specificModel.images || [specificModel.image];
        const [currentImage, setCurrentImage] = useState(0);

        const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
        const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

        return (
            <section className="pt-32 pb-20 min-h-screen bg-bg-primary">
                <div className="max-w-[1400px] mx-auto px-6">
                    <Link href="/" className="inline-flex items-center text-text-muted hover:text-text-main mb-8 transition-colors">
                        <ArrowLeft size={20} className={`mr-2 ${language === 'ar' ? 'rotate-180 ml-2 mr-0' : ''}`} /> {language === 'ar' ? 'الرجوع' : 'Back'}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src={images[currentImage]}
                                alt={content.title}
                                fill
                                className="object-cover"
                            />
                            {images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all">
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Model Details */}
                        <div>
                            <span className="text-sm font-bold text-accent uppercase tracking-wider mb-2 block">{content.category}</span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-text-main">{content.title}</h1>

                            {content.quote && (
                                <blockquote className="text-xl italic text-text-muted mb-6 border-l-4 border-accent pl-4 font-body">
                                    "{content.quote}"
                                </blockquote>
                            )}

                            <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl">
                                {content.desc}
                            </p>

                            <div className="bg-bg-secondary p-8 rounded-xl border border-border/10 mb-8">
                                <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'المميزات' : 'Key Features'}</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {content.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-text-muted">
                                            <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-accent text-bg-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition-all w-full sm:w-auto text-center"
                            >
                                {language === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                                <ArrowRight size={20} className={direction === 'rtl' ? 'rotate-180' : ''} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Filter models for Category View
    const categoryModels = Object.entries(modelsData).filter(([key, data]) => data.type === slug);

    // Initial check for valid categories that don't have models yet
    const specialCategories = ['wardrobes', 'living'];
    // Only show the special details view if there are NO models available
    const isSpecialCategory = specialCategories.includes(slug) && categoryModels.length === 0;

    if (categoryModels.length === 0 && !isSpecialCategory) {
        return notFound();
    }

    const t = translations[language].categories || {};
    // Fallback to products translation for descriptions if needed
    const tProducts = translations[language].products || {};

    let title = slug;
    let description = "";

    // Title & Description Logic
    if (slug === 'kitchens') {
        title = language === 'ar' ? 'المطابخ' : 'Kitchens';
    } else if (slug === 'countertops') {
        title = language === 'ar' ? 'الأسطح' : 'Countertops';
    } else if (slug === 'wash-counters') {
        title = language === 'ar' ? 'المغاسل' : 'Wash Counters';
    } else if (slug === 'wardrobes') {
        title = tProducts.wardrobes?.title || (language === 'ar' ? 'الخزائن' : 'Wardrobes');
        description = tProducts.wardrobes?.desc || "";
    } else if (slug === 'living') {
        title = tProducts.living?.title || (language === 'ar' ? 'غرف المعيشة' : 'Living Rooms');
        description = tProducts.living?.desc || "";
    }

    return (
        <section className="pt-32 pb-20 min-h-screen bg-bg-primary">
            <div className="max-w-[1400px] mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-text-muted hover:text-text-main mb-12 transition-colors">
                    <ArrowLeft size={20} className={`mr-2 ${language === 'ar' ? 'rotate-180 ml-2 mr-0' : ''}`} /> {language === 'ar' ? 'الرئيسية' : 'Back to Home'}
                </Link>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">{title}</h1>
                    <p className="text-text-muted max-w-2xl text-lg">
                        {description || (language === 'ar' ? 'استكشف مجموعتنا المتميزة.' : 'Explore our premium collection.')}
                    </p>
                </div>

                {isSpecialCategory ? (
                    <div className="bg-bg-secondary rounded-2xl p-12 text-center border border-border/10 shadow-sm max-w-3xl mx-auto">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-text-main">
                                {language === 'ar' ? 'تصميم مخصص لك' : 'Tailored Design Solutions'}
                            </h3>
                            <p className="text-text-muted text-lg mb-8 leading-relaxed">
                                {language === 'ar'
                                    ? `استفسر الآن للحصول على تفاصيل أكثر حول ${title}. فريقنا مستعد لتصميم الحل الأمثل لمساحتك.`
                                    : `Inquire now for more details about our ${title}. Our team is ready to design the perfect solution for your space.`
                                }
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-accent text-bg-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                                {language === 'ar' ? 'اطلب استشارة' : 'Request Consultation'}
                                <ArrowRight size={20} className={direction === 'rtl' ? 'rotate-180' : ''} />
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryModels.map(([key, model]) => (
                            <ModelCard key={key} id={key} model={model} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
