"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function StrategicQuestions() {
    const questions = [
        { src: '/question-1.jpg', q: 'السؤال الأول' },
        { src: '/question-2.jpg', q: 'السؤال الثاني' },
        { src: '/question-3.jpg', q: 'السؤال الثالث' }
    ];

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">تساؤلات استراتيجية</span>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">أسئلة تصنع الفارق في نمو منظمتك</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        الإجابة على هذه التساؤلات هي ما يفرق بين الشركات التي "تصرف" والشركات التي "تستثمر".
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {questions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group cursor-pointer"
                        >
                            <Image
                                src={item.src}
                                alt={item.q}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
