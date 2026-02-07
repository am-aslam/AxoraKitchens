"use client";

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Maximize, PlayCircle } from 'lucide-react';
import heroImage from '../../../assets/hero.png';
import wardrobeImage from '../../../assets/wardrobe.png';
import marbleImage from '../../../assets/marble.png';

// Mock data
const products = {
    1: {
        id: 1,
        title: 'Island Kitchens',
        desc: 'Open-plan designs featuring grand islands and breakfast bars for social living. Our island kitchens are the epitome of modern luxury, offering a perfect blend of culinary functionality and social space.',
        image: heroImage,
        features: ['Quartz Countertops', 'Soft-close Cabinetry', 'Integrated Smart Lighting', 'Customizable Layouts'],
        price: 'Starting from $15,000'
    },
    2: {
        id: 2,
        title: 'Walk-in Wardrobe System',
        desc: 'Bespoke storage solutions with glass fronts and integrated lighting. Transform your daily routine with a wardrobe that showcases your collection like a luxury boutique.',
        image: wardrobeImage,
        features: ['Tempered Glass Doors', 'Motion-sensor Lighting', 'Velvet-lined Drawers', 'Modular Shelving'],
        price: 'Starting from $8,000'
    },
    3: {
        id: 3,
        title: 'Marble Countertops',
        desc: 'Hand-selected premium stone surfaces for durability and timeless elegance. Each slab is unique, bringing a piece of natural art into your home.',
        image: marbleImage,
        features: ['Italian Carrara Marble', 'Heat & Stain Resistant', 'Custom Edge Profiles', 'Seamless Installation'],
        price: 'Custom Quote'
    }
};

const timeline = [
    { title: 'Consultation', desc: 'Initial meeting to understand your vision.' },
    { title: 'Design', desc: '3D rendering and material selection.' },
    { title: 'Crafting', desc: 'Precision manufacturing in our facility.' },
    { title: 'Installation', desc: 'Professional assembly in your home.' }
];

export default function ProductDetail({ params }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;
    const product = products[id];


    if (!product) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link href="/#products" className="text-accent underline">Back to Collections</Link>
            </div>
        );
    }

    return (
        <section className="pt-32 pb-20 min-h-screen bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <Link href="/#products" className="inline-flex items-center text-text-muted hover:text-text-main mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Collections
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-bg-secondary group">
                        <Image src={product.image} alt={product.title} className="object-cover" fill priority />
                        <div className="absolute bottom-6 left-6 z-10 flex gap-3">
                            <button className="bg-white/90 backdrop-blur text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider hover:bg-white flex items-center gap-2 transition-all shadow-lg">
                                <Maximize size={14} /> Fullscreen
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-bg-secondary text-xs font-bold uppercase tracking-widest text-text-muted rounded-full mb-4">Premium Collection</span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-text-main mb-6 tracking-tight">{product.title}</h1>
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-sm text-text-muted ml-2">(5.0/5 Reviews)</span>
                            </div>
                            <p className="text-lg text-text-muted leading-relaxed mb-8 border-l-4 border-accent pl-6">
                                {product.desc}
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-text-muted">
                                        <Check size={18} className="text-green-500 mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-border">
                            <div>
                                <p className="text-sm text-text-muted mb-1">Estimated Price</p>
                                <p className="text-2xl font-bold text-text-main">{product.price}</p>
                            </div>
                            <Link href="/#contact" className="w-full sm:w-auto flex-1 bg-accent text-white font-medium py-4 px-8 rounded-md uppercase tracking-wider hover:bg-zinc-800 transition-all hover:-translate-y-0.5 shadow-lg text-center">
                                Request Consultation
                            </Link>
                        </div>
                        <div className="mt-4 text-center">
                            <Link href="/models" className="text-sm text-accent hover:underline font-medium">
                                Explore Kitchen Models & Countertops &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Working Progress / Process Timeline */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest">Our Process</h3>
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

            </div>
        </section>
    );
}
