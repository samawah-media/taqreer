"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">
                        تقرير استراتيجي حصري لعام 2025
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                        ميزانيتك التسويقية.. <br />
                        <span className="text-brand-red text-shadow-sm">قاعد "تحرقها" ولا "تستثمرها"؟</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                        أول تقرير استراتيجي يطلعك من دوامة "لعبة المشاهدات" ويدخلك عمق "مجالس الإدارة". وقف ضخ فلوس في حملات مؤقتة، وابدأ ابنِ "محفظة أصول إعلامية" تعيش معك سنين.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#download" className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center gap-3">
                            <Download size={24} />
                            حمّل التقرير الحين
                        </a>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            <CheckCircle2 className="text-green-500" size={18} />
                            أكثر من 500+ مدير تنفيذي حمّلوا التقرير
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <Image src="/report-cover-2025.png" alt="Samawah Authentic Report Cover 2025" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
