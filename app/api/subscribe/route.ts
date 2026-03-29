import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    // ── Replace this block with your email provider (e.g. Mailchimp, ConvertKit) ──
    // Example with Mailchimp:
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: { Authorization: `Basic ${btoa(`anystring:${API_KEY}`)}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    // });

    console.log('[subscribe] New subscriber:', email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    console.error('[subscribe] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
