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
    subject: '🎯 إليك دليلك العملي: تقرير الأصول الإعلامية - سماوة',
    html: `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
          <div style="background: #f43f5e; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">أهلاً ${name}</h1>
          </div>
          
          <div style="padding: 30px;">
            <p style="font-size: 18px;">يسعدنا جداً اهتمامك بتطوير استراتيجيتك الإعلامية. لقد قمنا بإعداد هذا التقرير ليكون <strong>بوصلة عملية</strong> تساعدك على تحويل حضورك الرقمي إلى أصول استراتيجية حقيقية.</p>
            
            <p style="font-weight: bold; color: #f43f5e; font-size: 18px;">ماذا ستحقق من هذا التقرير؟</p>
            <ul style="padding-right: 20px;">
              <li>فهم عميق لبيئة المحتوى الحالية وكيفية التميز فيها.</li>
              <li>التعرف على منهجية <strong>(العدسات الثلاث)</strong> التي نستخدمها في سماوة لتحليل المشاريع.</li>
              <li>خطوات عملية لبناء هوية رقمية مستدامة.</li>
            </ul>

            <div style="text-align: center; margin: 40px 0;">
              <a href="https://samawah.com.sa/reports/" style="background: #f43f5e; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 6px rgba(244, 63, 94, 0.2);">استكشاف تقارير سماوة (PDF)</a>
              <p style="font-size: 14px; color: #666; margin-top: 10px;">ستجد هذا التقرير ومجموعة واسعة من التقارير الإعلامية الأخرى بانتظارك</p>
            </div>

            <p style="background: #fff5f5; padding: 15px; border-radius: 8px; border-right: 4px solid #f43f5e;">
              <strong>💡 نصيحة سريعة:</strong> ستجد تقرير (الأصول الإعلامية 2025) متاحاً للتحميل المباشر في الصفحة، ننصحك بالبدء بقسم (العدسات الثلاث) لفهم التميز في بيئة المحتوى.
            </p>

            <p>نحن في سماوة نؤمن أن المحتوى هو الأصل الأغلى لأي علامة تجارية. إذا كان لديك أي استفسار، لا تتردد في الرد على هذا الإيميل مباشرة.</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            
            <p style="font-size: 14px; color: #888; text-align: center;">
              فريق سماوة للإنتاج | Samawah Production<br/>
              <a href="https://samawah.com.sa" style="color: #f43f5e; text-decoration: none;">زيارة موقعنا</a>
            </p>
          </div>
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
