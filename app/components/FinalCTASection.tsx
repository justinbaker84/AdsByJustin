import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="bg-blue-600 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Do You Want Kick Ass Ads?
        </h2>
        <Link href="/contact">
          <button className="bg-white text-blue-600 font-bold text-xl px-10 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}

