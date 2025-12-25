"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Building2, Briefcase, MapPin, Percent, TrendingUp, Users } from 'lucide-react';
import { signIn, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

function LandingContent() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    job: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Direct Download Action
        const link = document.createElement('a');
        link.href = '/samawah-report-2025.pdf'; // Make sure this file exists in public/
        link.download = 'تقرير-سماوة-للأصول-الإعلامية.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="relative h-10 w-32">
            <Image src="/samawah-logo.png" alt="Samawah Logo" fill className="object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="https://samawah.store/" target="_blank" className="text-gray-600 hover:text-brand-red font-bold transition-colors">المتجر</a>
            <a href="https://wa.me/966537276942" target="_blank" className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all">
              تواصل معنا
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            <Image src="/report-mockup.png" alt="Report Mockup" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Concept - The Deep Dive */}
      <section className="py-20 bg-gray-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 underline decoration-brand-red decoration-4 transition-all">وش بتلقى داخل التقرير؟</h2>
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

      {/* Target Audience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-navy rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
            <h2 className="text-4xl font-black mb-12 text-center">هل هذا التقرير لك؟</h2>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="text-brand-red font-bold mb-4 group-hover:scale-110 transition-transform">CEO</div>
                <p className="text-gray-300">تبي تحول قسم التسويق من جهة "تستنزف الموارد" لمركز "أصول" يرفع قيمة الشركة السوقية.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="text-brand-red font-bold mb-4 group-hover:scale-110 transition-transform">CMO</div>
                <p className="text-gray-300">تبي تتكلم مع مجلس الإدارة بلغة الأرقام والاستدامة اللي يحبونها بدل لغة اللايكات.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="text-brand-red font-bold mb-4 group-hover:scale-110 transition-transform">راعي حلال</div>
                <p className="text-gray-300">تدور شريك استراتيجي يفهم "لغة البزنس" قبل لا يفهم "لغة التريند".</p>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="download" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">جاهز تقلب الموازين؟</h2>
            <p className="text-gray-500">املأ البيانات ويوصلك التقرير فوراً على إيميلك</p>
          </div>

          {!isSuccess ? (
            <div className="space-y-8">
              {/* LinkedIn One-Click */}
              {!session && (
                <button
                  onClick={() => signIn('linkedin')}
                  className="w-full bg-[#0077b5] text-white py-5 rounded-2xl font-bold text-xl hover:bg-opacity-95 transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  التحميل بضغطة واحدة عبر LinkedIn
                </button>
              )}

              {session && (
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-center">
                  <p className="text-blue-800 font-bold mb-4">أهلاً ${session.user?.name}، أنت جاهز للتحميل!</p>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-xl hover:bg-opacity-95 transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    حمّل التقرير الآن <Download size={24} />
                  </button>
                </div>
              )}

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm font-bold">أو يدوياً عبر النموذج</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 px-2">رقم الواتساب</label>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        placeholder="05xxxxxxxx"
                        className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all pr-12 text-left"
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 px-2">المدينة (بالمملكة)</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder="الرياض / جدة"
                        className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all pr-12"
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>
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
              <h3 className="text-3xl font-black text-green-900 mb-4">تم الإرسال بنجاح!</h3>
              <p className="text-green-800 mb-8">رابط التقرير في طريقه لإيميلك الآن. استمتع برحلة التحول.</p>
              <button onClick={() => setIsSuccess(false)} className="text-green-700 font-bold hover:underline">تحميل نسخة ثانية؟</button>
            </motion.div>
          )}

        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default function LandingPage() {
  return (
    <SessionProvider>
      <LandingContent />
    </SessionProvider>
  );
}

