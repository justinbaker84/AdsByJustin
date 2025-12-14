import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

interface Section {
  title: string;
  content: string;
  imagePath: string | null;
}

interface TradeSecretsLayoutProps {
  pageTitle: string;
  subtitle: string;
  sections: Section[];
}

const SectionImage = ({ imagePath }: { imagePath: string | null }) => {
  if (!imagePath) return null;
  
  return (
    <div className="rounded-lg overflow-hidden inline-block">
      <img
        src={imagePath}
        alt="Section image"
        className="max-w-none"
      />
    </div>
  );
};

export default function TradeSecretsLayout({
  pageTitle,
  subtitle,
  sections,
}: TradeSecretsLayoutProps) {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
          <p className="text-2xl text-gray-700">{subtitle}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-40">
            {sections.map((section, index) => (
              <div key={index}>
                {/* If no image, center the content */}
                {!section.imagePath ? (
                  <>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-[800px] text-center mx-auto">
                      {section.content.split('\n\n').map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-lg text-gray-700 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </>
                ) : index % 2 === 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {section.title}
                      </h2>
                      <div className="prose prose-lg max-w-none">
                        {section.content.split('\n\n').map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-lg text-gray-700 leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <SectionImage imagePath={section.imagePath} />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                      <SectionImage imagePath={section.imagePath} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {section.title}
                      </h2>
                      <div className="prose prose-lg max-w-none">
                        {section.content.split('\n\n').map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-lg text-gray-700 leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Apply These Strategies?
          </h2>
          <Link href="/contact">
            <button className="bg-white text-blue-600 font-bold text-xl px-10 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg">
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

