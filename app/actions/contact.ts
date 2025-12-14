'use server';

import { Resend } from 'resend';
import { redirect } from 'next/navigation';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success && data.score >= 0.5;
}

export async function submitContactForm(formData: FormData) {
  const recaptchaToken = formData.get('recaptchaToken') as string;
  
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    redirect('/contact');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  await resend.emails.send({
    from: 'Ads By Justin Contact Form <noreply@adsbyjustin.com>',
    to: 'admin@getxperts.com',
    subject: `New AdsByJustin Contact Form Submission from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  redirect('/thank-you');
}
