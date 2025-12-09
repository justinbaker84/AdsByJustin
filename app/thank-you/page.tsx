import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Thank You - Ads By Justin',
  description: 'Thank you for contacting me',
};

export default function ThankYou() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Thank You
          </h1>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            If we are a good match I will be in touch in less than 24 hours.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            In the meantime...
          </h2>
          <p className="text-xl mb-8">
            Check out some of my <a href="/trade-secrets/google-ads" className="underline hover:text-gray-100 transition">Trade Secrets</a> or <a href="/case-studies/launch-financial" className="underline hover:text-gray-100 transition">Case Studies</a> to learn more about what I do.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

