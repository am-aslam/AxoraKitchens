import { Playfair_Display, Outfit, Tajawal } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageModal from "@/components/LanguageModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--font-tajawal" });

export const metadata = {
    title: "AxoraKitchens - Luxury Interior Design",
    description: "Crafting bespoke luxury interiors for the modern home. Elevating lifestyles through exceptional design and craftsmanship.",
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true}>
            <body className={`${playfair.variable} ${outfit.variable} ${tajawal.variable} bg-bg-primary text-text-main antialiased`}>
                <LanguageProvider>
                    <LanguageModal />
                    <WhatsAppButton />
                    <ClientLayout>{children}</ClientLayout>
                </LanguageProvider>
            </body>
        </html>
    );
}
