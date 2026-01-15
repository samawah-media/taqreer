import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { isValidEmail, validateName } from '../../../lib/validation';
import { sendWelcomeEmail } from '../../../lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // ✅ Input Validation
        const sanitizedName = validateName(name);
        if (!sanitizedName) {
            return NextResponse.json(
                { success: false, error: 'الاسم غير صحيح (يجب أن يكون بين 2 و 100 حرف)' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, error: 'البريد الإلكتروني غير صحيح' },
                { status: 400 }
            );
        }

        const cleanEmail = email.trim().toLowerCase();

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ name: sanitizedName, email: cleanEmail, created_at: new Date() }]);

        if (dbError) {
            console.error('Supabase Error:', dbError);
            throw dbError;
        }

        // 2. Send Welcome Email
        console.log('Attempting to send email to:', cleanEmail);
        await sendWelcomeEmail(sanitizedName, cleanEmail);
        console.log('Email sent successfully via Gmail');

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Lead Generation Critical Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
