"use client";

import React from 'react';

export function TargetAudience() {
    const audience = [
        { title: 'CEO', desc: 'تحويل قسم التسويق من جهة "تستنزف الموارد" لمركز "أصول" يرفع قيمة الشركة السوقية.' },
        { title: 'CMO', desc: 'تتكلم مع مجلس الإدارة بلغة الأرقام والاستدامة اللي يحبونها بدل لغة اللايكات.' },
        { title: 'راعي حلال', desc: 'تدور شريك استراتيجي يفهم "لغة البزنس" قبل لا يفهم "لغة التريند".' },
        { title: 'مسوّق ذكي', desc: 'حمّل التقرير وأرسله لمديرك.. خله يشوف إنك مهتم بمصلحة البزنس مو بس "صرف ميزانية".' }
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-brand-navy rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
                    <h2 className="text-4xl font-black mb-12 text-center">هل هذا التقرير لك؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {audience.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                                <div className="text-brand-red font-bold mb-4 group-hover:scale-110 transition-transform">{item.title}</div>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Decors */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
