"use client";

import React from 'react';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="py-12 border-t border-gray-100 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image src="/samawah-logo.png" alt="Logo" width={120} height={50} />
                        <p className="text-sm text-gray-500 font-medium max-w-xs text-center md:text-right">
                            نحو تحويل المخرجات الإعلامية إلى أصول استراتيجية ترفع قيمة الشركات.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                        <div className="grid grid-cols-4 gap-4">
                            <a href="https://x.com/Samawah_1" target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/samawah_media/" target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.353-2.621-6.779-6.979-6.979C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="https://www.tiktok.com/@samawah_media" target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.525.021c1.11-.027 2.22-.054 3.32-.081 0 1.262-.014 2.523.012 3.784.814.014 1.626.046 2.434.135.034.961.16 1.936.467 2.846.366.92 1.01 1.705 1.745 2.3.01 1.134.02 2.268.03 3.402-1.29-.023-2.585-.147-3.832-.47-1.15-.314-2.22-.84-3.15-1.554-.01 1.767.012 3.53-.02 5.295-.034 1.838-.456 3.674-1.42 5.234-1.39 2.152-3.843 3.626-6.427 3.626-1.53.012-3.053-.332-4.4-1.012a8.773 8.773 0 01-3.486-3.46c-.958-1.74-1.201-3.79-.696-5.717.382-1.35 1.24-2.54 2.37-3.4-.44 2.8.44 5.75 2.45 7.85 1.17 1.15 2.76 1.83 4.41 1.83 2.126 0 4.102-1.127 5.16-2.96 1.085-1.91 1.018-4.254.897-6.326v-11.4c1.137-.024 2.274-.047 3.411-.07z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@Samawah_media" target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <a href="https://samawah.store/" target="_blank" className="text-gray-600 hover:text-brand-red font-bold transition-all underline decoration-brand-red/30">متجر سماوة</a>
                            <a href="https://wa.me/966537276942" target="_blank" className="text-gray-600 hover:text-brand-red font-bold transition-all">+966 53 727 6942</a>
                            <a href="mailto:info@samawah.com.sa" className="text-gray-600 hover:text-brand-red font-bold transition-all">info@samawah.com.sa</a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400 font-medium">
                    © 2025 جميع الحقوق محفوظة لشركة سماوة. صنع بشغف لمدراء المستقبل.
                </div>
            </div>
        </footer>
    );
}
