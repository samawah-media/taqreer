/**
 * Shared email utilities using Nodemailer with Gmail
 * Singleton pattern to avoid creating transporter on every request
 */

import nodemailer from 'nodemailer';

// Create transporter once (Singleton pattern)
let transporter: nodemailer.Transporter | null = null;

export function getEmailTransporter(): nodemailer.Transporter {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
    }
    return transporter;
}

/**
 * Sends the initial welcome email with the report download link
 */
export async function sendWelcomeEmail(name: string, email: string): Promise<void> {
    const transport = getEmailTransporter();

    const mailOptions = {
        from: `"Samawah" <${process.env.GMAIL_USER}>`,
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

    await transport.sendMail(mailOptions);
}

/**
 * Sends the follow-up email after 3 days
 */
export async function sendFollowupEmail(name: string, email: string): Promise<void> {
    const transport = getEmailTransporter();

    const mailOptions = {
        from: `"Samawah Team" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'كيف كانت تجربتك مع تقرير سماوة؟',
        html: `
        <div dir="rtl" style="font-family: sans-serif; color: #333;">
          <h2>أهلاً ${name}،</h2>
          <p>مرت بضعة أيام منذ استلامك لتقرير <strong>الأصول الإعلامية</strong>. نأمل أنك وجدت فيه الفوائد التي تبحث عنها.</p>
          
          <p>هل اطلعت على قسم <strong>"العدسات الثلاث"</strong>؟ يعتقد الكثير من عملائنا أنها الخطوة الأهم لبناء استراتيجية محتوى ناجحة.</p>
          
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <p style="margin: 0; font-weight: bold;">💡 هل تحتاج لمساعدة في تطبيق ما جاء في التقرير؟</p>
            <p style="margin: 10px 0 0;">فريقنا متاح للإجابة على استفساراتك أو حجز استشارة سريعة لمناقشة احتياجاتك.</p>
          </div>

          <a href="https://wa.me/966537276942" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">تواصل معنا عبر واتساب</a>
          <br/><br/>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888;">سماوة للإنتاج | Samawah Production</p>
        </div>
      `
    };

    await transport.sendMail(mailOptions);
}
