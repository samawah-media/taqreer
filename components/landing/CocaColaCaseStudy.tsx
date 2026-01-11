"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CocaColaCaseStudy() {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Image src="/report-cover-2025.png" alt="Logo" width={60} height={60} className="w-16 h-auto drop-shadow-2xl" />
                            <span className="text-brand-red font-bold tracking-widest uppercase">2006</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-8">
                            كيف تروي قصة الشركة وتعزز ارتباطها العاطفي؟
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                واجهت كوكاكولا تحديًا مألوفًا لكثير من العلامات العالمية: كيف يمكن للإعلان أن يتجاوز دوره التقليدي كحملة قصيرة المدى، ليصبح أداة تروي قصة الشركة وتعزز ارتباطها العاطفي مع الجمهور؟
                            </p>
                            <p className="border-r-4 border-brand-red pr-6 italic">
                                "الإجابة جاءت من خلال مشروع مصنع السعادة (Happiness Factory)، الذي بدأ كإعلان مدته ستين ثانية وانتهى كنموذج متكامل لإدارة المخرجات الإعلامية كأصل تراكمي."
                            </p>
                        </div>
                    </motion.div>

                    {/* Video Side - YouTube Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl bg-black aspect-video group">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/7W33HRc1A6c?rel=0&controls=1&modestbranding=1"
                                title="Coca-Cola Happiness Factory"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            {/* Overlay Ring */}
                            <div className="absolute inset-0 border-4 border-white/5 rounded-[2.5rem] pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
