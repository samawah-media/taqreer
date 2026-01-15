import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';
import { sendFollowupEmail } from '../../../../lib/email';

export const dynamic = 'force-dynamic'; // Prevent caching

export async function GET(request: Request) {
    try {
        // ✅ Security Check (REQUIRED - no bypass if secret is missing)
        const authHeader = request.headers.get('authorization');
        const cronSecret = process.env.CRON_SECRET;

        // If CRON_SECRET is not configured, reject all requests
        if (!cronSecret) {
            console.error('CRON_SECRET is not configured');
            return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
        }

        if (authHeader !== `Bearer ${cronSecret}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 1. Calculate Date Range (3 days ago)
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        // 2. Query Supabase
        const { data: leads, error: dbError } = await supabase
            .from('leads')
            .select('id, name, email, created_at, followup_sent')
            .lt('created_at', threeDaysAgo.toISOString())
            .is('followup_sent', null)
            .limit(20); // Process in batches to avoid timeout

        if (dbError) {
            console.error('Cron DB Error:', dbError);
            return NextResponse.json({ error: dbError.message }, { status: 500 });
        }

        if (!leads || leads.length === 0) {
            return NextResponse.json({ message: 'No pending follow-ups found' });
        }

        console.log(`Found ${leads.length} leads to follow up.`);

        // 3. Send Emails Loop
        const results: Array<{ email: string; status: string; error?: string }> = [];

        for (const lead of leads) {
            try {
                await sendFollowupEmail(lead.name, lead.email);

                // 4. Update DB (Mark as sent)
                const { error: updateError } = await supabase
                    .from('leads')
                    .update({ followup_sent: true })
                    .eq('id', lead.id);

                if (updateError) {
                    console.error(`Failed to update status for ${lead.email}`, updateError);
                    results.push({ email: lead.email, status: 'failed_update', error: updateError.message });
                } else {
                    results.push({ email: lead.email, status: 'sent' });
                }

            } catch (emailError: any) {
                console.error(`Failed to send email to ${lead.email}`, emailError);
                results.push({ email: lead.email, status: 'failed_send', error: emailError.message });
            }
        }

        return NextResponse.json({ success: true, results });

    } catch (error: any) {
        console.error('Cron Job Critical Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
