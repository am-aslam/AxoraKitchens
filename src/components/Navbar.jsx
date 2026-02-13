"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { effectiveTheme, toggleTheme } = useTheme();
  const { language, toggleLanguage, direction } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      dir={direction}
      className={`fixed top-0 left-0 w-full h-[var(--header-height)] z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-text-main"
        >
          <div className="relative w-42 h-16 md:w-50 md:h-20">
            <Image
              src={logo}
              alt="AxoraKitchens Logo"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#home"
            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all relative group"
          >
            {t.home}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all relative group"
          >
            {t.about}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all relative group"
          >
            {t.services}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#products"
            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all relative group"
          >
            {t.products}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all relative group"
          >
            {t.contact}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex bg-bg-secondary rounded-full p-1 border border-border">
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${language === "en" ? "bg-accent text-bg-primary" : "text-text-muted hover:text-text-main"}`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage("ar")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${language === "ar" ? "bg-accent text-bg-primary" : "text-text-muted hover:text-text-main"}`}
            >
              AR
            </button>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-accent text-bg-primary border border-accent font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md uppercase tracking-wider"
          >
            {t.getQuote}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="flex md:hidden flex-col gap-1.5 cursor-pointer text-current"
          onClick={toggleMenu}
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        dir={direction}
        className={`absolute top-[var(--header-height)] left-0 w-full bg-bg-primary border-b border-border p-6 flex flex-col gap-6 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-y-0 shadow-xl" : "-translate-y-[150%]"
        }`}
      >
        <Link
          href="/#home"
          onClick={() => setIsMenuOpen(false)}
          className="text-base font-medium text-text-muted hover:text-text-main"
        >
          {t.home}
        </Link>
        <Link
          href="/#about"
          onClick={() => setIsMenuOpen(false)}
          className="text-base font-medium text-text-muted hover:text-text-main"
        >
          {t.about}
        </Link>
        <Link
          href="/#services"
          onClick={() => setIsMenuOpen(false)}
          className="text-base font-medium text-text-muted hover:text-text-main"
        >
          {t.services}
        </Link>
        <Link
          href="/#products"
          onClick={() => setIsMenuOpen(false)}
          className="text-base font-medium text-text-muted hover:text-text-main"
        >
          {t.products}
        </Link>

        <Link
          href="/#contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-base font-medium text-text-muted hover:text-text-main"
        >
          {t.contact}
        </Link>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex bg-bg-secondary rounded-full p-1 border border-border">
              <button
                onClick={() => toggleLanguage("en")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${language === "en" ? "bg-accent text-bg-primary" : "text-text-muted hover:text-text-main"}`}
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage("ar")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${language === "ar" ? "bg-accent text-bg-primary" : "text-text-muted hover:text-text-main"}`}
              >
                العربية
              </button>
            </div>
          </div>
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-accent text-bg-primary border border-accent font-medium text-sm uppercase tracking-wider"
          >
            {t.getQuote}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
