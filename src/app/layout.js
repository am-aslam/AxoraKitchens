import { Inter, Oswald, Tajawal } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--font-tajawal" });

export const metadata = {
  title: "AxoraKitchens - Luxury Interior Design",
  description: "Crafting bespoke luxury interiors for the modern home. Elevating lifestyles through exceptional design and craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${oswald.variable} ${tajawal.variable} bg-bg-primary text-text-main antialiased`}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
