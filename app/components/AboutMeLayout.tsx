import Link from 'next/link';
import Footer from './Footer';
import { ReactNode } from 'react';

interface ContentSection {
  title: string;
  description: string;
}

interface AboutMeLayoutProps {
  pageTitle: string;
  content: string | ContentSection[] | ReactNode;
  videoId?: string;
  videoFirst?: boolean;
  largeVideo?: boolean;
}

export default function AboutMeLayout({
  pageTitle,
  content,
  videoId,
  videoFirst = false,
  largeVideo = false,
}: AboutMeLayoutProps) {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* Video Section - First (if videoFirst is true) */}
      {videoFirst && videoId && (
        <section className="py-20 bg-gray-50">
          <div className={largeVideo ? "max-w-6xl mx-auto px-6" : "max-w-5xl mx-auto px-6"}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={videoId}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                title={pageTitle}
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {Array.isArray(content) ? (
            // 3-Column Grid Layout
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {content.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          ) : typeof content === 'string' ? (
            // Long-form Text Layout (string)
            <div className="max-w-[1050px]">
              {content.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            // React Elements Layout
            <div className="max-w-[1050px] space-y-6">
              {content}
            </div>
          )}
        </div>
      </section>

      {/* Video Section - Second (if videoFirst is false) */}
      {!videoFirst && videoId && (
        <section className="py-20 bg-gray-50">
          <div className={largeVideo ? "max-w-6xl mx-auto px-6" : "max-w-4xl mx-auto px-6"}>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              More Details
            </h2>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={videoId}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                title={pageTitle}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Grow Your Business?
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

