"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-slate-400/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 relative">
                    {/* Logo - Centered */}
                    <div className="flex items-center">
                        <Link href="/" onClick={closeMobileMenu}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/15 to-slate-300/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                                <Image
                                    className="relative transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                                    src="/blockbasedicon.svg"
                                    alt="BlockBased logo"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Positioned absolutely on the right */}
                    <div className="md:hidden absolute right-0">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-400/10"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-xl rounded-lg border border-slate-400/20 mt-2 mb-4">
                            {/* Mobile navigation links removed - coming soon */}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}