"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-slate-400/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 relative">
                    {/* Logo - Centered */}
                    <div className="flex items-center">
                        <Link href="/">
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


                </div>


            </div>
        </header>
    );
}