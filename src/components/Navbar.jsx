"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { effectiveTheme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-[var(--header-height)] z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-text-main">
                    AxoraKitchens
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#home" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/#about" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/#services" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/#products" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group">
                        Products
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-text-main hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {effectiveTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link href="/#contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-accent text-bg-primary border border-accent font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md uppercase tracking-wider">
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden flex-col gap-1.5 cursor-pointer" onClick={toggleMenu}>
                    <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-[var(--header-height)] left-0 w-full bg-bg-primary border-b border-border p-6 flex flex-col gap-6 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-y-0 shadow-xl' : '-translate-y-[150%]'
                    }`}
            >
                <Link href="/#home" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-muted hover:text-text-main">Home</Link>
                <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-muted hover:text-text-main">About</Link>
                <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-muted hover:text-text-main">Services</Link>
                <Link href="/#products" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-muted hover:text-text-main">Products</Link>
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-muted hover:text-text-main">Contact</Link>
                <div className="flex items-center justify-between mt-2">
                    <button className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-accent text-bg-primary border border-accent font-medium text-sm uppercase tracking-wider">
                        Get Quote
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-3 ml-4 rounded-full text-text-main border border-border bg-bg-secondary"
                    >
                        {effectiveTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
