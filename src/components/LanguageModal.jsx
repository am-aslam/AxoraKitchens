"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

const LanguageModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if language has been selected before
        const savedLang = localStorage.getItem('axora_lang');
        if (!savedLang) {
            // Add a small delay for smoother entrance
            const timer = setTimeout(() => setIsOpen(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSelectArabic = () => {
        toggleLanguage('ar');
        setIsOpen(false);
    };

    const handleSkip = () => {
        // Skip implies English/Default
        toggleLanguage('en');
        setIsOpen(false);
    };

    if (!mounted || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
                onClick={handleSkip} // Clicking outside skips/closes
            />

            {/* Modal Card */}
            <div className="relative bg-bg-secondary w-full max-w-md rounded-2xl shadow-2xl p-8 transform transition-all duration-500 scale-100 animate-in fade-in zoom-in-95 border border-border/20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2 text-text-main">Select Your Language</h2>
                    <p className="text-xl font-arabic text-text-muted mb-8">اختر لغتك</p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleSelectArabic}
                            className="w-full bg-accent text-bg-primary hover:bg-accent/90 font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg text-lg flex items-center justify-center gap-2 font-arabic"
                        >
                            العربية
                        </button>

                        <button
                            onClick={handleSkip}
                            className="w-full text-text-muted hover:text-text-main font-medium py-2 transition-colors text-sm uppercase tracking-wider"
                        >
                            Skip / تخطي
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
