"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
        }, 2500); // 2.5 seconds loading time
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center"
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                    <div className="relative">
                        <motion.h1
                            className="text-2xl md:text-3xl font-bold tracking-tighter text-text-main mb-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            AxoraKitchens
                        </motion.h1>
                        <div className="h-0.5 w-full bg-bg-secondary rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-text-main"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.3, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
