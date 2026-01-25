import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-bg-secondary text-text-main py-20 pb-10 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-16">
                    <div className="col-span-1 md:col-span-1 md:col-start-auto footer-brand">
                        <h2 className="text-text-main text-2xl font-bold mb-6 tracking-tight">AxoraKitchens</h2>
                        <p className="text-text-muted leading-relaxed max-w-[300px]">
                            Crafting bespoke luxury interiors for the modern home.
                            Elevating lifestyles through exceptional design and craftsmanship.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#home" className="text-text-muted hover:text-text-main transition-colors duration-300">Home</Link></li>
                            <li><Link href="#about" className="text-text-muted hover:text-text-main transition-colors duration-300">About</Link></li>
                            <li><Link href="#services" className="text-text-muted hover:text-text-main transition-colors duration-300">Services</Link></li>
                            <li><Link href="#contact" className="text-text-muted hover:text-text-main transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">Collections</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-text-muted hover:text-text-main transition-colors duration-300">Kitchens</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-text-main transition-colors duration-300">Wardrobes</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-text-main transition-colors duration-300">Living</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-text-main transition-colors duration-300">Bath</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">Connect</h4>
                        <ul className="flex gap-4">
                            <li><Link href="#" aria-label="Instagram" className="text-text-muted hover:text-text-main transition-colors duration-300"><Instagram size={24} /></Link></li>
                            <li><Link href="#" aria-label="Twitter" className="text-text-muted hover:text-text-main transition-colors duration-300"><Twitter size={24} /></Link></li>
                            <li><Link href="#" aria-label="LinkedIn" className="text-text-muted hover:text-text-main transition-colors duration-300"><Linkedin size={24} /></Link></li>
                            <li><Link href="#" aria-label="Facebook" className="text-text-muted hover:text-text-main transition-colors duration-300"><Facebook size={24} /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-10 text-sm text-text-muted flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                    <p>&copy; 2026 AxoraKitchens. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="#" className="hover:text-text-main transition-colors duration-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-text-main transition-colors duration-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
