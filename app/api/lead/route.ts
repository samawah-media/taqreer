import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, job, city } = body;

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ name, email, whatsapp, job, city, created_at: new Date() }]);

        if (dbError) throw dbError;

        // 2. Send Welcome Email via Resend
        await resend.emails.send({
            from: 'Samawah <onboarding@resend.dev>', // Replace with verified domain later
            to: email,
            subject: 'شكراً لاهتمامك بتقرير الأصول الإعلامية - سماوة',
            html: `
        <div dir="rtl" style="font-family: sans-serif;">
          <h2>أهلاً ${name}،</h2>
          <p>شكراً لثقتك في سماوة. إليك رابط التقرير الاستراتيجي الذي طلبته:</p>
          <a href="https://samawah.store/" style="background: #f43f5e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">تصفح التقرير الآن</a>
          <p>ننتظر رأيك في جزئية (العدسات الثلاث). إذا كان لديك أي استفسار، يمكنك التواصل معنا مباشرة عبر الواتساب.</p>
          <hr />
          <p>فريق سماوة للإنتاج</p>
        </div>
      `
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Lead Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
