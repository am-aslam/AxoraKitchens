"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! Welcome to AxoraKitchens. I am your AI Design Assistant. How can I help you customize your dream space today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // User Message
        const userMsg = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response (Mock Logic)
        setTimeout(() => {
            let botResponse = "I'd accept that. Please schedule a consultation for more details.";
            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                botResponse = "Our bespoke kitchens typically start from $15,000, depending on materials and size. Would you like to get a quote?";
            } else if (lowerInput.includes('material') || lowerInput.includes('wood')) {
                botResponse = "We use premium sustainable Oak, Walnut, and Italian Marble. You can view samples in our Gallery.";
            } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
                botResponse = "We are located in Sib, Oman. You can find our exact location on the map in the Contact section.";
            } else if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
                botResponse = "You can book a consultation directly through our Contact form below. We offer both online and in-person meetings.";
            } else if (lowerInput.includes('3d') || lowerInput.includes('design')) {
                botResponse = "We offer comprehensive 3D visualization services. You can see a preview in our Product Details section!";
            }

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-[5000] w-14 h-14 bg-accent text-bg-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 10 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-[5000] w-[350px] md:w-[400px] h-[500px] bg-bg-primary rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden font-sans"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="bg-accent p-4 text-bg-primary flex items-center gap-3 shadow-md">
                            <div className="w-10 h-10 bg-bg-primary/10 rounded-full flex items-center justify-center">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Axora AI Assistant</h3>
                                <div className="flex items-center gap-1.5 opacity-80">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-xs">Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-bg-secondary space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 text-sm rounded-xl leading-relaxed shadow-sm ${msg.type === 'user'
                                            ? 'bg-text-main text-bg-primary rounded-tr-none'
                                            : 'bg-bg-primary text-text-main border border-border rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-bg-primary border border-border p-3 rounded-xl rounded-tl-none flex gap-1 items-center shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 bg-bg-primary border-t border-border flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about kitchens, wardrobes..."
                                className="flex-1 bg-bg-secondary text-sm px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-text-main transition-all text-text-main placeholder:text-text-muted"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-text-main text-bg-primary rounded-full flex items-center justify-center hover:opacity-90 transition-colors shadow-md disabled:opacity-50"
                                disabled={!inputValue.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatAssistant;
