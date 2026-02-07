"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';
import { Check, Star, ArrowRight, ShieldCheck, Droplets, Flame } from 'lucide-react';

// Using available assets
import kitchen1 from '@/assets/kitchen_1.png';
import kitchen2 from '@/assets/kitchen_2.png';
import marble from '@/assets/marble.png';
import bath from '@/assets/bath.png';
import hero from '@/assets/hero.png';

const ModelsPage = () => {
    const { language, direction } = useLanguage();
    const t = translations[language].modelsPage;
    const isRTL = direction === 'rtl';

    const kitchenModels = [
        { key: 'egger', img: kitchen1 },
        { key: 'glossy', img: kitchen2 },
        { key: 'multiwood', img: kitchen1 },
        { key: 'pvc', img: kitchen2 },
        { key: 'aluminium', img: kitchen1 },
    ];

    const countertops = [
        { key: 'korean', img: marble },
        { key: 'quartz', img: marble },
        { key: 'porcelain', img: marble },
        { key: 'granite', img: marble }, // Reusing marble for granite as placeholder
    ];

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] bg-bg-primary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={hero}
                        alt="Models Hero"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6 font-primary">{t.title}</h1>
                    <p className="text-lg md:text-2xl text-text-muted max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Kitchen Models */}
            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">{t.kitchens.title}</h2>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kitchenModels.map((item, index) => {
                        const data = t.kitchens[item.key];
                        return (
                            <div
                                key={item.key}
                                className="group relative bg-bg-secondary rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={data.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                    <div className="absolute top-4 left-4 bg-bg-primary/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-text-main border border-border shadow-sm">
                                        {data.origin}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-text-main mb-2 font-primary">{data.title}</h3>
                                    <p className="text-accent font-medium mb-6 uppercase tracking-wider text-sm">{data.finish}</p>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {data.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-muted/90">
                                                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-accent" />
                                                </div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/models/${item.key}`} className="w-full py-3.5 rounded-xl border border-border text-text-main font-bold hover:bg-accent hover:text-bg-primary transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-accent">
                                        {t.kitchens.viewDetails}
                                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0' : ''}`} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Countertops */}
            <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bg-primary/5 to-transparent pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">{t.countertops.title}</h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {countertops.map((item) => {
                            const data = t.countertops[item.key];
                            return (
                                <Link href={`/models/${item.key}`} key={item.key} className="group text-center p-4 rounded-2xl hover:bg-bg-primary/50 transition-colors duration-300 block">
                                    <div className="relative w-48 h-48 mx-auto mb-8">
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-[spin_10s_linear_infinite]" />
                                        <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-bg-primary shadow-xl">
                                            <Image
                                                src={item.img}
                                                alt={data.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main mb-3">{data.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed px-2">{data.desc}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>


        </main>
    )
}

export default ModelsPage;
