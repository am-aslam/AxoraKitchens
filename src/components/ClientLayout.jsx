"use client";

import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import ChatAssistant from '@/components/ChatAssistant';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/components/ThemeProvider';

export default function ClientLayout({ children }) {
    const [loadingComplete, setLoadingComplete] = useState(false);

    return (
        <ThemeProvider>
            <LoadingScreen onComplete={() => setLoadingComplete(true)} />
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
}
