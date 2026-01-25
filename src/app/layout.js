import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AxoraKitchens - Luxury Interior Design",
  description: "Crafting bespoke luxury interiors for the modern home. Elevating lifestyles through exceptional design and craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-bg-primary text-text-main antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
