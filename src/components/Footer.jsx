import React from "react";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const tNav = translations[language].nav;
  return (
    <footer className="bg-bg-secondary text-text-main py-20 pb-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-16">
          <div className="col-span-1 md:col-span-1 md:col-start-auto footer-brand">
            <h2 className="text-text-main text-3xl font-bold mb-6 tracking-tight">
              AxoraKitchens
            </h2>
            <p className="text-text-muted leading-relaxed max-w-[300px]">
              {t.brandQuote}
            </p>
          </div>

          <div>
            <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#home"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  {tNav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  {tNav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  {tNav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  {tNav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">
              {t.collections}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#products"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  Kitchens
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  Wardrobes
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  Living
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  Bath
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main text-base font-bold mb-6 uppercase tracking-wider">
              {t.connect}
            </h4>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="https://www.instagram.com/axorakitchens?igsh=azAwajg1bGNlNms4"
                  aria-label="Instagram"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  <Instagram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  <Twitter size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-text-muted hover:text-text-main transition-colors duration-300"
                >
                  <Facebook size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 text-sm text-text-muted flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p>&copy; 2026 AxoraKitchens. {t.rights}</p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="hover:text-text-main transition-colors duration-300"
            >
              {t.privacy}
            </Link>
            <Link
              href="#"
              className="hover:text-text-main transition-colors duration-300"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
