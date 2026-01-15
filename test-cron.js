const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

// 1. Manually load .env.local since we are running a standalone script
const envPath = path.resolve(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        let value = match[2].trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        envVars[match[1].trim()] = value;
    }
});

const SUPABASE_URL = envVars.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const GMAIL_USER = envVars.GMAIL_USER;
const GMAIL_PASS = envVars.GMAIL_PASS;

if (!SUPABASE_URL || !SUPABASE_KEY || !GMAIL_USER || !GMAIL_PASS) {
    console.error('❌ Missing environment variables. Please check .env.local');
    process.exit(1);
}

// 2. Initialize Clients
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // For local testing only
    }
});

async function runTest() {
    console.log('🔄 Checking Supabase connection and table...');

    // 3. Check for specific column existence by trying to select it
    // We look for leads created > 3 days ago OR just any lead to test the column
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const { data, error } = await supabase
        .from('leads')
        .select('id, email, name, created_at, followup_sent') // Explicitly select the new column
        .lt('created_at', threeDaysAgo.toISOString())
        .is('followup_sent', null)
        .limit(1);

    if (error) {
        if (error.message.includes('followup_sent')) {
            console.error('❌ Error: The column "followup_sent" does not exist in the "leads" table.');
            console.error('👉 Please run this SQL in Supabase: alter table leads add column followup_sent boolean default null;');
        } else {
            console.error('❌ Database Error:', error.message);
        }
        return;
    }

    console.log('✅ Database connection successful.');
    console.log('✅ Column "followup_sent" verified.');

    if (data.length === 0) {
        console.log('⚠️ No pending leads found (older than 3 days).');
        console.log('💡 Tip: Manually edit a lead in Supabase to set "created_at" to 4 days ago to test the email.');

        // Optional: Verify SMTP connection anyway
        try {
            await transporter.verify();
            console.log('✅ Gmail SMTP connection verified! (Password is correct)');
        } catch (smtpError) {
            console.error('❌ Gmail SMTP Error:', smtpError.message);
        }

    } else {
        const lead = data[0];
        console.log(`📧 Found pending lead: ${lead.email} (${lead.name})`);
        console.log('🚀 Attempting to send test email...');

        try {
            const mailOptions = {
                from: `"Test Bot" <${GMAIL_USER}>`,
                to: lead.email,
                subject: 'تجربة نظام المتابعة الآلي - سماوة',
                text: `أهلاً ${lead.name}، هذه رسالة تجريبية للتأكد من عمل نظام الأتمتة.`
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ Email sent successfully!');

            // Update DB
            const { error: updateError } = await supabase
                .from('leads')
                .update({ followup_sent: true })
                .eq('id', lead.id);

            if (updateError) console.error('❌ Failed to update DB status:', updateError.message);
            else console.log('✅ Database updated successfully (Marked as sent).');

        } catch (emailError) {
            console.error('❌ Email Send Failed:', emailError.message);
        }
    }
}

runTest();
