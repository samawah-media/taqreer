"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp, Percent, Building2, Users } from 'lucide-react';

export function BentoGrid() {
    return (
        <section className="py-24 bg-gray-50 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-brand-navy text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4 inline-block tracking-wide">
                        محتوى حصري من التقرير 🔒
                    </span>
                    <h2 className="text-4xl font-black mb-4 underline decoration-brand-red decoration-4 transition-all">خارطة التحول الاستراتيجي</h2>
                    <p className="text-gray-500">خارطة طريق مالية وإدارية لتحويل الإعلام إلى قيمة ثابتة</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                    {/* Asset Mindset Card */}
                    <motion.div whileHover={{ y: -5 }} className="md:col-span-2 row-span-1 glass-card p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-lg transition-all border border-gray-200">
                        <div className="bg-brand-red w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-red/20">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">معادلة "الصرف vs الاستثمار"</h3>
                            <p className="text-gray-600">كيف تقلب موازين ميزانيتك وتفرق بين العقلية اللي "تطير الفلوس" والعقلية اللي "تبني أصول".</p>
                        </div>
                    </motion.div>

                    {/* Zain vs MBC */}
                    <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-1 row-span-2 bg-brand-navy text-white p-8 rounded-3xl relative overflow-hidden group shadow-xl">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <Percent size={24} className="text-brand-red" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">مواجهة (Zain vs MBC)</h3>
                                <p className="text-gray-300 mb-6">تحليل جريء يحلل ليش فيه براند يرسخ في الذاكرة سنين، وبراند ثاني يفشل رغم ضخامة الإنتاج.</p>
                                <div className="relative h-40 w-full rounded-2xl overflow-hidden mt-4">
                                    <Image src="/chart-zain.png" alt="Zain Chart" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>

                    {/* Disney Map */}
                    <motion.div whileHover={{ y: -5 }} className="md:col-span-1 row-span-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                            <Building2 size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">خلطة ديزني (The Disney Map)</h3>
                            <p className="text-gray-500 text-sm italic">نموذج يخليك تطلع من الأصل الواحد عشرة مصادر دخل.</p>
                        </div>
                    </motion.div>

                    {/* Decision Makers */}
                    <motion.div whileHover={{ y: -5 }} className="md:col-span-1 row-span-1 bg-gradient-to-br from-brand-red to-pink-600 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between">
                        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">لصنّاع القرار فقط</h3>
                            <p className="text-white/80 text-sm">الإطار اللي بيخلي فريقك يوقف يكتب "للمنصات" ويبدأ يكتب "للتاريخ ولصناع القرار".</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
