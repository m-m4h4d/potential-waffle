import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Nodemailer verify error:', verifyError);
      return NextResponse.json(
        { error: 'Failed to connect to email service' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mahadbinashfaq@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #f4f4f5; padding-bottom: 10px;">New Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 20px;">Submitted from your portfolio contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}

