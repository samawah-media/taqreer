"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Users } from 'lucide-react';

export function DownloadForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 1. Trigger download IMMEDIATELY (don't wait for API)
        const link = document.createElement('a');
        link.href = '/samawah-report-2025.pdf';
        link.download = 'تقرير-سماوة-للأصول-الإعلامية.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 2. Show success state immediately
        setIsSuccess(true);
        setIsSubmitting(false);

        // 3. Send data to API in background (non-blocking)
        try {
            await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            // We don't care if it fails - user already got the PDF
        } catch (error) {
            console.error('Background API submission failed', error);
        }
    };

    return (
        <section id="download" className="py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">جاهز تقلب الموازين؟</h2>
                    <p className="text-gray-500">املأ البيانات ويوصلك التقرير فوراً على إيميلك</p>
                </div>

                {!isSuccess ? (
                    <div className="space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-10 rounded-[32px] border border-gray-100 shadow-xl">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 px-2">الاسم بالكامل</label>
                                    <div className="relative">
                                        <input
                                            required
                                            type="text"
                                            placeholder="محمد أحمد"
                                            className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all pr-12"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 px-2">الإيميل المهني</label>
                                    <div className="relative">
                                        <input
                                            required
                                            type="email"
                                            placeholder="name@company.com"
                                            className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all pr-12 text-left"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <Download className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rotate-180" size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-4 px-2">
                                    * سيتم إرسال نسخة من التقرير إلى بريدك الإلكتروني فوراً.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-xl hover:bg-opacity-95 transition-all shadow-lg shadow-brand-red/30 disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? "جاري المعالجة..." : "حمّل التقرير الحصري الحين"}
                                <Download size={24} />
                            </button>
                            <p className="text-center text-xs text-gray-400 py-2">
                                "هالتقرير انكتب عشان يُقرأ في غرف الاجتماعات، مو للتصفح السريع. انضم للنخبة."
                            </p>
                        </form>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 border border-green-100 p-12 rounded-[40px] text-center"
                    >
                        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-green-200">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-green-900 mb-4">تم التسجيل بنجاح!</h3>
                        <p className="text-green-800 mb-8">إذا لم يبدأ التحميل تلقائياً، اضغط على الزر أدناه:</p>

                        <a
                            href="/samawah-report-2025.pdf"
                            download="تقرير-سماوة-للأصول-الإعلامية.pdf"
                            className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg mb-6"
                        >
                            <Download size={24} />
                            تحميل التقرير الآن (PDF)
                        </a>

                        <div className="block">
                            <button onClick={() => setIsSuccess(false)} className="text-gray-400 text-sm hover:underline">تسجيل بريد آخر؟</button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
