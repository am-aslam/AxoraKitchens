"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [direction, setDirection] = useState('ltr');

    useEffect(() => {
        // Load persist language
        const savedLang = localStorage.getItem('axora_lang');
        if (savedLang) {
            setLanguage(savedLang);
            setDirection(savedLang === 'ar' ? 'rtl' : 'ltr');
        }
    }, []);

    const toggleLanguage = (lang) => {
        const newLang = lang;
        setLanguage(newLang);
        const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
        setDirection(newDir);
        localStorage.setItem('axora_lang', newLang);

        // Update document attributes for accessibility and styling
        document.documentElement.lang = newLang;
        document.documentElement.dir = newDir;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
            <div dir={direction} className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
