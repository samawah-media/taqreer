"use client";

import React from 'react';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="relative h-10 w-32">
                    <Image src="/samawah-logo.png" alt="Samawah Logo" fill className="object-contain" />
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <span className="text-gray-400 text-sm font-medium">سماوة للإنتاج المرئي والمسموع</span>
                </div>
            </div>
        </nav>
    );
}
