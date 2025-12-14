import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';

export const metadata = {
  title: 'Thank You - Ads By Justin',
  description: 'Thank you for contacting me',
};

export default function ThankYou() {
  return (
    <main className="bg-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Thank You
          </h1>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 mb-80">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            If we are a good match I will be in touch in less than 24 hours.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

