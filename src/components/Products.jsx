"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Assets
// Assets
import Kitch from "@/assets/Kitchens/egger1.png";
import Kitch1 from "@/assets/Kitchens/egger3.png";

import wardrobeImage from "@/assets/Wardrobes/wardrobe1.jpg";
import wardrobeImage1 from "@/assets/Wardrobes/wardrop3.png";
import wardrobeImage2 from "@/assets/Wardrobes/wardrop2.png";

import livingImage from "@/assets/Living/living3.png";
import livingImage1 from "@/assets/Living/living2.png";
import Korean from "@/assets/Counter Top/Korean/CTK.png";
import Granite from "@/assets/Counter Top/Granite/granite.png";
import Quartz from "@/assets/Counter Top/quartz/quartz.png";
import Wash1 from "@/assets/Wash Counters/wash1.png";
import Wash2 from "@/assets/Wash Counters/wash2.png";

// Context & Utils
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const ProductCard = ({ product, t, direction }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-border/20 hover:border-accent/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block relative h-[250px] overflow-hidden">
        <Link
          href={`/categories/${product.slug}`}
          className="absolute inset-0 z-10"
        />

        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
          {product.images[currentImage] && (product.images[currentImage].src || typeof product.images[currentImage] === 'string') ? (
            <Image
              src={product.images[currentImage]}
              alt={product.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-bg-secondary flex items-center justify-center">
              <span className="text-text-muted text-xs">Image unavailable</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

        {/* Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {product.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? "bg-white w-3" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-20 bg-bg-secondary">
        <h3 className="text-xl font-bold mb-2 text-text-main group-hover:text-accent transition-colors">
          <Link href={`/categories/${product.slug}`}>{product.title}</Link>
        </h3>
        <p className="text-sm text-text-muted mb-6 leading-relaxed flex-1 line-clamp-3">
          {product.desc}
        </p>

        <Link
          href={`/categories/${product.slug}`}
          className="text-sm font-bold uppercase tracking-wider text-accent hover:text-text-main transition-colors flex items-center gap-2 self-start mt-auto"
        >
          {t.viewDetails || "Explore"}
          <ArrowRight
            className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${direction === "rtl" ? "rotate-180" : ""}`}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export const Products = () => {
  const { language, direction } = useLanguage();
  const t = translations[language].products;

  const products = [
    {
      id: "kitchens",
      slug: "kitchens",
      title: t.kitchens.title,
      desc: t.kitchens.desc,
      image: Kitch,
      images: [Kitch, Kitch1],
    },
    {
      id: "countertops",
      slug: "countertops",
      title: t.countertops.title,
      desc: t.countertops.desc,
      image: Korean,
      images: [Granite, Quartz],
    },
    {
      id: "washCounters",
      slug: "wash-counters",
      title: t.washCounters.title,
      desc: t.washCounters.desc,
      image: Wash1,
      images: [Wash1, Wash2],
    },
    {
      id: "wardrobes",
      slug: "wardrobes",
      title: t.wardrobes.title,
      desc: t.wardrobes.desc,
      image: wardrobeImage,
      images: [wardrobeImage1, wardrobeImage2],
    },
    {
      id: "living",
      slug: "living",
      title: t.living.title,
      desc: t.living.desc,
      image: livingImage,
      images: [livingImage, livingImage1],
    },
  ];

  return (
    <section className="py-32 bg-bg-primary" id="products">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-[600px] mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-inherit">
            {t.title}
          </h2>
          <p className="opacity-80">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              t={t}
              direction={direction}
            />
          ))}
        </motion.div>
      </div>

      <CustomCTA />
    </section>
  );
};

export const CustomCTA = () => {
  const { language } = useLanguage();
  // Fallback if translations aren't fully loaded yet
  const t = translations[language]?.products || {};

  return (
    <section className="py-24 bg-accent text-bg-primary mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              {t.customTitle || "Need a Custom Solution?"}
            </h2>
            <p className="text-bg-primary/80 text-lg">
              {t.customDesc ||
                "Contact our design team to create a bespoke interior solution tailored to your space."}
            </p>
          </div>
          <Link
            href="/#contact"
            className="whitespace-nowrap bg-bg-primary text-text-main font-bold py-4 px-8 rounded-md hover:bg-bg-secondary transition-colors shadow-lg uppercase tracking-wider"
          >
            {t.requestCustom || "Request Consultation"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
