import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// IMPORTANT: You need to replace this with the email address you want to receive notifications at.
const TO_EMAIL = 'your-email@example.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // This is a default, verified Resend address.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <hr>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
