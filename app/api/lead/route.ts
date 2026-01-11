import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp = '', job = '', city = '', country = '' } = body;

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ name, email, whatsapp, job, city, country, created_at: new Date() }]);

        if (dbError) throw dbError;

        // 2. Send Welcome Email via Resend
        console.log('Attempting to send email to:', email);
        const emailResponse = await resend.emails.send({
            from: 'Samawah <onboarding@resend.dev>', // Replace with verified domain later
            to: email,
            subject: 'استلام التقرير: تقرير الأصول الإعلامية - سماوة',
            html: `
        <div dir="rtl" style="font-family: sans-serif;">
          <h2>أهلاً ${name}،</h2>
          <p>شكراً لثقتك في سماوة. إليك رابط التقرير الاستراتيجي الذي طلبته:</p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://samawah.com.sa'}/samawah-report-2025.pdf" style="background: #f43f5e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">تحميل التقرير الآن (PDF)</a>
          <p>ننتظر رأيك في جزئية (العدسات الثلاث). إذا كان لديك أي استفسار، يمكنك التواصل معنا مباشرة.</p>
          <hr />
          <p>فريق سماوة للإنتاج</p>
        </div>
      `
        });

        if (emailResponse.error) {
            console.error('Resend API Error:', emailResponse.error);
            // We don't throw here to allow the success response for the lead, but log it.
        } else {
            console.log('Email sent successfully:', emailResponse.data);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Lead Generation Critical Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
