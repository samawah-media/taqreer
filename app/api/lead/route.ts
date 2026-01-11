import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ name, email, created_at: new Date() }]);

        if (dbError) {
            console.error('Supabase Error:', dbError);
            // We continue even if DB fails? Usually yes, or throw. Let's throw to be safe or just log.
            // For now, if DB fails, we probably shouldn't send the email, but let's stick to the flow.
            throw dbError;
        }

        // 2. Send Welcome Email via Nodemailer (Gmail)
        console.log('Attempting to send email to:', email);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // e.g., samawah.pod@gmail.com
                pass: process.env.GMAIL_PASS  // App Password from Google
            }
        });

        const mailOptions = {
            from: '"Samawah" <' + process.env.GMAIL_USER + '>',
            to: email,
            subject: 'استلام التقرير: تقرير الأصول الإعلامية - سماوة',
            html: `
        <div dir="rtl" style="font-family: sans-serif;">
          <h2>أهلاً ${name}،</h2>
          <p>شكراً لثقتك في سماوة. إليك رابط التقرير الاستراتيجي الذي طلبته:</p>
          <a href="https://samawah.com.sa/samawah-report-2025.pdf" style="background: #f43f5e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">تحميل التقرير الآن (PDF)</a>
          <p>ننتظر رأيك في جزئية (العدسات الثلاث). إذا كان لديك أي استفسار، يمكنك التواصل معنا مباشرة.</p>
          <hr />
          <p>فريق سماوة للإنتاج</p>
        </div>
      `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully via Gmail');

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Lead Generation Critical Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
