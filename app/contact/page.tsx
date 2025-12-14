'use client';

import { useCallback } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Footer from '@/app/components/Footer';
import { submitContactForm } from '@/app/actions/contact';

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      if (!executeRecaptcha) {
        return;
      }

      const token = await executeRecaptcha('contact_form');
      formData.append('recaptchaToken', token);
      await submitContactForm(formData);
    },
    [executeRecaptcha]
  );

  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg resize-none"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get An Unfair Advantage
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-4xl text-gray-700 font-semibold text-center">
              Minimum budget $3,000 a month
            </p>
          </div>

          <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Fill out the form above and I&apos;ll review your account and get back to you within an hour.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
